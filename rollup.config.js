import rimraf from 'rimraf';
import createUserstyles from './src/scripts/create-userstyle';
import { version } from './package.json';
import { terser } from 'rollup-plugin-terser';

import html from '@web/rollup-plugin-html';
import { copy } from '@web/rollup-plugin-copy';
import resolve from '@rollup/plugin-node-resolve';
import minifyHTML from 'rollup-plugin-minify-html-literals';
import summary from 'rollup-plugin-summary';
import postcss from 'rollup-plugin-postcss';

rimraf.sync('public');
rimraf.sync('docs');

export default [
	{ /* Generate recoloring css */
		input: 'src/scripts/app.js',
		output: {
			dir: 'public/'
		},
		plugins: [
			createUserstyles(version),
		]
	},
	{ /* Generate worker */
		input: 'site/src/scripts/worker.js',
		output: {
			file: 'docs/scripts/worker.js',
			format: 'es',
		},
		plugins: [
			resolve(),
			terser(),
		],
	},
	{ /* Generate site */
		output: {
			dir: 'docs',
		},
		preserveEntrySignatures: 'strict',
		plugins: [
			html({
				input: 'site/src/index.html',
				transformHtml: [
					html => html.replace(/<(.*)data-version="unknown"(.*?)>.*?</, `<$1data-version="${version}"$2>${version}<`),
					html => html.replaceAll(/<link rel="stylesheet" href="(.*?).css">/g, `
						<link rel="preload" href="$1.css" as="style" onload="this.onload=null;this.rel='stylesheet'">
						<noscript>
							<link rel="stylesheet" href="$1.css">
						</noscript>
					`)
				],
				minify:true,
			}),
			postcss({
				minimize: true,
				inject: false,
			}),
			// Resolve bare module specifiers to relative paths
			resolve(),
			// Minify HTML template literals
			minifyHTML(),
			// Minify JS
			terser({
				ecma: 2020,
				module: true,
				warnings: true,
			}),
			// Print bundle summary
			summary(),
			// Copy static assets to build directory
			copy({
				patterns: [ 'fonts/*.woff2', 'meta/mashup.png' ],
				rootDir: './site'
			}),
		],
	}
];
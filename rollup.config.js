import { rimrafSync } from 'rimraf';

import terser from '@rollup/plugin-terser';
import resolve from '@rollup/plugin-node-resolve';
import { rollupPluginHTML } from '@web/rollup-plugin-html';
import { copy } from '@web/rollup-plugin-copy';
import postcss from 'rollup-plugin-postcss';
import summary from "rollup-plugin-summary";

import createUserstyles from './src/scripts/create-userstyle.js';

import { readFileSync } from 'fs';

const version = JSON.parse(readFileSync(new URL('./package.json', import.meta.url))).version;
const styleDir = './src/styles';

rimrafSync('themes');
rimrafSync('public');
rimrafSync('docs');

export default [
	{ /* Generate recoloring css */
		input: 'src/scripts/app.js',
		output: {
			dir: 'themes/'
		},
		plugins: [
			createUserstyles(version, styleDir),
		]
	},
	{ /* Legacy location for styles */
		input: 'src/scripts/app.js',
		output: {
			dir: 'public/'
		},
		plugins: [
			createUserstyles(version, styleDir),
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
			rollupPluginHTML({
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
			// Minify JS
			terser({
				ecma: 2020,
				module: true,
				warnings: true,
			}),
			// Copy static assets to build directory
			copy({
				patterns: [ 'themes/*.user.css' ],
				rootDir: './'
			}),
			copy({
				patterns: [ 'fonts/*.woff2', 'meta/mashup.png' ],
				rootDir: './site'
			}),
			copy({
				patterns: [ 'inert.esm.js' ],
				rootDir: './node_modules/wicg-inert/dist'
			}),
			// Print bundle summary
			summary()
		],
	}
];
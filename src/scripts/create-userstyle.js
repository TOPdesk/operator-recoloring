/* eslint-disable */
import { readFileSync } from 'fs';
import { themes, legacyTheme as theme } from "../themes/index.js";
import { sections } from "./sections.js";

export default function createUserstyles(version, stylesDir) {
	// No need for build input file thanks to https://stackoverflow.com/a/72053820/127947
	const emptyRunId = 'no-need-for-input';

	return {
		name: 'create-userstyle-plugin',
		buildStart() {
			// To stop rollup whining about an input file
			this.emitFile({
					id: emptyRunId,
					fileName: emptyRunId,
					type: 'chunk',
			});
		},
		resolveId(source) {
			if (source === emptyRunId) {
					// The leading \0 instructs other plugins and rollup not to try to resolve, load or transform this module
					return `\0${emptyRunId}`;
			}
			return null;
		},
		load(id) {
			if (id.includes(emptyRunId)) {
					// some random code to avoid rollup empty chunk warning
					return 'export const empty = true;';
			}

			return null;
		},
		generateBundle(_options, bundle) {
			if (bundle[emptyRunId]) {
				delete bundle[emptyRunId];
			}

			const styles = userStyles(stylesDir);

			themes.forEach(theme => {
				this.emitFile({
					type: 'asset',
					source: `${metadata(version, theme)}${styles}`,
					fileName: `topdesk-operator-recoloring.${theme.name}.user.css`
				});
			});
		}
	};
}

function metadata(version, theme) {
	return `
/* ==UserStyle==
@name           ${theme.displayName} (TOPdesk Operator Recoloring)
@namespace      github.com/topdesk/topdesk-operator-recoloring
@version        ${version}
@description    Override the colors of the TOPdesk operator section, for accessibility purposes.
@homepageURL    https://github.com/TOPdesk/operator-recoloring
@supportURL     https://github.com/TOPdesk/operator-recoloring/issues
@updateURL      https://topdesk.github.io/operator-recoloring/themes/topdesk-operator-recoloring.${theme.name}.user.css
@license        MIT
@preprocessor   default
${variables(theme)}
==/UserStyle== */`;
}

function variables(theme) {

	return `
@var color background "Background" ${theme.background}
@var text background-filter "Background filter" ${theme.backgroundFilter}
@var color on-background "On background" ${theme.onBackground}
@var text on-background-filter "On background filter" ${theme.onBackgroundFilter}
@var color selection "Selection" ${theme.selection}
@var color on-selection "On selection" ${theme.onSelection}
@var color surface "Surface" ${theme.surface}
@var text surface-filter "Surface filter" ${theme.surfaceFilter}
@var color on-surface "On surface" ${theme.onSurface}
@var text on-surface-filter "On surface filter" ${theme.onSurfaceFilter}
@var color disabled "Disabled" ${theme.disabled}
@var text disabled-filter "Disabled filter" ${theme.disabledFilter}
@var color on-disabled "On disabled" ${theme.onDisabled}
@var text on-disabled-filter "On disabled filter" ${theme.onDisabledFilter}
@var color primary "Primary" ${theme.primary}
@var text primary-filter "Primary filter" ${theme.primaryFilter}
@var color primary-muted "Primary muted" ${theme.primaryMuted}
@var text primary-muted-filter "Primary muted filter" ${theme.primaryMutedFilter}
@var color on-primary "On primary" ${theme.onPrimary}
@var text on-primary-filter "On primary filter" ${theme.onPrimaryFilter}
@var color error "Error" ${theme.error}
@var text error-filter "Error filter" ${theme.errorFilter}
@var color on-error "On error" ${theme.onError}
@var text on-error-filter "On error filter" ${theme.onErrorFilter}`;
}

function userStyles(stylesDir) {
	return sections.map(section => userStylesSection(stylesDir, section.paths, section.files)).join('');
}

function userStylesSection(stylesDir, paths, files) {
	const pathsArray = Array.isArray(paths) ? paths : Array.of(paths);
	const filesArray = Array.isArray(files) ? files : Array.of(files);

	const regexes = pathsArray.map(regex => `regexp("http(s)?://.*${regex}")`).join(', ');
	const content = filesArray
		.map(file => readFileSync(stylesDir + file, {encoding: 'utf8'}).trimEnd())
		.join("")
		.replace(/^(?!\s*$)/gm, '\t')
		;

	return '\n@-moz-document ' + regexes + ' {\n' + content + '\n}';
}

/* eslint-disable */
import { readFileSync } from 'fs';
import { themes, legacyTheme as theme } from "../themes/index.js";

export default function createUserstyles(version) {
	return {
		name: 'create-userstyle-plugin',
		async generateBundle(_options, bundle) {
			const styles = userStyles();

			this.emitFile({
				type: 'asset',
				source: `${metadata(version, theme)}${styles}`,
				fileName: 'topdesk-operator-recoloring.user.css'
			});

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

function userStyles() {
	return `
@-moz-document regexp("http(s)?://.*/tas/(secure|public)/login/form.*"), regexp("http(s)?://.*/tas/(secure|public)/login/saml"), regexp("http(s)?://.*/tas/(secure|public)/logout"), regexp("http(s)?://.*/tas/admin/.*") {
${readFileSync(__dirname + '/src/styles/login/login.css', {encoding: 'utf8'})}
}
@-moz-document regexp("http(s)?://.*/passwordforgottenrequest.*") {
${readFileSync(__dirname + '/src/styles/login/passwordforgotten.css', {encoding: 'utf8'})}
}
@-moz-document regexp("http(s)?://.*/tas/secure/mango/.*"), regexp("http(s)?://.*/services/workflows-v2.*"), regexp("http(s)?://.*/tas/secure/[^assetmgmt].*?action=.*"), regexp("http(s)?://.*/tas/secure/suggestions/.*"), regexp("http(s)?://.*/tas/secure/homescreen-html-widgets/.*"), regexp("http(s)?://.*/tas/secure/shareandsubscribe/.*"), regexp("http(s)?://.*/tas/secure/emaileditor/.*") {
${readFileSync(__dirname + '/src/styles/button.css', { encoding: 'utf8' })}
${readFileSync(__dirname + '/src/styles/general.css', {encoding: 'utf8'})}
${readFileSync(__dirname + '/src/styles/tab.css', {encoding: 'utf8'})}
${readFileSync(__dirname + '/src/styles/menu.css', {encoding: 'utf8'})}
${readFileSync(__dirname + '/src/styles/feed.css', {encoding: 'utf8'})}
${readFileSync(__dirname + '/src/styles/process-pages.css', {encoding: 'utf8'})}
${readFileSync(__dirname + '/src/styles/suggestions.css', {encoding: 'utf8'})}
${readFileSync(__dirname + '/src/styles/share.css', {encoding: 'utf8'})}
${readFileSync(__dirname + '/src/styles/form.css', {encoding: 'utf8'})}
${readFileSync(__dirname + '/src/styles/knowledge-item.css', {encoding: 'utf8'})}
${readFileSync(__dirname + '/src/styles/email.css', {encoding: 'utf8'})}
${readFileSync(__dirname + '/src/styles/selection.css', {encoding: 'utf8'})}
${readFileSync(__dirname + '/src/styles/card.css', {encoding: 'utf8'})}
${readFileSync(__dirname + '/src/styles/planboard.css', {encoding: 'utf8'})}
${readFileSync(__dirname + '/src/styles/reservations.css', {encoding: 'utf8'})}
${readFileSync(__dirname + '/src/styles/taskboard.css', {encoding: 'utf8'})}
${readFileSync(__dirname + '/src/styles/change.css', {encoding: 'utf8'})}
${readFileSync(__dirname + '/src/styles/time-registration.css', {encoding: 'utf8'})}
${readFileSync(__dirname + '/src/styles/audit-trail.css', {encoding: 'utf8'})}
}
@-moz-document regexp("http(s)?://.*/tas/secure/concurrent_users/.*") {
${readFileSync(__dirname + '/src/styles/concurrent-users.css', {encoding: 'utf8'})}
}
@-moz-document regexp("http(s)?://.*/tas/secure/grid.*"), regexp("http(s)?://.*/tas/secure/[^assetmgmt].*?action=.*") {
${readFileSync(__dirname + '/src/styles/grid.css', {encoding: 'utf8'})}
}
@-moz-document regexp("http(s)?://.*/tas/secure/agileboard/.*") {
${readFileSync(__dirname + '/src/styles/agileboard.css', {encoding: 'utf8'})}
}
@-moz-document regexp("http(s)?://.*/tas/secure/assetmgmt/module-page-buttons.*") {
${readFileSync(__dirname + '/src/styles/assetmgmt/module-page-buttons.css', {encoding: 'utf8'})}
}
@-moz-document regexp("http(s)?://.*/tas/secure/assetmgmt/module-page-migration-information.*") {
${readFileSync(__dirname + '/src/styles/assetmgmt/module-page-migration.css', {encoding: 'utf8'})}
}
@-moz-document regexp("http(s)?://.*/tas/secure/assetmgmt/overview.*") {
${readFileSync(__dirname + '/src/styles/assetmgmt/overview.css', {encoding: 'utf8'})}
}
@-moz-document regexp("http(s)?://.*/tas/secure/assetmgmt/card.*"), regexp("http(s)?://.*/tas/secure/assetmgmt/settings.*") {
${readFileSync(__dirname + '/src/styles/assetmgmt/card.css', {encoding: 'utf8'})}
}
@-moz-document regexp("http(s)?://.*/tas/secure/assetmgmt/bulk-edit.*") {
${readFileSync(__dirname + '/src/styles/assetmgmt/bulk-edit.css', {encoding: 'utf8'})}
}
@-moz-document regexp("http(s)?://.*/services/active-user-overview.*") {
${readFileSync(__dirname + '/src/styles/active-user-overview.css', {encoding: 'utf8'})}
}
@-moz-document regexp("http(s)?://.*/services/user-group-linking-ui/.*") {
${readFileSync(__dirname + '/src/styles/user-group-linking.css', {encoding: 'utf8'})}
}
@-moz-document regexp("http(s)?://.*/services/knowledge-base-ui-v1/overview.*") {
${readFileSync(__dirname + '/src/styles/knowledge-base-startpage.css', {encoding: 'utf8'})}
}
@-moz-document regexp("http(s)?://.*/tas/secure/assetmgmt/bulk-edit.*"), regexp("http(s)?://.*/tas/secure/assetmgmt/overview.*"), regexp("http(s)?://.*/services/active-user-overview.*"), regexp("http(s)?://.*/services/user-group-linking-ui/.*"), regexp("http(s)?://.*/services/knowledge-base-ui-v1/overview.*") {
${readFileSync(__dirname + '/src/styles/design-system/feedback.css', {encoding: 'utf8'})}
${readFileSync(__dirname + '/src/styles/design-system/button.css', {encoding: 'utf8'})}
${readFileSync(__dirname + '/src/styles/design-system/panel.css', {encoding: 'utf8'})}
${readFileSync(__dirname + '/src/styles/design-system/select.css', {encoding: 'utf8'})}
${readFileSync(__dirname + '/src/styles/design-system/switch.css', {encoding: 'utf8'})}
}`;
}
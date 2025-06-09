# TOPdesk operator recoloring

Override the colors of TOPdesk operator section, for accessibility purposes.

Go to the [TOPdesk Operator Recoloring](https://topdesk.github.io/operator-recoloring/) website for a full explanation and installation instructions!

## Purpose
This project provides styles to be injected into TOPdesk by [the stylus browser extension](https://add0n.com/stylus.html). With this you can change the colors of the TOPdesk operator section to aid with dyslexia, color blindness, contrast sensitivity, etc.

There is no intent to achieve completeness, let alone prettyness, the goal is to help users with visual impairments that may be alleviated by color adjustments.

## Developing

### Running locally
1. Use any static fileserver, e.g. the [Live Server extension](https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer) for VS Code, to serve the css files in the `src/styles` folder.
1. Click the stylus extension button, and choose **Manage**.
1. Under "Actions" click **Write new style**. Make sure the **as Usercss** checkbox is unchecked.
1. Give the new style a name, e.g. Local test recoloring.
1. Paste the code below into the empty "Code 1" section.
1. This will spawn a popup with the pasted code, confirm by clicking **Overwrite style**.
1. Adjust the host of the `@import` url's if necessary.
1. Give the style a nice name in the text box under **Add Style** in the sidebar.
1. Click **Save**.

The local recoloring will now apply to your TOPdesk environment. Add a `cobalt`, `green` attribute to the `<html>` element to test a theme other than "default dark".

Finally, two points of note:
1. Make sure any other recoloring themes are off to prevent interference. You can quickly enable/disable a style in the Stylus dropdown when a TOPdesk environment is loaded.
1. Make sure to enable the **Support custom colors** user setting in TOPdesk. Some styling requires the extra attributes in the HTML to be able to apply correctly.

```css
@-moz-document regexp("http(s)?://.*/tas/(secure|public)/login/form.*"), regexp("http(s)?://.*/tas/(secure|public)/login/saml"), regexp("http(s)?://.*/tas/(secure|public)/logout"), regexp("http(s)?://.*/tas/admin/.*") {
	@import url("http://localhost:5500/src/test-styles/variables.css");
	@import url("http://localhost:5500/src/test-styles/local-rec-message.css");

	@import url("http://localhost:5500/src/styles/login/login.css");

	/* Just a reminder to serve the files, things become quite slow otherwise */
	div#content-container:before {
		content: var(--local-rec-message, 'Local Recoloring Server \00000a⚠ OFF ⚠');
		color: var(--local-rec-message-color, red);
		font-size: 1.5rem;
		white-space: pre;
	}
}
@-moz-document regexp("http(s)?://.*/passwordforgottenrequest.*") {
	@import url("http://localhost:5500/src/test-styles/variables.css");

	@import url("http://localhost:5500/src/styles/login/passwordforgotten.css");
}
@-moz-document regexp("http(s)?://.*/tas/secure/mango/.*"), regexp("http(s)?://.*/services/workflows-v2.*"), regexp("http(s)?://.*/tas/secure/(?!assetmgmt).*?action=.*"), regexp("http(s)?://.*/tas/secure/suggestions/.*"), regexp("http(s)?://.*/tas/secure/homescreen-html-widgets/.*"), regexp("http(s)?://.*/tas/secure/shareandsubscribe/.*") {
	@import url("http://localhost:5500/src/test-styles/variables.css");

	@import url("http://localhost:5500/src/styles/button.css");
	@import url("http://localhost:5500/src/styles/general.css");
	@import url("http://localhost:5500/src/styles/tab.css");
	@import url("http://localhost:5500/src/styles/menu.css");
	@import url("http://localhost:5500/src/styles/feed.css");
	@import url("http://localhost:5500/src/styles/process-pages.css");
	@import url("http://localhost:5500/src/styles/suggestions.css");
	@import url("http://localhost:5500/src/styles/share.css");
	@import url("http://localhost:5500/src/styles/form.css");
	@import url("http://localhost:5500/src/styles/knowledge-item.css");
	@import url("http://localhost:5500/src/styles/selection.css");
	@import url("http://localhost:5500/src/styles/card.css");
	@import url("http://localhost:5500/src/styles/planboard.css");
	@import url("http://localhost:5500/src/styles/reservations.css");
	@import url("http://localhost:5500/src/styles/taskboard.css");
	@import url("http://localhost:5500/src/styles/change.css");
	@import url("http://localhost:5500/src/styles/time-registration.css");
	@import url("http://localhost:5500/src/styles/audit-trail.css");
	@import url("http://localhost:5500/src/styles/service.css");
	@import url("http://localhost:5500/src/styles/form-editor.css");
	@import url("http://localhost:5500/src/styles/action-card.css");
}
@-moz-document regexp("http(s)?://.*/tas/secure/emaileditor/.*") {
	@import url("http://localhost:5500/src/test-styles/variables.css");

	@import url("http://localhost:5500/src/styles/email.css");
}
@-moz-document regexp("http(s)?://.*/tas/secure/mango/.*") {
	@import url("http://localhost:5500/src/test-styles/variables.css");

	@import url("http://localhost:5500/src/styles/graphic-overview.css");
}
@-moz-document regexp("http(s)?://.*/tas/secure/concurrent_users/.*") {
	@import url("http://localhost:5500/src/test-styles/variables.css");

	@import url("http://localhost:5500/src/styles/concurrent-users.css");
}
@-moz-document regexp("http(s)?://.*/tas/secure/grid.*"), regexp("http(s)?://.*/tas/secure/(?!assetmgmt).*?action=.*") {
	@import url("http://localhost:5500/src/test-styles/variables.css");

	@import url("http://localhost:5500/src/styles/grid.css");
}

@-moz-document regexp("http(s)?://.*/tas/secure/agileboard/.*") {
	@import url("http://localhost:5500/src/test-styles/variables.css");

	@import url("http://localhost:5500/src/styles/agileboard.css");
}

@-moz-document regexp("http(s)?://.*/tas/secure/agileboard/.*") {
	@import url("http://localhost:5500/src/test-styles/variables.css");

	@import url("http://localhost:5500/src/styles/agileboard.css");
}

@-moz-document regexp("http(s)?://.*/tas/secure/assetmgmt/module-page-buttons.*") {
	@import url("http://localhost:5500/src/test-styles/variables.css");

	@import url("http://localhost:5500/src/styles/assetmgmt/module-page-buttons.css");
}

@-moz-document regexp("http(s)?://.*/tas/secure/assetmgmt/module-page-migration-information.*") {
	@import url("http://localhost:5500/src/test-styles/variables.css");

	@import url("http://localhost:5500/src/styles/assetmgmt/module-page-migration.css");
}

@-moz-document regexp("http(s)?://.*/tas/secure/assetmgmt/overview.*") {
	@import url("http://localhost:5500/src/test-styles/variables.css");

	@import url("http://localhost:5500/src/styles/assetmgmt/overview.css");
	@import url("http://localhost:5500/src/styles/assetmgmt/overview-with-ds.css");
}

@-moz-document regexp("http(s)?://.*/tas/secure/assetmgmt/card.*"), regexp("http(s)?://.*/tas/secure/assetmgmt/settings.*") {
	@import url("http://localhost:5500/src/test-styles/variables.css");

	@import url("http://localhost:5500/src/styles/assetmgmt/card.css");
}
@-moz-document regexp("http(s)?://.*/tas/secure/assetmgmt/bulk-edit.*") {
	@import url("http://localhost:5500/src/test-styles/variables.css");

	@import url("http://localhost:5500/src/styles/assetmgmt/bulk-edit.css");
}
@-moz-document regexp("http(s)?://.*/services/active-user-overview.*") {
    @import url("http://localhost:5500/src/test-styles/variables.css");

    @import url("http://localhost:5500/src/styles/active-user-overview.css");
}
@-moz-document regexp("http(s)?://.*/services/user-group-linking-ui/.*") {
    @import url("http://localhost:5500/src/test-styles/variables.css");

    @import url("http://localhost:5500/src/styles/user-group-linking.css");
}
@-moz-document regexp("http(s)?://.*/services/knowledge-base-ui-v1/overview.*") {
    @import url("http://localhost:5500/src/test-styles/variables.css");

    @import url("http://localhost:5500/src/styles/knowledgebase-v1/overview.css");
}
@-moz-document regexp("http(s)?://.*/services/knowledge-base-ui-v1/details-page.*") {
    @import url("http://localhost:5500/src/test-styles/variables.css");

    @import url("http://localhost:5500/src/styles/knowledgebase-v1/knowledgeitem.css");
}
@-moz-document regexp("http(s)?://.*/tas/secure/assetmgmt/bulk-edit.*"), regexp("http(s)?://.*/tas/secure/assetmgmt/overview.*"), regexp("http(s)?://.*/services/active-user-overview.*"), regexp("http(s)?://.*/services/user-group-linking-ui/.*"), regexp("http(s)?://.*/services/knowledge-base-ui-v1/.*") {
    @import url("http://localhost:5500/src/test-styles/variables.css");

    @import url("http://localhost:5500/src/styles/design-system/feedback.css");
    @import url("http://localhost:5500/src/styles/design-system/button.css");
    @import url("http://localhost:5500/src/styles/design-system/panel.css");
    @import url("http://localhost:5500/src/styles/design-system/select.css");
    @import url("http://localhost:5500/src/styles/design-system/switch.css");
    @import url("http://localhost:5500/src/styles/design-system/datatable.css");
    @import url("http://localhost:5500/src/styles/design-system/pagination.css");
    @import url("http://localhost:5500/src/styles/design-system/search.css");
    @import url("http://localhost:5500/src/styles/design-system/modal.css");
    @import url("http://localhost:5500/src/styles/design-system/tag.css");
    @import url("http://localhost:5500/src/styles/design-system/pageheader.css");
    @import url("http://localhost:5500/src/styles/design-system/breadcrumbs.css");
    @import url("http://localhost:5500/src/styles/design-system/tabs.css");
}
@-moz-document regexp("http(s)?://.*/tas/secure/hardware(?!\?action=showlist).*"), regexp("http(s)?://.*/tas/secure/software(?!\?action=showlist).*"), regexp("http(s)?://.*/tas/secure/license(?!\?action=showlist).*"), regexp("http(s)?://.*/tas/secure/telephonesystems(?!\?action=showlist).*"), regexp("http(s)?://.*/tas/secure/networkcomponent(?!\?action=showlist).*"), regexp("http(s)?://.*/tas/secure/inventory(?!\?action=showlist).*"), regexp("http(s)?://.*/tas/secure/free\dobject(?!\?action=showlist).*") {
    @import url("http://localhost:5500/src/test-styles/variables.css");

    @import url("http://localhost:5500/src/styles/configurationmgmt.css");
}
```



### Releasing a user style update
The user style css files for each theme are generated during the `build` step.
This step is automatically executed during deployment on GitHub after every push.

For any kind of update to the styles, update the version number in the `package.json` file.
This number is injected in the user style files, allowing Stylus to update the style either by user request or in the automated update cycle.

A new version number will also be picked up by the deployment script and that commit will be tagged with the version number in Git.

Updates to the site are *not* versioned.


### Homepage
The [homepage](https://topdesk.github.io/operator-recoloring/) is a static page hosted by github pages, all the source files for the homepage are located in the `site` folder.

The actual website is generated by a GitHub action, but you can also build it locally with `npm run build`. You can then find the files in the `docs` folder.

Note that the homepage also comes with `worker.js`, which calculates  a filter value for a given rgb value. This calculation is moved off the main thread as it can take a while for the calculation to arrive at a suitable answer.

### Forcing an update of the user style

When a new version becomes available Stylus will automatically update it after a while.

If you do not want to wait for the automated check to run, you can force an update:

- Click on the Stylus extension icon in the browser bar, and click the **Manage** button in the popup.
	- This will open a new tab with the overview of all the installed styles.
- Click the **Check all styles for updates** button under **Actions**.
	- When it has found updates, an **Apply all updates** button will appear underneath, and the overview will change to show only the styles for which it has found updates.
	- If the update is __very__ recent, Stylus may not yet be able to find it.
	- If Stylus can't find it after 5 minutes, it is likely that a syntax error is present in the user.css.
updates.
- Click the **Apply all updates** button that appeared underneath the **Check all styles** button,
	- Alternatively, use the **Install update** down arrow icon in a style row to update only that style.

# TOPdesk operator recoloring

Override the colors of TOPdesk operator section, for accessibility purposes.

Go to the [TOPdesk Operator Recoloring](https://topdesk.github.io/operator-recoloring/) website for a full explanation and installation instructions!

## Purpose
This project provides styles to be injected into TOPdesk by [the stylus browser extension](https://add0n.com/stylus.html). With this you can change the colors of the TOPdesk operator section to aid with dyslexia, color blindness, contrast sensitivity, etc.

There is no intent to achieve completeness, let alone prettyness, the goal is to help users with visual impairments that may be alleviated by color adjustments.

## Developing

### Running locally
1. Use any static fileserver, e.g. the [Live Server extension](https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer) for VS Code, to serve the css files in the `styles` folder.
1. Click the stylus extension button, and choose **Manage**.
1. Under "Actions" click **Write new style**. Make sure the **as Usercss** checkbox is unchecked.
1. Give the new style a name, e.g. Local test recoloring.
1. Click the **Import** button, a popup will appear with the title "Paste the Mozilla-format code".
1. Copy the code below into the popup, adjust import url's if necessary.
1. Click **Overwrite style**, the popup will close and a section will be created for each "@-moz-document" rule.
1. Click **Save**.
1. Enable the new style when in your TOPdesk environment (and make sure other styles are off).
1. Make sure to enable the **Support custom colors** settings for your test user.
1. You can test the schemes by adding a `cobalt`, `green`, or `default` attribute to the `<html>` element.

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
@-moz-document regexp("http(s)?://.*/tas/secure/mango/.*"), regexp("http(s)?://.*/services/workflows-v2.*"), regexp("http(s)?://.*/tas/secure/[^assetmgmt].*?action=.*"), regexp("http(s)?://.*/tas/secure/suggestions/.*"), regexp("http(s)?://.*/tas/secure/homescreen-html-widgets/.*"), regexp("http(s)?://.*/tas/secure/shareandsubscribe/.*"), regexp("http(s)?://.*/tas/secure/emaileditor/.*") {
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
	@import url("http://localhost:5500/src/styles/email.css");
	@import url("http://localhost:5500/src/styles/selection.css");
	@import url("http://localhost:5500/src/styles/card.css");
	@import url("http://localhost:5500/src/styles/planboard.css");
	@import url("http://localhost:5500/src/styles/reservations.css");
	@import url("http://localhost:5500/src/styles/taskboard.css");
	@import url("http://localhost:5500/src/styles/change.css");
	@import url("http://localhost:5500/src/styles/time-registration.css");
	@import url("http://localhost:5500/src/styles/audit-trail.css");
}

@-moz-document regexp("http(s)?://.*/tas/secure/concurrent_users/.*") {
	@import url("http://localhost:5500/src/test-styles/variables.css");

	@import url("http://localhost:5500/src/styles/concurrent-users.css");
}
@-moz-document regexp("http(s)?://.*/tas/secure/grid.*"), regexp("http(s)?://.*/tas/secure/[^assetmgmt].*?action=.*") {
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

    @import url("http://localhost:5500/src/styles/knowledge-base-startpage.css");
}
@-moz-document regexp("http(s)?://.*/tas/secure/assetmgmt/bulk-edit.*"), regexp("http(s)?://.*/tas/secure/assetmgmt/overview.*"), regexp("http(s)?://.*/services/active-user-overview.*"), regexp("http(s)?://.*/services/user-group-linking-ui/.*"), regexp("http(s)?://.*/services/knowledge-base-ui-v1/overview.*") {
    @import url("http://localhost:5500/src/test-styles/variables.css");

    @import url("http://localhost:5500/src/styles/design-system/feedback.css");
    @import url("http://localhost:5500/src/styles/design-system/button.css");
}
```



### Releasing a user style update
The user style css files for each theme, and the legacy `topdesk-operator-recoloring.user.css`, is generated by a GitHub action whenever the version is increased in the `package.json`.

The version number of the package.json will be injected in the user style files, allowing Stylus to update the style either by user request or in the automated update cycle.

These files are also generated in the `public` folder locally on each `npm run build`. Please, **do not push the generated user styles**.


### Homepage
The homepage is a static page hosted by github pages, all the source files for the homepage are located in the `site` folder.

The actual website is generated by a GitHub action, but you can also build it locally with `npm run build`. You can then find the files in the `docs` folder. Note: this will also generate the user style files in the `public` folder, please, **do not push the generated user styles**.

Note that the homepage also comes with `worker.js`, which calculates  a filter value for a given rgb value. This calculation is moved off the main thread as it can take a while for the calculation to arrive at a suitable answer.

### Forcing an update of the user style

When a new version becomes available Stylus will automatically update it after a while.

If you do not want to wait for the automated check to run, you can force an update:

- Click on the Stylus extension icon in the browser bar, and click the **Manage** button in the popup.
	- This will open a new tab with the overview of all the installed styles.
- Click the **Check all styles for updates** button under **Actions**.
	- When it has found updates, an **Apply all updates** button will appear underneath, and the overview will change to show only the styles for which it has found
	- If the update is __very__ recent, Stylus may not yet be able to find it.
	- If Stylus can't find it after 5 minutes, it is likely that a syntax error is present in the user.css.
updates.
- Click the **Apply all updates** button that appeared underneath the **Check all styles** button,
	- Alternatively, use the **Install update** down arrow icon in a style row to update only that style.

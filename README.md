# TOPdesk operator recoloring

Override the colors of TOPdesk operator section, for accessibility purposes. 

[![Install directly with Stylus](https://img.shields.io/badge/Install%20directly%20with-Stylus-00adad.svg)](https://raw.githubusercontent.com/TOPdesk/operator-recoloring/master/public/topdesk-operator-recoloring.user.css)

## Purpose
This project provides styles to be injected into TOPdesk by [the stylus browser extension](https://add0n.com/stylus.html). With this you can change the colors of the TOPdesk operator section to aid with dyslexia, color blindness, contrast sensitivity, etc.

There is no intent to achieve completeness, let alone prettyness, the goal is to help users with visual impairments that may be alleviated by color adjustments.

For full explanation, plus instructions on how to install and use, see [the homepage of this project](https://topdesk.github.io/operator-recoloring/).

## Developing

### Running locally
1. Use any static fileserver, e.g. the [Live Server extension](https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer) for VS Code, to serve the css files in the `styles` folder.
1. Click the stylus extension button, and choose **Manage**.
1. Under "Actions" click **Write new style**. Make sure the **as Usercss** checkbox is disabled.
1. Give the new style a name, e.g. Local test recoloring.
1. Click the **Import** button, a popup will appear with the title "Paste the Mozilla-format code".
1. Copy the code below into the popup, adjust import url's if necessary.
1. Click **Overwrite style**, the popup will close and a section will be created for each "@-moz-document" rule.
1. Click **Save**.
1. Enable the new style when in your TOPdesk environment (and make sure other styles are off).
1. Make sure to enable the **Support custom colors** settings for your test user.

```css
@-moz-document 
    regexp("http(s)?://.*/tas/secure/mango/.*"),
    regexp("http(s)?://.*/services/workflows-v2.*"),
    regexp("http(s)?://.*/tas/secure/grid.*"),
    regexp("http(s)?://.*/tas/secure/.*?action=.*"),
    regexp("http(s)?://.*/tas/secure/suggestions/.*"),
    regexp("http(s)?://.*/tas/secure/homescreen-html-widgets/.*"),
    regexp("http(s)?://.*/tas/secure/shareandsubscribe/.*"),
    regexp("http(s)?://.*/tas/secure/assetmgmt/.*") {
  @import url("http://localhost:5500/src/test-styles/variables.css");
  
  @import url("http://localhost:5500/src/styles/button.css");
  @import url("http://localhost:5500/src/styles/general.css");
  @import url("http://localhost:5500/src/styles/tab.css");
  @import url("http://localhost:5500/src/styles/menu.css");
  @import url("http://localhost:5500/src/styles/feed.css");
  @import url("http://localhost:5500/src/styles/process-pages.css");
  @import url("http://localhost:5500/src/styles/grid.css");
  @import url("http://localhost:5500/src/styles/suggestions.css");
  @import url("http://localhost:5500/src/styles/share.css");
  @import url("http://localhost:5500/src/styles/form.css");
  @import url("http://localhost:5500/src/styles/knowledge-item.css");
  @import url("http://localhost:5500/src/styles/email.css");
  @import url("http://localhost:5500/src/styles/selection.css");
  @import url("http://localhost:5500/src/styles/card.css");
  @import url("http://localhost:5500/src/styles/planboard.css");
  @import url("http://localhost:5500/src/styles/reservations.css");
}

@-moz-document regexp("http(s)?://.*/tas/secure/agileboard/.*") {
  @import url("http://localhost:5500/src/test-styles/variables.css");
  
  @import url("http://localhost:5500/src/styles/agileboard.css");
}
```



### Releasing a user style update
The user style is created by the `create-userstyle.js` rollup plugin. Here the user style metadata and css files are concatenated.

There is no build infrastructure set up at github, so an update for the user style is simply built locally and pushed.

To create an update, change the version number in the `package.json`, and execute `npm run build`. This will create a new version of `topdesk-operator-recoloring.user.css` in the `public` folder.

Stylus should then detect the new version in its periodic check of all installed user styles and update the style for the user automatically.
Alternatively, the user can direct Stylus to check for updates manually.


### Homepage
The homepage is a static page hosted by github pages, all the files for the homepage are located in the root of the project.

Note that the homepage, besides the standard `index.html`, `index.css` and `index.js` also comes with `worker.js`, which calculates  a filter value for a given rgb value.

This calculation is moved off the main thread as it can take a while for the calculation to arrive at a suitable answer.

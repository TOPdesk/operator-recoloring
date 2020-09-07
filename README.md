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
1. Create a new style in Stylus, and set the **Applies to** field to `http(s)?://.*/tas/secure/.*`, to prevent browser slowdown when the fileserver is down and you left the style on. 
1. Copy the following code into the style, and adjust the import url's if necessary.
1. Enable the new style when in your TOPdesk environment (and make sure other styles are off).
1. Make sure to enable the **Support custom colors** settings for your test user.


```css
@import url("http://localhost:5500/src/styles/general.css");
@import url("http://localhost:5500/src/styles/tab.css");
@import url("http://localhost:5500/src/styles/button.css");
@import url("http://localhost:5500/src/styles/menu.css");
@import url("http://localhost:5500/src/styles/form.css");
@import url("http://localhost:5500/src/styles/feed.css");
@import url("http://localhost:5500/src/styles/process-pages.css");
@import url("http://localhost:5500/src/styles/grid.css");
@import url("http://localhost:5500/src/styles/suggestions.css");
@import url("http://localhost:5500/src/styles/share.css");
@import url("http://localhost:5500/src/styles/knowledge-item.css");
@import url("http://localhost:5500/src/styles/email.css");

:root {
  --background: #0c0c0c;
  --background-filter: brightness(0) saturate(100%) invert(0%) sepia(11%) saturate(1945%) hue-rotate(61deg) brightness(105%) contrast(91%);
  --on-background: #fcfcfc;
  --on-background-filter: brightness(0) saturate(100%) invert(100%) sepia(0%) saturate(7500%) hue-rotate(178deg) brightness(129%) contrast(98%);
  --selection: rgba(252, 252, 252, 0.99);
  --on-selection: #0c0c0c;
  --surface: #404040;
  --surface-filter: brightness(0) saturate(100%) invert(19%) sepia(0%) saturate(1%) hue-rotate(180deg) brightness(102%) contrast(82%);
  --on-surface: #fcfcfc;
  --on-surface-filter: brightness(0) saturate(100%) invert(100%) sepia(0%) saturate(7500%) hue-rotate(178deg) brightness(129%) contrast(98%);
  --disabled: #404040;
  --disabled-filter: brightness(0) saturate(100%) invert(19%) sepia(0%) saturate(1%) hue-rotate(180deg) brightness(102%) contrast(82%);
  --on-disabled: #8c8c8c ;
  --on-disabled-filter: brightness(0) saturate(100%) invert(62%) sepia(0%) saturate(407%) hue-rotate(172deg) brightness(89%) contrast(89%);
  --primary: #eda911;
  --primary-filter: brightness(0) saturate(100%) invert(71%) sepia(67%) saturate(1479%) hue-rotate(354deg) brightness(97%) contrast(92%);
  --primary-muted: #d5970e;
  --primary-muted-filter: brightness(0) saturate(100%) invert(66%) sepia(52%) saturate(3051%) hue-rotate(7deg) brightness(95%) contrast(89%);
  --on-primary: #0c0c0c;
  --on-primary-filter:  brightness(0) saturate(100%) invert(0%) sepia(11%) saturate(1945%) hue-rotate(61deg) brightness(105%) contrast(91%);
  --error: #FF0070;
  --error-filter: brightness(0) saturate(100%) invert(16%) sepia(54%) saturate(7483%) hue-rotate(326deg) brightness(100%) contrast(109%);
  --on-error: #0c0c0c;
  --on-error-filter: brightness(0) saturate(100%) invert(0%) sepia(11%) saturate(1945%) hue-rotate(61deg) brightness(105%) contrast(91%);
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

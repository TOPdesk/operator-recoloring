# TOPdesk operator recoloring

Override the colors of TOPdesk operator section, for accessibility purposes. 

[![Install directly with Stylus](https://img.shields.io/badge/Install%20directly%20with-Stylus-00adad.svg)](https://raw.githubusercontent.com/TOPdesk/operator-recoloring/master/public/topdesk-operator-recoloring.user.css)

## Purpose
This project provides styles to be injected into TOPdesk by [the stylus browser extension](https://add0n.com/stylus.html). With this you can change the colors of the TOPdesk operator section to aid with dyslexia, color blindness, contrast sensitivity, etc.

There is no intent to achieve completeness, let alone prettyness, the goal is to help users with visual impairments that may be alleviated by color adjustments.

For full explanation, plus instructions on how to install and use, see [the homepage of this project](https://topdesk.github.io/operator-recoloring/).

## Developing

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

# TOPdesk operator recoloring

Override the colors of TOPdesk operator section, for accessibility purposes. 

[![Install directly with Stylus](https://img.shields.io/badge/Install%20directly%20with-Stylus-00adad.svg)](https://raw.githubusercontent.com/TOPdesk/operator-recoloring/master/public/topdesk-operator-recoloring.user.css)

# Purpose
This project provides styles to be injected into TOPdesk by [the stylus browser extension](https://add0n.com/stylus.html). With this you can change the colors of the TOPdesk operator section to aid with dyslexia, color blindness, contrast sensitivity, etc.

There is no intent to achieve completeness, let alone prettyness, the goal is to help users with visual impairments that may be alleviated by color adjustments.

For example, some buttons use circular icons with a white background. When recoloring, these icons would just turn into a solid circle. As such these icons are left as is.

Neither is this project maintained together with TOPdesk. Depending on the version or functionalities of TOPdesk used, your mileage may vary. Feel free to create an issue, or even a merge request, and we will see if it can be addressed.


# How to install
* Install [Stylus for Chrome](https://chrome.google.com/webstore/detail/stylus/clngdbkpkpeebahjckkjfobafhncgmne), or [Stylus for Firefox](https://addons.mozilla.org/en-US/firefox/addon/styl-us/).
* Click the "Install directly with Stylus" badge above.
* The browser plugin will open in a new tab, click the install button there.
* The style now becomes available whenever you visit a TOPdesk operator section.

# How to use
* Every time you log in to TOPdesk, navigate to [your topdesk domain]/tas/secure/mango/arsenictestmodeswitchon first to make sure these styles work at their full potential.
* You can configure the colors by clicking the plugin icon, and clicking the gear icon on the "Recoloring TOPdesk operator section" entry.
* The filter values are used to recolor icons, [the homepage of this project](https://topdesk.github.io/operator-recoloring/) has a form to calculate them for you.
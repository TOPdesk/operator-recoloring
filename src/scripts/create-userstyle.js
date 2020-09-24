import { readFileSync } from 'fs';

const userstyleMetadata = (version) =>
`/* ==UserStyle==
@name           Recoloring TOPdesk operator section
@namespace      github.com/topdesk/topdesk-operator-recoloring
@version        ${version}
@description    Override the colors of the TOPdesk operator section, for accessibility purposes. 
@homepageURL    https://github.com/TOPdesk/operator-recoloring
@supportURL     https://github.com/TOPdesk/operator-recoloring/issues
@license        MIT
@preprocessor   default
@var color background "Background" #0c0c0c
@var text background-filter "Background filter" brightness(0) saturate(100%) invert(0%) sepia(11%) saturate(1945%) hue-rotate(61deg) brightness(105%) contrast(91%)
@var color on-background "On background" #fcfcfc
@var text on-background-filter "On background filter" brightness(0) saturate(100%) invert(100%) sepia(0%) saturate(7500%) hue-rotate(178deg) brightness(129%) contrast(98%)
@var color selection "Selection" rgba(252, 252, 252, 0.99)
@var color on-selection "On selection" #0c0c0c
@var color surface "Surface" #404040
@var text surface-filter "Surface filter" brightness(0) saturate(100%) invert(19%) sepia(0%) saturate(1%) hue-rotate(180deg) brightness(102%) contrast(82%)
@var color on-surface "On surface" #fcfcfc
@var text on-surface-filter "On surface filter" brightness(0) saturate(100%) invert(100%) sepia(0%) saturate(7500%) hue-rotate(178deg) brightness(129%) contrast(98%)
@var color disabled "Disabled" #404040
@var text disabled-filter "Disabled filter" brightness(0) saturate(100%) invert(19%) sepia(0%) saturate(1%) hue-rotate(180deg) brightness(102%) contrast(82%)
@var color on-disabled "On disabled" #8c8c8c 
@var text on-disabled-filter "On disabled filter" brightness(0) saturate(100%) invert(62%) sepia(0%) saturate(407%) hue-rotate(172deg) brightness(89%) contrast(89%)
@var color primary "Primary" #eda911
@var text primary-filter "Primary filter" brightness(0) saturate(100%) invert(71%) sepia(67%) saturate(1479%) hue-rotate(354deg) brightness(97%) contrast(92%)
@var color primary-muted "Primary muted" #d5970e
@var text primary-muted-filter "Primary muted filter" brightness(0) saturate(100%) invert(66%) sepia(52%) saturate(3051%) hue-rotate(7deg) brightness(95%) contrast(89%)
@var color on-primary "On primary" #0c0c0c
@var text on-primary-filter "On primary filter" brightness(0) saturate(100%) invert(0%) sepia(11%) saturate(1945%) hue-rotate(61deg) brightness(105%) contrast(91%)
@var color error "Error" #FF0070
@var text error-filter "Error filter" brightness(0) saturate(100%) invert(16%) sepia(54%) saturate(7483%) hue-rotate(326deg) brightness(100%) contrast(109%)
@var color on-error "On error" #0c0c0c
@var text on-error-filter "On error filter" brightness(0) saturate(100%) invert(0%) sepia(11%) saturate(1945%) hue-rotate(61deg) brightness(105%) contrast(91%)
==/UserStyle== */
`

export default function createUserstyle(version) {
  return {
    name: "create-userstyle-plugin",
    async generateBundle(_options, bundle) {
      const userCss = 
`${userstyleMetadata(version)}
      
@-moz-document regexp("http(s)?://.*/tas/secure/.*") {
  ${readFileSync(__dirname + '/src/styles/button.css', { encoding: 'utf8' })}
  ${readFileSync(__dirname + '/src/styles/general.css', {encoding: 'utf8'})}
  ${readFileSync(__dirname + '/src/styles/tab.css', {encoding: 'utf8'})}
  ${readFileSync(__dirname + '/src/styles/menu.css', {encoding: 'utf8'})}
  ${readFileSync(__dirname + '/src/styles/feed.css', {encoding: 'utf8'})}
  ${readFileSync(__dirname + '/src/styles/process-pages.css', {encoding: 'utf8'})}
  ${readFileSync(__dirname + '/src/styles/grid.css', {encoding: 'utf8'})}
  ${readFileSync(__dirname + '/src/styles/suggestions.css', {encoding: 'utf8'})}
  ${readFileSync(__dirname + '/src/styles/share.css', {encoding: 'utf8'})}
  ${readFileSync(__dirname + '/src/styles/form.css', {encoding: 'utf8'})}
  ${readFileSync(__dirname + '/src/styles/knowledge-item.css', {encoding: 'utf8'})}
  ${readFileSync(__dirname + '/src/styles/email.css', {encoding: 'utf8'})}
  ${readFileSync(__dirname + '/src/styles/selection.css', {encoding: 'utf8'})}
}
`
      this.emitFile({
        type: 'asset',
        source: userCss,
        fileName: 'topdesk-operator-recoloring.user.css'
      })
    }
  }
}
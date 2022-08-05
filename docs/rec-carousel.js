import{R as e,b as t,s as r,x as i,$ as n,o as s}from"./lit-element-5bcfae5d.js";import{e as a,i as o,t as l}from"./directive-de55b00a.js";import{i as d}from"./style-map-0df3353c.js";
/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const{H:c}=e,u=()=>document.createComment(""),h=(e,t,r)=>{var i;const n=e._$AA.parentNode,s=void 0===t?e._$AB:t._$AA;if(void 0===r){const t=n.insertBefore(u(),s),i=n.insertBefore(u(),s);r=new c(t,i,e,e.options)}else{const t=r._$AB.nextSibling,a=r._$AM,o=a!==e;if(o){let t;null===(i=r._$AQ)||void 0===i||i.call(r,e),r._$AM=e,void 0!==r._$AP&&(t=e._$AU)!==a._$AU&&r._$AP(t)}if(t!==s||o){let e=r._$AA;for(;e!==t;){const t=e.nextSibling;n.insertBefore(e,s),e=t}}}return r},b=(e,t,r=e)=>(e._$AI(t,r),e),f={},v=e=>{var t;null===(t=e._$AP)||void 0===t||t.call(e,!1,!0);let r=e._$AA;const i=e._$AB.nextSibling;for(;r!==i;){const e=r.nextSibling;r.remove(),r=e}},_=(e,t,r)=>{const i=new Map;for(let n=t;n<=r;n++)i.set(e[n],n);return i},g=a(class extends o{constructor(e){if(super(e),e.type!==l.CHILD)throw Error("repeat() can only be used in text expressions")}dt(e,t,r){let i;void 0===r?r=t:void 0!==t&&(i=t);const n=[],s=[];let a=0;for(const t of e)n[a]=i?i(t,a):a,s[a]=r(t,a),a++;return{values:s,keys:n}}render(e,t,r){return this.dt(e,t,r).values}update(e,[r,i,n]){var s;const a=(e=>e._$AH)(e),{values:o,keys:l}=this.dt(r,i,n);if(!Array.isArray(a))return this.ut=l,o;const d=null!==(s=this.ut)&&void 0!==s?s:this.ut=[],c=[];let u,g,p=0,m=a.length-1,y=0,x=o.length-1;for(;p<=m&&y<=x;)if(null===a[p])p++;else if(null===a[m])m--;else if(d[p]===l[y])c[y]=b(a[p],o[y]),p++,y++;else if(d[m]===l[x])c[x]=b(a[m],o[x]),m--,x--;else if(d[p]===l[x])c[x]=b(a[p],o[x]),h(e,c[x+1],a[p]),p++,x--;else if(d[m]===l[y])c[y]=b(a[m],o[y]),h(e,a[p],a[m]),m--,y++;else if(void 0===u&&(u=_(l,y,x),g=_(d,p,m)),u.has(d[p]))if(u.has(d[m])){const t=g.get(l[y]),r=void 0!==t?a[t]:null;if(null===r){const t=h(e,a[p]);b(t,o[y]),c[y]=t}else c[y]=b(r,o[y]),h(e,a[p],r),a[t]=null;y++}else v(a[m]),m--;else v(a[p]),p++;for(;y<=x;){const t=h(e,c[x+1]);b(t,o[y]),c[y++]=t}for(;p<=m;){const e=a[p++];null!==e&&v(e)}return this.ut=l,((e,t=f)=>{e._$AH=t})(e,c),t}});
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var p=function(){function e(e,t){for(var r=0;r<t.length;r++){var i=t[r];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}return function(t,r,i){return r&&e(t.prototype,r),i&&e(t,i),t}}();function m(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}!function(){if("undefined"!=typeof window){var e=Array.prototype.slice,t=Element.prototype.matches||Element.prototype.msMatchesSelector,r=["a[href]","area[href]","input:not([disabled])","select:not([disabled])","textarea:not([disabled])","button:not([disabled])","details","summary","iframe","object","embed","[contenteditable]"].join(","),i=function(){function i(e,t){m(this,i),this._inertManager=t,this._rootElement=e,this._managedNodes=new Set,this._rootElement.hasAttribute("aria-hidden")?this._savedAriaHidden=this._rootElement.getAttribute("aria-hidden"):this._savedAriaHidden=null,this._rootElement.setAttribute("aria-hidden","true"),this._makeSubtreeUnfocusable(this._rootElement),this._observer=new MutationObserver(this._onMutation.bind(this)),this._observer.observe(this._rootElement,{attributes:!0,childList:!0,subtree:!0})}return p(i,[{key:"destructor",value:function(){this._observer.disconnect(),this._rootElement&&(null!==this._savedAriaHidden?this._rootElement.setAttribute("aria-hidden",this._savedAriaHidden):this._rootElement.removeAttribute("aria-hidden")),this._managedNodes.forEach((function(e){this._unmanageNode(e.node)}),this),this._observer=null,this._rootElement=null,this._managedNodes=null,this._inertManager=null}},{key:"_makeSubtreeUnfocusable",value:function(e){var t=this;o(e,(function(e){return t._visitNode(e)}));var r=document.activeElement;if(!document.body.contains(e)){for(var i=e,n=void 0;i;){if(i.nodeType===Node.DOCUMENT_FRAGMENT_NODE){n=i;break}i=i.parentNode}n&&(r=n.activeElement)}e.contains(r)&&(r.blur(),r===document.activeElement&&document.body.focus())}},{key:"_visitNode",value:function(e){if(e.nodeType===Node.ELEMENT_NODE){var i=e;i!==this._rootElement&&i.hasAttribute("inert")&&this._adoptInertRoot(i),(t.call(i,r)||i.hasAttribute("tabindex"))&&this._manageNode(i)}}},{key:"_manageNode",value:function(e){var t=this._inertManager.register(e,this);this._managedNodes.add(t)}},{key:"_unmanageNode",value:function(e){var t=this._inertManager.deregister(e,this);t&&this._managedNodes.delete(t)}},{key:"_unmanageSubtree",value:function(e){var t=this;o(e,(function(e){return t._unmanageNode(e)}))}},{key:"_adoptInertRoot",value:function(e){var t=this._inertManager.getInertRoot(e);t||(this._inertManager.setInert(e,!0),t=this._inertManager.getInertRoot(e)),t.managedNodes.forEach((function(e){this._manageNode(e.node)}),this)}},{key:"_onMutation",value:function(t,r){t.forEach((function(t){var r=t.target;if("childList"===t.type)e.call(t.addedNodes).forEach((function(e){this._makeSubtreeUnfocusable(e)}),this),e.call(t.removedNodes).forEach((function(e){this._unmanageSubtree(e)}),this);else if("attributes"===t.type)if("tabindex"===t.attributeName)this._manageNode(r);else if(r!==this._rootElement&&"inert"===t.attributeName&&r.hasAttribute("inert")){this._adoptInertRoot(r);var i=this._inertManager.getInertRoot(r);this._managedNodes.forEach((function(e){r.contains(e.node)&&i._manageNode(e.node)}))}}),this)}},{key:"managedNodes",get:function(){return new Set(this._managedNodes)}},{key:"hasSavedAriaHidden",get:function(){return null!==this._savedAriaHidden}},{key:"savedAriaHidden",set:function(e){this._savedAriaHidden=e},get:function(){return this._savedAriaHidden}}]),i}(),n=function(){function e(t,r){m(this,e),this._node=t,this._overrodeFocusMethod=!1,this._inertRoots=new Set([r]),this._savedTabIndex=null,this._destroyed=!1,this.ensureUntabbable()}return p(e,[{key:"destructor",value:function(){if(this._throwIfDestroyed(),this._node&&this._node.nodeType===Node.ELEMENT_NODE){var e=this._node;null!==this._savedTabIndex?e.setAttribute("tabindex",this._savedTabIndex):e.removeAttribute("tabindex"),this._overrodeFocusMethod&&delete e.focus}this._node=null,this._inertRoots=null,this._destroyed=!0}},{key:"_throwIfDestroyed",value:function(){if(this.destroyed)throw new Error("Trying to access destroyed InertNode")}},{key:"ensureUntabbable",value:function(){if(this.node.nodeType===Node.ELEMENT_NODE){var e=this.node;if(t.call(e,r)){if(-1===e.tabIndex&&this.hasSavedTabIndex)return;e.hasAttribute("tabindex")&&(this._savedTabIndex=e.tabIndex),e.setAttribute("tabindex","-1"),e.nodeType===Node.ELEMENT_NODE&&(e.focus=function(){},this._overrodeFocusMethod=!0)}else e.hasAttribute("tabindex")&&(this._savedTabIndex=e.tabIndex,e.removeAttribute("tabindex"))}}},{key:"addInertRoot",value:function(e){this._throwIfDestroyed(),this._inertRoots.add(e)}},{key:"removeInertRoot",value:function(e){this._throwIfDestroyed(),this._inertRoots.delete(e),0===this._inertRoots.size&&this.destructor()}},{key:"destroyed",get:function(){return this._destroyed}},{key:"hasSavedTabIndex",get:function(){return null!==this._savedTabIndex}},{key:"node",get:function(){return this._throwIfDestroyed(),this._node}},{key:"savedTabIndex",set:function(e){this._throwIfDestroyed(),this._savedTabIndex=e},get:function(){return this._throwIfDestroyed(),this._savedTabIndex}}]),e}(),s=function(){function r(e){if(m(this,r),!e)throw new Error("Missing required argument; InertManager needs to wrap a document.");this._document=e,this._managedNodes=new Map,this._inertRoots=new Map,this._observer=new MutationObserver(this._watchForInert.bind(this)),l(e.head||e.body||e.documentElement),"loading"===e.readyState?e.addEventListener("DOMContentLoaded",this._onDocumentLoaded.bind(this)):this._onDocumentLoaded()}return p(r,[{key:"setInert",value:function(e,t){if(t){if(this._inertRoots.has(e))return;var r=new i(e,this);if(e.setAttribute("inert",""),this._inertRoots.set(e,r),!this._document.body.contains(e))for(var n=e.parentNode;n;)11===n.nodeType&&l(n),n=n.parentNode}else{if(!this._inertRoots.has(e))return;this._inertRoots.get(e).destructor(),this._inertRoots.delete(e),e.removeAttribute("inert")}}},{key:"getInertRoot",value:function(e){return this._inertRoots.get(e)}},{key:"register",value:function(e,t){var r=this._managedNodes.get(e);return void 0!==r?r.addInertRoot(t):r=new n(e,t),this._managedNodes.set(e,r),r}},{key:"deregister",value:function(e,t){var r=this._managedNodes.get(e);return r?(r.removeInertRoot(t),r.destroyed&&this._managedNodes.delete(e),r):null}},{key:"_onDocumentLoaded",value:function(){e.call(this._document.querySelectorAll("[inert]")).forEach((function(e){this.setInert(e,!0)}),this),this._observer.observe(this._document.body||this._document.documentElement,{attributes:!0,subtree:!0,childList:!0})}},{key:"_watchForInert",value:function(r,i){var n=this;r.forEach((function(r){switch(r.type){case"childList":e.call(r.addedNodes).forEach((function(r){if(r.nodeType===Node.ELEMENT_NODE){var i=e.call(r.querySelectorAll("[inert]"));t.call(r,"[inert]")&&i.unshift(r),i.forEach((function(e){this.setInert(e,!0)}),n)}}),n);break;case"attributes":if("inert"!==r.attributeName)return;var i=r.target,s=i.hasAttribute("inert");n.setInert(i,s)}}),this)}}]),r}();if(!Element.prototype.hasOwnProperty("inert")){var a=new s(document);Object.defineProperty(Element.prototype,"inert",{enumerable:!0,get:function(){return this.hasAttribute("inert")},set:function(e){a.setInert(this,e)}})}}function o(e,t,r){if(e.nodeType==Node.ELEMENT_NODE){var i=e;t&&t(i);var n=i.shadowRoot;if(n)return void o(n,t);if("content"==i.localName){for(var s=i,a=s.getDistributedNodes?s.getDistributedNodes():[],l=0;l<a.length;l++)o(a[l],t);return}if("slot"==i.localName){for(var d=i,c=d.assignedNodes?d.assignedNodes({flatten:!0}):[],u=0;u<c.length;u++)o(c[u],t);return}}for(var h=e.firstChild;null!=h;)o(h,t),h=h.nextSibling}function l(e){if(!e.querySelector("style#inert-style, link#inert-style")){var t=document.createElement("style");t.setAttribute("id","inert-style"),t.textContent="\n[inert] {\n  pointer-events: none;\n  cursor: default;\n}\n\n[inert], [inert] * {\n  -webkit-user-select: none;\n  -moz-user-select: none;\n  -ms-user-select: none;\n  user-select: none;\n}\n",e.appendChild(t)}}}();class y extends r{static _lastUId=0;render(){const e={transform:`translateX(-${this._currentIndex}00%)`};return i(this.tabButtonTemplate(),this),n`<div class="title"><slot name="title" @slotchange="${this.#e}">Title missing</slot></div><div class="controls" @keydown="${this.#t}"><button class="nav-control" type="button" @click="${this.handlePrevious}" aria-disabled="${this.wrap||0!==this._currentIndex?"false":"true"}"><svg aria-hidden="true" focusable="false" viewBox="0 0 10 10"><path fill="currentColor" d="m9 4h-4v-2l-4 3 4 3v-2h4z"></path></svg> <span class="visually-hidden">Previous</span></button><div part="tab" role="tablist" aria-label="Slides" @click="${this.#r}"><slot name="tab"></slot></div><button class="nav-control" type="button" @click="${this.handleNext}" aria-disabled="${this.wrap||this._currentIndex!==this._slides.length-1?"false":"true"}"><svg aria-hidden="true" focusable="false" viewBox="0 0 10 10"><path fill="currentColor" d="m1 4h4v-2l4 3-4 3v-2h-4z"></path></svg> <span class="visually-hidden">Next</span></button></div><div class="aperture"><div class="carousel-items" aria-live="polite" style="${d(e)}"><slot @slotchange="${this.#i}"></slot></div></div>`}tabButtonTemplate(){return n`${g(this._slides,(e=>e.id),((e,t)=>n`<button type="button" role="tab" slot="tab" tabindex="${t===this._currentIndex?"0":"-1"}" aria-controls="${e.id}" aria-label="Slide ${t+1}" aria-expanded="${t===this._currentIndex?"true":"false"}" aria-selected="${t===this._currentIndex?"true":"false"}" @click="${()=>this.#n(t,!0)}"><svg aria-hidden="true" focusable="false" viewBox="0 0 32 32"><circle fill="var(--tab-border-large)" stroke-width="0" cx="16" cy="16" r="11"></circle><circle fill="var(--tab-border)" stroke-width="0" cx="16" cy="16" r="9"></circle><circle fill="var(--pip)" stroke="var(--pip-border)" stroke-width="2" cx="16" cy="16" r="6"></circle></svg></button>`))}`}static get properties(){return{wrap:{type:Boolean},_currentIndex:{type:Number,state:!0},_slides:{type:Array,state:!0}}}static get styles(){return[s(':host{--control-size:var(--carousel-control-size,36px);--control-spacing:var(--carousel-control-spacing,4px);--fg-disabled:var(--carousel-fg-disabled,#aaa);--tablist-bg:var(--carousel-tabs-bg,rgba(0,0,0,.65));--tablist-fg:var(--carousel-tabs-fg,#fff);--tablist-contrast:var(--carousel-tabs-contrast,#000);--tablist-accent:var(--carousel-tabs-accent,#005a9c);background:#eee;color:#000}:host{border-radius:5px;display:flex;flex-direction:column;margin:0;max-width:900px;padding:10px;position:relative}.title{text-align:center}:host([aria-labelledby]:not(.self-titled)) .title{display:none}.carousel-items{flex-grow:1}.controls{align-items:baseline;display:flex;justify-content:space-between;padding-block:var(--control-spacing);width:100%}.nav-control{background:none;border:1px solid transparent;border-radius:2px;color:inherit;flex-shrink:0;height:var(--control-size);padding:0}.nav-control .visually-hidden{clip:rect(1px,1px,1px,1px);clip-path:inset(50%);height:1px;margin:-1px;overflow:hidden;padding:0;position:absolute;width:1px}.nav-control:hover>svg{transform:scale(1.1)}.nav-control:active>svg{transform:scale(.8)}.nav-control:focus-visible{outline:2px solid currentColor}.nav-control[aria-disabled=true]{color:var(--fg-disabled)}.nav-control>svg{height:100%}[role=tablist]{--tab-bg:var(--tablist-contrast);--pip:var(--tab-bg);--pip-border:var(--tablist-fg);--tab-border:var(--tab-bg);--tab-border-large:transparent;align-items:center;background-color:var(--tablist-bg);border:2px solid transparent;border-radius:13px;display:inline-flex;flex-wrap:wrap;justify-content:space-between}[role=tablist] ::slotted(button[role=tab]){all:unset!important;aspect-ratio:1!important;height:calc(var(--control-size) - 4px)!important}[role=tablist] ::slotted(button[role=tab]:hover){--pip:var(--tablist-accent);--pip-border:var(--tablist-accent);--tab-border:var(--tablist-fg)}[role=tablist] ::slotted(button[role=tab][aria-selected=true]){--pip:var(--tablist-fg)}[role=tablist]:focus-within{--tab-bg:var(--tablist-accent);background-color:var(--tablist-accent);border-color:var(--tablist-fg)}[role=tablist]:focus-within ::slotted(button[aria-selected=true]){--tab-border-large:var(--tablist-fg)}[role=tablist]:focus-within ::slotted(button:hover[aria-selected=true]){--tab-border-large:transparent}.aperture{overflow-x:hidden}.carousel-items{display:grid;grid-template-areas:"viewer";grid-template-columns:1fr;grid-template-rows:1fr}.carousel-items ::slotted(*){grid-area:viewer}@media (prefers-reduced-motion:no-preference){.carousel-items{transition:transform .2s ease-out}}')]}constructor(){super(),this.wrap=!1,this._currentIndex=0,this._slides=[]}connectedCallback(){super.connectedCallback(),this.setAttribute("role","region"),this.setAttribute("role-description","carousel")}#e(e){const t=e.target.assignedElements()[0];if(!t)return this.removeAttribute("aria-labelledby"),void this.classList.remove("self-titled");t.id||(t.id="rec-carousel-title-"+ ++y._lastUId),this.setAttribute("aria-labelledby",t.id),this.classList.add("self-titled")}#i(e){this._slides=e.target.assignedElements().filter((e=>e.tagName.startsWith("REC-CAROUSEL-SLIDE")));const t=this._slides.length;this._slides.forEach(((e,r)=>{const i=r+1;e.setAttribute("aria-label",`${i} of ${t}`),e.style.transform=`translateX(${r}00%)`,e.setAttribute("aria-hidden","true"),e.id||(e.id="rec-carousel-slide-"+ ++y._lastUId)})),this.#s(0,!1)}#r(e){const t=e.currentTarget,r=e.target;if(r!==t){const e=t.childNodes;for(let t=0;t<e.length;t++)if(e[t]===r){this.#n(t,!0);break}}}#t(e){const t=!e.target.classList.contains("nav-control");let r=!1;switch(e.key){case"ArrowRight":this.#a(t),r=!0;break;case"ArrowLeft":this.#o(t),r=!0;break;case"Home":this.#n(0,t),r=!0;break;case"End":this.#n(this._slides.length-1,t),r=!0}r&&(e.stopPropagation(),e.preventDefault())}handlePrevious(){this.#o(!1)}handleNext(){this.#a(!1)}#o(e){let t=this._currentIndex-1;if(t<0){if(!this.wrap)return;t=this._slides.length-1}this.#n(t,e)}#a(e){let t=this._currentIndex+1;if(t>=this._slides.length){if(!this.wrap)return;t=0}this.#n(t,e)}#n(e,t){e!==this._currentIndex&&this.#s(e,t)}#s(e,t){for(let r=0;r<this._slides.length;r++){const i=this._slides[r];if(r===e){if(i.setAttribute("aria-hidden","false"),t){const e=this.renderRoot.querySelector(`button[role="tab"][aria-controls="${i.id}"]`);e&&e.focus()}}else i.setAttribute("aria-hidden","true")}requestIdleCallback((()=>this._slides.forEach((e=>{"false"===e.getAttribute("aria-hidden")?e.removeAttribute("inert"):e.setAttribute("inert","")})))),this._currentIndex=e}}customElements.define("rec-carousel",y);export{y as RecCarousel};

import{R as t,b as e,s,x as r,$ as a,o as i}from"./lit-element-5bcfae5d.js";import{e as l,i as o,t as n}from"./directive-de55b00a.js";import{i as c}from"./style-map-0df3353c.js";import"./inert.esm.js";
/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const{H:d}=t,b=()=>document.createComment(""),u=(t,e,s)=>{var r;const a=t._$AA.parentNode,i=void 0===e?t._$AB:e._$AA;if(void 0===s){const e=a.insertBefore(b(),i),r=a.insertBefore(b(),i);s=new d(e,r,t,t.options)}else{const e=s._$AB.nextSibling,l=s._$AM,o=l!==t;if(o){let e;null===(r=s._$AQ)||void 0===r||r.call(s,t),s._$AM=t,void 0!==s._$AP&&(e=t._$AU)!==l._$AU&&s._$AP(e)}if(e!==i||o){let t=s._$AA;for(;t!==e;){const e=t.nextSibling;a.insertBefore(t,i),t=e}}}return s},h=(t,e,s=t)=>(t._$AI(e,s),t),p={},f=t=>{var e;null===(e=t._$AP)||void 0===e||e.call(t,!1,!0);let s=t._$AA;const r=t._$AB.nextSibling;for(;s!==r;){const t=s.nextSibling;s.remove(),s=t}},v=(t,e,s)=>{const r=new Map;for(let a=e;a<=s;a++)r.set(t[a],a);return r},g=l(class extends o{constructor(t){if(super(t),t.type!==n.CHILD)throw Error("repeat() can only be used in text expressions")}dt(t,e,s){let r;void 0===s?s=e:void 0!==e&&(r=e);const a=[],i=[];let l=0;for(const e of t)a[l]=r?r(e,l):l,i[l]=s(e,l),l++;return{values:i,keys:a}}render(t,e,s){return this.dt(t,e,s).values}update(t,[s,r,a]){var i;const l=(t=>t._$AH)(t),{values:o,keys:n}=this.dt(s,r,a);if(!Array.isArray(l))return this.ut=n,o;const c=null!==(i=this.ut)&&void 0!==i?i:this.ut=[],d=[];let b,g,x=0,m=l.length-1,_=0,A=o.length-1;for(;x<=m&&_<=A;)if(null===l[x])x++;else if(null===l[m])m--;else if(c[x]===n[_])d[_]=h(l[x],o[_]),x++,_++;else if(c[m]===n[A])d[A]=h(l[m],o[A]),m--,A--;else if(c[x]===n[A])d[A]=h(l[x],o[A]),u(t,d[A+1],l[x]),x++,A--;else if(c[m]===n[_])d[_]=h(l[m],o[_]),u(t,l[x],l[m]),m--,_++;else if(void 0===b&&(b=v(n,_,A),g=v(c,x,m)),b.has(c[x]))if(b.has(c[m])){const e=g.get(n[_]),s=void 0!==e?l[e]:null;if(null===s){const e=u(t,l[x]);h(e,o[_]),d[_]=e}else d[_]=h(s,o[_]),u(t,l[x],s),l[e]=null;_++}else f(l[m]),m--;else f(l[x]),x++;for(;_<=A;){const e=u(t,d[A+1]);h(e,o[_]),d[_++]=e}for(;x<=m;){const t=l[x++];null!==t&&f(t)}return this.ut=n,((t,e=p)=>{t._$AH=e})(t,d),e}});
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */class x extends s{static _lastUId=0;render(){const t={transform:`translateX(-${this._currentIndex}00%)`};return r(this.tabButtonTemplate(),this),a`<div class="title"><slot name="title" @slotchange="${this.#t}">Title missing</slot></div><div class="controls" @keydown="${this.#e}"><button class="nav-control" type="button" @click="${this.handlePrevious}" aria-disabled="${this.wrap||0!==this._currentIndex?"false":"true"}"><svg aria-hidden="true" focusable="false" viewBox="0 0 10 10"><path fill="currentColor" d="m9 4h-4v-2l-4 3 4 3v-2h4z"></path></svg> <span class="visually-hidden">Previous</span></button><div part="tab" role="tablist" aria-label="Slides" @click="${this.#s}"><slot name="tab"></slot></div><button class="nav-control" type="button" @click="${this.handleNext}" aria-disabled="${this.wrap||this._currentIndex!==this._slides.length-1?"false":"true"}"><svg aria-hidden="true" focusable="false" viewBox="0 0 10 10"><path fill="currentColor" d="m1 4h4v-2l4 3-4 3v-2h-4z"></path></svg> <span class="visually-hidden">Next</span></button></div><div class="aperture"><div class="carousel-items" aria-live="polite" style="${c(t)}"><slot @slotchange="${this.#r}"></slot></div></div>`}tabButtonTemplate(){return a`${g(this._slides,(t=>t.id),((t,e)=>a`<button type="button" role="tab" slot="tab" tabindex="${e===this._currentIndex?"0":"-1"}" aria-controls="${t.id}" aria-label="Slide ${e+1}" aria-expanded="${e===this._currentIndex?"true":"false"}" aria-selected="${e===this._currentIndex?"true":"false"}" @click="${()=>this.#a(e,!0)}"><svg aria-hidden="true" focusable="false" viewBox="0 0 32 32"><circle fill="var(--tab-border-large)" stroke-width="0" cx="16" cy="16" r="11"></circle><circle fill="var(--tab-border)" stroke-width="0" cx="16" cy="16" r="9"></circle><circle fill="var(--pip)" stroke="var(--pip-border)" stroke-width="2" cx="16" cy="16" r="6"></circle></svg></button>`))}`}static get properties(){return{wrap:{type:Boolean},_currentIndex:{type:Number,state:!0},_slides:{type:Array,state:!0}}}static get styles(){return[i(':host{--control-size:var(--carousel-control-size,36px);--control-spacing:var(--carousel-control-spacing,4px);--fg-disabled:var(--carousel-fg-disabled,#aaa);--tablist-bg:var(--carousel-tabs-bg,rgba(0,0,0,.65));--tablist-fg:var(--carousel-tabs-fg,#fff);--tablist-contrast:var(--carousel-tabs-contrast,#000);--tablist-accent:var(--carousel-tabs-accent,#005a9c);background:#eee;color:#000}:host{border-radius:5px;display:flex;flex-direction:column;margin:0;max-width:900px;padding:10px;position:relative}.title{text-align:center}:host([aria-labelledby]:not(.self-titled)) .title{display:none}.carousel-items{flex-grow:1}.controls{align-items:baseline;display:flex;justify-content:space-between;padding-block:var(--control-spacing);width:100%}.nav-control{background:none;border:1px solid transparent;border-radius:2px;color:inherit;flex-shrink:0;height:var(--control-size);padding:0}.nav-control .visually-hidden{clip:rect(1px,1px,1px,1px);clip-path:inset(50%);height:1px;margin:-1px;overflow:hidden;padding:0;position:absolute;width:1px}.nav-control:hover>svg{transform:scale(1.1)}.nav-control:active>svg{transform:scale(.8)}.nav-control:focus-visible{outline:2px solid currentColor}.nav-control[aria-disabled=true]{color:var(--fg-disabled)}.nav-control>svg{height:100%}[role=tablist]{--tab-bg:var(--tablist-contrast);--pip:var(--tab-bg);--pip-border:var(--tablist-fg);--tab-border:var(--tab-bg);--tab-border-large:transparent;align-items:center;background-color:var(--tablist-bg);border:2px solid transparent;border-radius:13px;display:inline-flex;flex-wrap:wrap;justify-content:space-between}[role=tablist] ::slotted(button[role=tab]){all:unset!important;aspect-ratio:1!important;height:calc(var(--control-size) - 4px)!important}[role=tablist] ::slotted(button[role=tab]:hover){--pip:var(--tablist-accent);--pip-border:var(--tablist-accent);--tab-border:var(--tablist-fg)}[role=tablist] ::slotted(button[role=tab][aria-selected=true]){--pip:var(--tablist-fg)}[role=tablist]:focus-within{--tab-bg:var(--tablist-accent);background-color:var(--tablist-accent);border-color:var(--tablist-fg)}[role=tablist]:focus-within ::slotted(button[aria-selected=true]){--tab-border-large:var(--tablist-fg)}[role=tablist]:focus-within ::slotted(button:hover[aria-selected=true]){--tab-border-large:transparent}.aperture{overflow-x:hidden}.carousel-items{display:grid;grid-template-areas:"viewer";grid-template-columns:1fr;grid-template-rows:1fr}.carousel-items ::slotted(*){grid-area:viewer}@media (prefers-reduced-motion:no-preference){.carousel-items{transition:transform .2s ease-out}}')]}constructor(){super(),this.wrap=!1,this._currentIndex=0,this._slides=[]}connectedCallback(){super.connectedCallback(),this.setAttribute("role","region"),this.setAttribute("role-description","carousel")}#t(t){const e=t.target.assignedElements()[0];if(!e)return this.removeAttribute("aria-labelledby"),void this.classList.remove("self-titled");e.id||(e.id="rec-carousel-title-"+ ++x._lastUId),this.setAttribute("aria-labelledby",e.id),this.classList.add("self-titled")}#r(t){this._slides=t.target.assignedElements().filter((t=>t.tagName.startsWith("REC-CAROUSEL-SLIDE")));const e=this._slides.length;this._slides.forEach(((t,s)=>{const r=s+1;t.setAttribute("aria-label",`${r} of ${e}`),t.style.transform=`translateX(${s}00%)`,t.setAttribute("aria-hidden","true"),t.id||(t.id="rec-carousel-slide-"+ ++x._lastUId)})),this.#i(0,!1)}#s(t){const e=t.currentTarget,s=t.target;if(s!==e){const t=e.childNodes;for(let e=0;e<t.length;e++)if(t[e]===s){this.#a(e,!0);break}}}#e(t){const e=!t.target.classList.contains("nav-control");let s=!1;switch(t.key){case"ArrowRight":this.#l(e),s=!0;break;case"ArrowLeft":this.#o(e),s=!0;break;case"Home":this.#a(0,e),s=!0;break;case"End":this.#a(this._slides.length-1,e),s=!0}s&&(t.stopPropagation(),t.preventDefault())}handlePrevious(){this.#o(!1)}handleNext(){this.#l(!1)}#o(t){let e=this._currentIndex-1;if(e<0){if(!this.wrap)return;e=this._slides.length-1}this.#a(e,t)}#l(t){let e=this._currentIndex+1;if(e>=this._slides.length){if(!this.wrap)return;e=0}this.#a(e,t)}#a(t,e){t!==this._currentIndex&&this.#i(t,e)}#i(t,e){for(let s=0;s<this._slides.length;s++){const r=this._slides[s];if(s===t){if(r.setAttribute("aria-hidden","false"),e){const t=this.renderRoot.querySelector(`button[role="tab"][aria-controls="${r.id}"]`);t&&t.focus()}}else r.setAttribute("aria-hidden","true")}requestIdleCallback((()=>this._slides.forEach((t=>{"false"===t.getAttribute("aria-hidden")?t.removeAttribute("inert"):t.setAttribute("inert","")})))),this._currentIndex=t}}customElements.define("rec-carousel",x);export{x as RecCarousel};

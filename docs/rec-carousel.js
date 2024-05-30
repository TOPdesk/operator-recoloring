import{z as t,e,i as s,t as r,w as a,s as i,j as l,x as o,r as n}from"./directive-BlnHwUHq.js";import{o as c}from"./style-map-DtTs6wy5.js";
/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const{I:d}=t,b=()=>document.createComment(""),u=(t,e,s)=>{const r=t._$AA.parentNode,a=void 0===e?t._$AB:e._$AA;if(void 0===s){const e=r.insertBefore(b(),a),i=r.insertBefore(b(),a);s=new d(e,i,t,t.options)}else{const e=s._$AB.nextSibling,i=s._$AM,l=i!==t;if(l){let e;s._$AQ?.(t),s._$AM=t,void 0!==s._$AP&&(e=t._$AU)!==i._$AU&&s._$AP(e)}if(e!==a||l){let t=s._$AA;for(;t!==e;){const e=t.nextSibling;r.insertBefore(t,a),t=e}}}return s},h=(t,e,s=t)=>(t._$AI(e,s),t),p={},f=t=>{t._$AP?.(!1,!0);let e=t._$AA;const s=t._$AB.nextSibling;for(;e!==s;){const t=e.nextSibling;e.remove(),e=t}},v=(t,e,s)=>{const r=new Map;for(let a=e;a<=s;a++)r.set(t[a],a);return r},g=e(class extends s{constructor(t){if(super(t),t.type!==r.CHILD)throw Error("repeat() can only be used in text expressions")}dt(t,e,s){let r;void 0===s?s=e:void 0!==e&&(r=e);const a=[],i=[];let l=0;for(const e of t)a[l]=r?r(e,l):l,i[l]=s(e,l),l++;return{values:i,keys:a}}render(t,e,s){return this.dt(t,e,s).values}update(t,[e,s,r]){const i=(t=>t._$AH)(t),{values:l,keys:o}=this.dt(e,s,r);if(!Array.isArray(i))return this.ut=o,l;const n=this.ut??=[],c=[];let d,b,g=0,x=i.length-1,m=0,_=l.length-1;for(;g<=x&&m<=_;)if(null===i[g])g++;else if(null===i[x])x--;else if(n[g]===o[m])c[m]=h(i[g],l[m]),g++,m++;else if(n[x]===o[_])c[_]=h(i[x],l[_]),x--,_--;else if(n[g]===o[_])c[_]=h(i[g],l[_]),u(t,c[_+1],i[g]),g++,_--;else if(n[x]===o[m])c[m]=h(i[x],l[m]),u(t,i[g],i[x]),x--,m++;else if(void 0===d&&(d=v(o,m,_),b=v(n,g,x)),d.has(n[g]))if(d.has(n[x])){const e=b.get(o[m]),s=void 0!==e?i[e]:null;if(null===s){const e=u(t,i[g]);h(e,l[m]),c[m]=e}else c[m]=h(s,l[m]),u(t,i[g],s),i[e]=null;m++}else f(i[x]),x--;else f(i[g]),g++;for(;m<=_;){const e=u(t,c[_+1]);h(e,l[m]),c[m++]=e}for(;g<=x;){const t=i[g++];null!==t&&f(t)}return this.ut=o,((t,e=p)=>{t._$AH=e})(t,c),a}});
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */class x extends i{static _lastUId=0;render(){const t={transform:`translateX(-${this._currentIndex}00%)`};return l(this.tabButtonTemplate(),this),o`
			<div class="title">
				<slot name="title" @slotchange="${this.#t}">Title missing</slot>
			</div>
			<div class="controls" @keydown="${this.#e}">
				<button
					class="nav-control"
					type="button"
					@click="${this.handlePrevious}"
					aria-disabled="${this.wrap||0!==this._currentIndex?"false":"true"}"
				>
					<svg aria-hidden="true" focusable="false" viewBox="0 0 10 10">
						<path fill="currentColor" d="m9 4h-4v-2l-4 3 4 3v-2h4z"></path>
					</svg>
					<span class="visually-hidden">Previous</span>
				</button>
				<div part="tab" role="tablist" aria-label="Slides" @click="${this.#s}">
					<slot name="tab"></slot>
				</div>
				<button
					class="nav-control"
					type="button"
					@click="${this.handleNext}"
					aria-disabled="${this.wrap||this._currentIndex!==this._slides.length-1?"false":"true"}"
				>
					<svg aria-hidden="true" focusable="false" viewBox="0 0 10 10">
						<path fill="currentColor" d="m1 4h4v-2l4 3-4 3v-2h-4z"></path>
					</svg>
					<span class="visually-hidden">Next</span>
				</button>
			</div>
			<div class="aperture">
				<div
					class="carousel-items"
					aria-live="polite"
					style="${c(t)}"
				>
					<slot @slotchange="${this.#r}"></slot>
				</div>
			</div>
		`}tabButtonTemplate(){return o`
			${g(this._slides,(t=>t.id),((t,e)=>o`
				<button type="button" role="tab" slot="tab"
					tabindex="${e===this._currentIndex?"0":"-1"}"
					aria-controls="${t.id}"
					aria-label="Slide ${e+1}"
					aria-expanded="${e===this._currentIndex?"true":"false"}"
					aria-selected="${e===this._currentIndex?"true":"false"}"
					@click="${()=>this.#a(e,!0)}"
				>
					<svg aria-hidden="true" focusable="false" viewBox="0 0 32 32">
						<circle
							fill="var(--tab-border-large)"
							stroke-width="0"
							cx="16" cy="16" r="11">
						</circle>
						<circle
							fill="var(--tab-border)"
							stroke-width="0"
							cx="16" cy="16" r="9">
						</circle>
						<circle
							fill="var(--pip)"
							stroke="var(--pip-border)"
							stroke-width="2"
							cx="16" cy="16" r="6">
						</circle>
					</svg>
				</button>
			`))}
		`}static get properties(){return{wrap:{type:Boolean},_currentIndex:{type:Number,state:!0},_slides:{type:Array,state:!0}}}static get styles(){return[n(':host{--control-size:var(--carousel-control-size,36px);--control-spacing:var(--carousel-control-spacing,4px);--fg-disabled:var(--carousel-fg-disabled,#aaa);--tablist-bg:var(--carousel-tabs-bg,rgba(0,0,0,.65));--tablist-fg:var(--carousel-tabs-fg,#fff);--tablist-contrast:var(--carousel-tabs-contrast,#000);--tablist-accent:var(--carousel-tabs-accent,#005a9c);background:#eee;color:#000}:host{border-radius:5px;display:flex;flex-direction:column;margin:0;max-width:900px;padding:10px;position:relative}.title{text-align:center}:host([aria-labelledby]:not(.self-titled)) .title{display:none}.carousel-items{flex-grow:1}.controls{align-items:baseline;display:flex;justify-content:space-between;padding-block:var(--control-spacing);width:100%}.nav-control{background:none;border:1px solid transparent;border-radius:2px;color:inherit;flex-shrink:0;height:var(--control-size);padding:0}.nav-control .visually-hidden{clip:rect(1px,1px,1px,1px);clip-path:inset(50%);height:1px;margin:-1px;overflow:hidden;padding:0;position:absolute;width:1px}.nav-control:hover>svg{transform:scale(1.1)}.nav-control:active>svg{transform:scale(.8)}.nav-control:focus-visible{outline:2px solid currentColor}.nav-control[aria-disabled=true]{color:var(--fg-disabled)}.nav-control>svg{height:100%}[role=tablist]{--tab-bg:var(--tablist-contrast);--pip:var(--tab-bg);--pip-border:var(--tablist-fg);--tab-border:var(--tab-bg);--tab-border-large:transparent;align-items:center;background-color:var(--tablist-bg);border:2px solid transparent;border-radius:13px;display:inline-flex;flex-wrap:wrap;justify-content:space-between}[role=tablist] ::slotted(button[role=tab]){all:unset!important;aspect-ratio:1!important;height:calc(var(--control-size) - 4px)!important}[role=tablist] ::slotted(button[role=tab]:hover){--pip:var(--tablist-accent);--pip-border:var(--tablist-accent);--tab-border:var(--tablist-fg)}[role=tablist] ::slotted(button[role=tab][aria-selected=true]){--pip:var(--tablist-fg)}[role=tablist]:focus-within{--tab-bg:var(--tablist-accent);background-color:var(--tablist-accent);border-color:var(--tablist-fg)}[role=tablist]:focus-within ::slotted(button[aria-selected=true]){--tab-border-large:var(--tablist-fg)}[role=tablist]:focus-within ::slotted(button:hover[aria-selected=true]){--tab-border-large:transparent}.aperture{overflow-x:hidden}.carousel-items{display:grid;grid-template-areas:"viewer";grid-template-columns:1fr;grid-template-rows:1fr}.carousel-items ::slotted(*){grid-area:viewer}@media (prefers-reduced-motion:no-preference){.carousel-items{transition:transform .2s ease-out}}')]}constructor(){super(),this.wrap=!1,this._currentIndex=0,this._slides=[]}connectedCallback(){super.connectedCallback(),this.setAttribute("role","region"),this.setAttribute("role-description","carousel")}#t(t){const e=t.target.assignedElements()[0];if(!e)return this.removeAttribute("aria-labelledby"),void this.classList.remove("self-titled");e.id||(e.id="rec-carousel-title-"+ ++x._lastUId),this.setAttribute("aria-labelledby",e.id),this.classList.add("self-titled")}#r(t){this._slides=t.target.assignedElements().filter((t=>t.tagName.startsWith("REC-CAROUSEL-SLIDE")));const e=this._slides.length;this._slides.forEach(((t,s)=>{const r=s+1;t.setAttribute("aria-label",`${r} of ${e}`),t.style.transform=`translateX(${s}00%)`,t.setAttribute("aria-hidden","true"),t.id||(t.id="rec-carousel-slide-"+ ++x._lastUId)})),this.#i(0,!1)}#s(t){const e=t.currentTarget,s=t.target;if(s!==e){const t=e.childNodes;for(let e=0;e<t.length;e++)if(t[e]===s){this.#a(e,!0);break}}}#e(t){const e=!t.target.classList.contains("nav-control");let s=!1;switch(t.key){case"ArrowRight":this.#l(e),s=!0;break;case"ArrowLeft":this.#o(e),s=!0;break;case"Home":this.#a(0,e),s=!0;break;case"End":this.#a(this._slides.length-1,e),s=!0}s&&(t.stopPropagation(),t.preventDefault())}handlePrevious(){this.#o(!1)}handleNext(){this.#l(!1)}#o(t){let e=this._currentIndex-1;if(e<0){if(!this.wrap)return;e=this._slides.length-1}this.#a(e,t)}#l(t){let e=this._currentIndex+1;if(e>=this._slides.length){if(!this.wrap)return;e=0}this.#a(e,t)}#a(t,e){t!==this._currentIndex&&this.#i(t,e)}#i(t,e){for(let s=0;s<this._slides.length;s++){const r=this._slides[s];if(s===t){if(r.setAttribute("aria-hidden","false"),e){const t=this.renderRoot.querySelector(`button[role="tab"][aria-controls="${r.id}"]`);t&&t.focus()}}else r.setAttribute("aria-hidden","true")}requestIdleCallback((()=>this._slides.forEach((t=>{"false"===t.getAttribute("aria-hidden")?t.removeAttribute("inert"):t.setAttribute("inert","")})))),this._currentIndex=t}}customElements.define("rec-carousel",x);export{x as RecCarousel};

import{e,i as t,t as i,w as a,s,x as r,r as o}from"./directive-BlnHwUHq.js";
/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const n=e(class extends t{constructor(e){if(super(e),e.type!==i.ATTRIBUTE||"class"!==e.name||e.strings?.length>2)throw Error("`classMap()` can only be used in the `class` attribute and must be the only part in the attribute.")}render(e){return" "+Object.keys(e).filter((t=>e[t])).join(" ")+" "}update(e,[t]){if(void 0===this.st){this.st=new Set,void 0!==e.strings&&(this.nt=new Set(e.strings.join(" ").split(/\s/).filter((e=>""!==e))));for(const e in t)t[e]&&!this.nt?.has(e)&&this.st.add(e);return this.render(t)}const i=e.element.classList;for(const e of this.st)e in t||(i.remove(e),this.st.delete(e));for(const e in t){const a=!!t[e];a===this.st.has(e)||this.nt?.has(e)||(a?(i.add(e),this.st.add(e)):(i.remove(e),this.st.delete(e)))}return a}});class l extends s{render(){const e={"in-progress":this._loading&&!this._hide};return r`
			<div class="slide-inner">
				<div class="carousel-image">
					<slot
						@slotchange="${this.#e}"
						name="picture"
						>Picture missing</slot
					>
					<svg
						class="loader ${n(e)}"
						aria-hidden="true"
						viewBox="0 -100 400 200"
						version="1.1"
						xmlns="http://www.w3.org/2000/svg"
					>
						<circle fill="currentColor" cx="120" cy="0" r="20" />
						<circle fill="currentColor" cx="200" cy="0" r="20" />
						<circle fill="currentColor" cx="280" cy="0" r="20" />
					</svg>
				</div>
				<div class="carousel-caption">
					<slot name="caption">Caption missing</slot>
				</div>
			</div>
		`}static get properties(){return{_loading:{type:Boolean,state:!0},_hide:{attribute:"aria-hidden",converter:e=>"true"===e}}}static get styles(){return[o(":host{--caption-height:var(--carousel-caption-height,3em);--passepartout-thickness:var(--carousel-passepartout-thickness,10px);--passepartout-bg:var(--carousel-passepartout,#fff);--passepartout-fg:var(--carousel-passepartout-fg,#000);color:inherit}:host{display:block;height:100%;margin:0;overflow:hidden;padding:0;position:relative}.slide-inner{display:flex;flex-direction:column;height:100%}.carousel-caption{align-items:center;display:flex;height:var(--caption-height);justify-content:center;margin:0;text-align:center}.carousel-image{color:var(--passepartout-fg)}.carousel-image ::slotted(picture){display:contents}.carousel-image{aspect-ratio:3/2;background:var(--passepartout-bg);display:flex;flex-grow:1;justify-content:center;min-height:0;padding:var(--passepartout-thickness);position:relative}.carousel-image svg.loader{--reveal-delay:500ms;color:var(--passepartout-fg);inset:0;margin:auto;opacity:0;position:absolute;transition:opacity .2s ease-in;width:20%}.carousel-image svg.loader.in-progress{opacity:1;transition:opacity var(--reveal-delay) ease-out}.carousel-image svg.loader>circle{animation-duration:2s;animation-iteration-count:infinite;animation-name:pulse;animation-timing-function:ease-in-out}@media (prefers-reduced-motion:no-preference){.carousel-image svg.loader>circle{animation-duration:2.5s;animation-name:bob}}.carousel-image svg.loader>circle:first-of-type{animation-delay:calc(var(--reveal-delay) + .5s)}.carousel-image svg.loader>circle:nth-of-type(2){animation-delay:calc(var(--reveal-delay) + .7s)}.carousel-image svg.loader>circle:nth-of-type(3){animation-delay:calc(var(--reveal-delay) + 1s)}@keyframes pulse{0%{opacity:1}13%{opacity:.25}40%{opacity:1}to{opacity:1}}@keyframes bob{0%{transform:translateY(0)}3%{transform:translateY(3%)}13%{transform:translateY(-25%)}20%{transform:translateY(15%)}30%{transform:translateY(-10%)}35%{transform:translateY(4%)}40%{transform:translateY(0)}to{transform:translateY(0)}}")]}constructor(){super(),this._loading=!1,this._img=void 0,this._hide=!1}connectedCallback(){super.connectedCallback(),this.setAttribute("role","tabpanel"),this.setAttribute("role-description","slide")}update(e){super.update(e),e.has("_hide")&&(!this._img||this._img.complete||this._hide||this.#t())}#e(e){this._img=void 0;const t=e.target.assignedElements().filter((e=>/^IMG|PICTURE$/.test(e.tagName))).shift();t&&(this._img=/^IMG$/.test(t.tagName)?t:t.querySelector("img"),!this._img||this._img.complete||this._hide||this.#t())}#t(){if(!this._img)return;if(this._img.complete)return;setTimeout((()=>{this._img&&!this._img.complete&&(this._loading=!0)}),1e3);const e=t=>{this._loading=!1,t.target?.removeEventListener("load",e),t.target?.removeEventListener("error",e)};this._img.addEventListener("load",e),this._img.addEventListener("error",e)}}customElements.define("rec-carousel-slide",l);export{l as RecCarouselSlide};

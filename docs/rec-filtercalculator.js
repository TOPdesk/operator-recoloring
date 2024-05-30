import{s as e,x as t,r}from"./directive-BlnHwUHq.js";import{o as s}from"./style-map-DtTs6wy5.js";class a extends e{render(){const e={"--color":this.hexColor||"black"},r={"--filter":this.result?.filter||"none"};return t`
			<h3>Filter ${this.hexColor}</h3>
			<div role="status">${this.feedback}</div>
			<div class="swatches" aria-hidden="true">
				Hex
				<span class="swatch" style=${s(e)}></span>
				<svg aria-hidden="true" width="24" height="24" viewbox="0 0 48 48" class="icon">
					<path d="M18.75 36 16.6 33.85 26.5 23.95 16.6 14.05 18.75 11.9 30.8 23.95Z"/>
				</svg>
				<span class="swatch" style=${s(r)}></span>
				Filter
			</div>

			<label for="filter-result">
				<div class="label">Result</div>
				<div class="description">
					Color loss: ${this.renderColorLoss()}
					<button
						@click="${this.#e}"
						?hidden=${!this.result||this.result.loss<1}
						class="retry"
					>
						retry?
					</button>
				</div>
			</label>
			<textarea
				id="filter-result"
				rows="4"
				readonly
			>${this.result?.filter}
			</textarea>

			<button
				class="pushable copy"
				aria-disabled="${this.result?"false":"true"}"
				@click="${this.#t}"
			>
				<span class="shadow"></span>
				<span class="edge"></span>
				<span class="front">
					<svg aria-hidden="true" width="24" height="24" viewbox="0 0 48 48" class="icon">
						<path d="M15 37.95Q13.8 37.95 12.9 37.05Q12 36.15 12 34.95V6.95Q12 5.75 12.9 4.85Q13.8 3.95 15 3.95H37Q38.2 3.95 39.1 4.85Q40 5.75 40 6.95V34.95Q40 36.15 39.1 37.05Q38.2 37.95 37 37.95ZM15 34.95H37Q37 34.95 37 34.95Q37 34.95 37 34.95V6.95Q37 6.95 37 6.95Q37 6.95 37 6.95H15Q15 6.95 15 6.95Q15 6.95 15 6.95V34.95Q15 34.95 15 34.95Q15 34.95 15 34.95ZM9 43.95Q7.8 43.95 6.9 43.05Q6 42.15 6 40.95V10.8H9V40.95Q9 40.95 9 40.95Q9 40.95 9 40.95H32.7V43.95ZM15 6.95Q15 6.95 15 6.95Q15 6.95 15 6.95V34.95Q15 34.95 15 34.95Q15 34.95 15 34.95Q15 34.95 15 34.95Q15 34.95 15 34.95V6.95Q15 6.95 15 6.95Q15 6.95 15 6.95Z"/>
					</svg>
					Copy
				</span>
			</button>
		`}renderColorLoss(){return this.result?Number.parseFloat(this.result.loss).toFixed(2):"-"}static get properties(){return{hexColor:{type:String,state:!0},feedback:{type:String,state:!0},result:{type:Object,state:!0}}}static get styles(){return[r(':host{display:block}:host *{line-height:1.5}.icon{fill:currentColor;height:1.5em}h3{margin:0}.copy,.swatches,[role=status],label{display:block;margin-top:16px}.swatches{align-items:center;display:flex;gap:8px}.swatch{aspect-ratio:1;border:1px solid;display:inline-block;height:1em;position:relative}.swatch:before{background-color:var(--color,#000);content:"";filter:var(--filter,none);inset:0;position:absolute}label>.label{font-weight:700}label>.description{font-size:.75em}.retry{background-color:transparent;border:none;color:currentColor;cursor:pointer;text-decoration:underline}.retry:hover{color:var(--gold-20)}textarea{display:block;height:6em;resize:none;width:100%}'),r(".pushable{--button-clr:var(--ash-90);--button-bg:var(--gold-20);--button-edge-center:var(--gold-50);--button-edge-corner:var(--gold-80);--button-disabled-bg:var(--cassis-90);--button-disabled-clr:var(--cassis-70)}@media (prefers-color-scheme:light){.pushable.purple{--button-clr:var(--ash-10);--button-bg:var(--cassis-80);--button-edge-center:var(--cassis-90);--button-edge-corner:var(--cassis-100)}}.pushable{background:transparent;border:none;cursor:pointer;display:inline-block;outline-offset:6px;padding:0;position:relative;text-decoration:none;transition:filter .25s}.pushable>.shadow{background:rgba(0,0,0,.25);transform:translateY(2px);transition:transform .6s cubic-bezier(.3,.7,.4,1);will-change:transform}.pushable>.edge,.pushable>.shadow{border-radius:12px;height:100%;left:0;position:absolute;top:0;width:100%}.pushable>.edge{background:linear-gradient(to left,var(--button-edge-corner,#52001b) 0,var(--button-edge-center,#a30036) 8%,var(--button-edge-center,#a30036) 92%,var(--button-edge-corner,#52001b) 100%)}.pushable>.front{background:var(--button-bg,#f0003c);border-radius:6px;color:var(--button-clr,#fff);display:flex;font-size:1.15rem;gap:16px;padding:8px 16px;position:relative;transform:translateY(-4px);transition:transform .6s cubic-bezier(.3,.7,.4,1);will-change:transform}.pushable:hover{filter:brightness(110%)}.pushable:hover>.front{transform:translateY(-6px);transition:transform .25s cubic-bezier(.3,.7,.4,1.5)}.pushable:focus{outline:2px solid var(--button-bg,#f0003c)}.pushable:focus:not(:focus-visible){outline:none}.pushable:active>.front{transform:translateY(-2px);transition:transform 34ms}.pushable:hover>.shadow{transform:translateY(4px);transition:transform .25s cubic-bezier(.3,.7,.4,1.5)}.pushable:active>.shadow{transform:translateY(1px);transition:transform 34ms}.pushable[aria-disabled=true]:hover{filter:none}.pushable[aria-disabled=true]>.front{background-color:var(--button-disabled-bg);color:var(--button-disabled-clr)}.pushable[aria-disabled=true]>.edge,.pushable[aria-disabled=true]>.shadow{display:none}.pushable[aria-disabled=true]>.front{transform:none!important}")]}constructor(){super(),this.feedback=t`Waiting for a color&hellip;`,this.worker=new Worker("scripts/worker.js"),this.worker.onmessage=e=>this.#r(e.data)}calculate(e,r=!1){if(e){this.hexColor=null,this.result=null;try{this.hexColor=this.#s(e),this.feedback=t`Calculating&hellip;`}catch(e){return void(this.feedback=t`Not a hexidecimal color.`)}this.worker.postMessage({color:this.hexColor,clearCache:r})}else this.feedback=t`Please fill in a color.`}#s(e){const t=e.match(/#?([0-9a-fA-F]{3,6})/);if(!t)throw new Error("Not a hex color");const r=t[1];if(6===r.length)return`#${r}`;const[s,a,o]=r;return`#${s}${s}${a}${a}${o}${o}`}#r(e){if(e.error)return console.error("Calculation failed: ${data.error}"),this.feedback=t`Calculation failed.`,void(this.result={color:this.hexColor,loss:1/0,filter:null});this.feedback=t`Calculation complete.`,this.result={color:e.hex,loss:e.loss,filter:`brightness(0) saturate(100%) ${e.filter.slice(0,-1)}`}}#e(e){"true"!==e.target.getAttribute("aria-disabled")&&this.calculate(this.result.color,!0)}#t(e){"true"!==e.target.getAttribute("aria-disabled")&&navigator.clipboard.writeText(this.result.filter).then((()=>{this.feedback=t`Copied filter to clipboard.`}),(()=>{this.feedback=t`Failed to copy filter to clipboard.`}))}}customElements.define("rec-filtercalculator",a);export{a as RecFilterCalculator};

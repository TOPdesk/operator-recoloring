import { LitElement, html, unsafeCSS } from 'lit';
import { styleMap } from 'lit/directives/style-map.js';
import styles from './rec-filtercalculator.scss';
import pushable from '../../styles/pushable.css';


export class RecFilterCalculator extends LitElement {

  render() {
    const hexSwatchStyles = { '--color': this.hexColor || 'black' };
    const filterSwatchStyles = { '--filter': this.result?.filter || 'none' };

    return html`
      <h3>Filter ${this.hexColor}</h3>
      <div role="status">${this.feedback}</div>
      <div class="swatches" aria-hidden="true">
        Hex
        <span class="swatch" style=${styleMap(hexSwatchStyles)}></span>
        <svg aria-hidden="true" width="24" height="24" viewbox="0 0 48 48" class="icon">
          <path d="M18.75 36 16.6 33.85 26.5 23.95 16.6 14.05 18.75 11.9 30.8 23.95Z"/>
        </svg>
        <span class="swatch" style=${styleMap(filterSwatchStyles)}></span>
        Filter
      </div>

      <label for="filter-result">
        <div class="label">Result</div>
        <div class="description">
          Color loss: ${this.renderColorLoss()}
          <button
            @click="${this.#recalculate}"
            ?hidden=${!this.result || this.result.loss < 1}
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
        aria-disabled="${!this.result ? 'true' : 'false' }"
        @click="${this.#copyToClipboard}"
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
    `;
  }

  renderColorLoss() {
    if (!this.result) {
      return '-';
    }

    return Number.parseFloat(this.result.loss).toFixed(2);
  }


  static get properties() {
    return {
      hexColor: { type: String, state: true },
      feedback: { type: String, state: true },
      result: { type: Object, state: true },
    };
  }

  static get styles() {
    return [ unsafeCSS(styles), unsafeCSS(pushable) ];
  }

  constructor() {
    super();

    this.feedback = html`Waiting for a color&hellip;`;
    this.worker = new Worker('scripts/worker.js');
    this.worker.onmessage = event => this.#processResult(event.data);
  }

  calculate(rawColor, clearCache = false) {
    if (!rawColor) {
      this.feedback = html`Please fill in a color.`;
      return;
    }

    this.hexColor = null;
    this.result = null;

    try {
      this.hexColor = this.#normalizeColor(rawColor);
      this.feedback = html`Calculating&hellip;`;
    }
    catch (error) {
      this.feedback = html`Not a hexidecimal color.`;
      return;
    }

    this.worker.postMessage({
      color: this.hexColor,
      clearCache
    });
  }

  #normalizeColor(rawString) {
    const match = rawString.match(/#?([0-9a-fA-F]{3,6})/);
    if (!match) {
      throw new Error('Not a hex color');
    }

    const rawColor = match[1];
    if (rawColor.length === 6) {
      return `#${rawColor}`;
    }

    const [ r, g, b ] = rawColor;
    return `#${r}${r}${g}${g}${b}${b}`;
  }

  #processResult(data) {
    if (data.error) {
      console.error('Calculation failed: ${data.error}');
      this.feedback = html`Calculation failed.`;
      this.result = {
        color: this.hexColor,
        loss: Infinity,
        filter: null,
      };

      return;
    }

    this.feedback = html`Calculation complete.`;
    this.result = {
      color: data.hex,
      loss: data.loss,
      filter: `brightness(0) saturate(100%) ${data.filter.slice(0,-1)}`,
    };
  }

  #recalculate(event) {
    if (event.target.getAttribute('aria-disabled') === 'true') {
      return;
    }

    this.calculate(this.result.color, true);
  }

  #copyToClipboard(event) {
    if (event.target.getAttribute('aria-disabled') === 'true') {
      return;
    }

    navigator.clipboard.writeText(this.result.filter).then(() => {
      this.feedback = html`Copied filter to clipboard.`;
    }, () => {
      this.feedback = html`Failed to copy filter to clipboard.`;
    });
  }
}

customElements.define('rec-filtercalculator', RecFilterCalculator);
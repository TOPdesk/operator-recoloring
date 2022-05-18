import { LitElement, html, unsafeCSS } from 'lit';
import { classMap } from 'lit/directives/class-map.js';
import styles from './rec-carousel-slide.scss';

/**
 * The slide element to be used with RecCarousel.
 *
 * Combines the image with the caption.
 *
 * Remember:
 * - The image still needs an alt text to describe it!
 * - It is recommended to set the 'loading' attribute on the image, to prevent unnecessary bandwidth use.
 *
 * @element rec-carousel-slide
 *
 * @slot picture - Slot to set the <img> or <picture> for the slide (other types of content may or may not work)
 * @slot caption - Slot to set the caption for the slide, use '--carousel-caption-height' to increase the space for a caption.
 *
 * &lt;rec-carousel-slide&gt; uses a limited set of CSS variables, but they are intended to be set on the &lt;rec-carousel&gt;,
 * and as such are documented there.
 */
export class RecCarouselSlide extends LitElement {

  render() {
    const inProgressClass = { 'in-progress': this._loading && !this._hide };

    return html`
      <div class="slide-inner">
        <div class="carousel-image">
          <slot
            @slotchange="${this.#handlePictureUpdate}"
            name="picture"
            >Picture missing</slot
          >
          <svg
            class="loader ${classMap(inProgressClass)}"
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
    `;
  }

  static get properties() {
    return {
      _loading: { type: Boolean, state: true },
      _hide: {
        attribute: 'aria-hidden',
        converter: value => value === 'true',
      },
    };
  }

  static get styles() {
    return [ unsafeCSS(styles) ];
  }

  constructor() {
    super();
    this._loading = false;
    this._img = undefined;
    this._hide = false;
  }

  connectedCallback() {
    super.connectedCallback();

    this.setAttribute('role', 'tabpanel') ;
    this.setAttribute('role-description', 'slide');
  }

  update(changedProperties) {
    super.update(changedProperties);
    if (changedProperties.has('_hide')) {
      if (this._img && !this._img.complete && !this._hide) {
        this.#waitForImageLoad();
      }
    }
  }

  #handlePictureUpdate(event) {
    this._img = undefined;

    const pic = (event.target)
      .assignedElements()
      .filter((pic) => /^IMG|PICTURE$/.test(pic.tagName))
      .shift();

    if (!pic) {
      // no picture, nothing to load
      return;
    }

    this._img = /^IMG$/.test(pic.tagName) ? pic : pic.querySelector('img');

    if (this._img && !this._img.complete && !this._hide) {
      this.#waitForImageLoad();
    }
  }

  #waitForImageLoad() {
    if (!this._img) {
      // There is no image to load
      return;
    }
    if (this._img.complete) {
      // Image already there
      return;
    }

    // Only show the loading animation when it takes a while
    setTimeout(() => {
      if (!this._img || this._img.complete) {
        // Image finished loading already, or there is no longer an image there
        return;
      }

      this._loading = true;
    }, 1000);

    const imgLoadFinished = (event) => {
      this._loading = false;

      event.target?.removeEventListener('load', imgLoadFinished);
      event.target?.removeEventListener('error', imgLoadFinished);
    };

    this._img.addEventListener('load', imgLoadFinished);
    this._img.addEventListener('error', imgLoadFinished);
  }
}
customElements.define('rec-carousel-slide', RecCarouselSlide);
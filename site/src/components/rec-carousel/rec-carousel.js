import { LitElement, html, unsafeCSS, render } from 'lit';
import { repeat } from 'lit/directives/repeat.js';
import { styleMap } from 'lit/directives/style-map.js';
import styles from './rec-carousel.scss';
import 'wicg-inert';

/**
 * Allows a user to navigate through a set of images with captions.
 *
 * @element rec-carousel
 *
 * @prop {boolean} [wrap=false] - If true wraps navigation beyond the end back to the beginning and vice versa
 *
 * @slot - Default slot to populate with rec-carousel-slide components
 * @slot title - Slot to set the title of the carousel
 *
 * CSS variables (Sizes)
 * @cssprop [--carousel-caption-height=3em] The height of the caption area (should be equal between slides to prevent page shifts).
 * @cssprop [--carousel-passepartout-thickness=10px] The minimum spacing between the image area and the image itself.
 * @cssprop [--carousel-control-size=36px] The height of the navigation controls.
 * @cssprop [--carousel-control-spacing=4px] The vertical space between the naviagtion controls and the title and image area.
 *
 * CSS variables (Colors)
 * @cssprop [--carousel-fg-disabled=#aaa] The color of the previous/next control when the list is at their respective end (unless wrap=true).
 * @cssprop [--carousel-passepartout=#fff] The (background) color of the passepartout.
 * @cssprop [--carousel-passepartout-fg=#000] The color of text on the passepartout, e.g. when alt text is displayed for a broken image;
 *
 * @cssprop [--carousel-tabs-bg=rgb(0 0 0 / 65%)] The background of the tablist.
 * @cssprop [--carousel-tabs-fg=white] The color of the circles of a tab and the border of the tablist when focused.
 * @cssprop [--carousel-tabs-contrast=black] The default background of a tab.
 * @cssprop [--carousel-tabs-accent=#005a9c] The background of a tab when hovered, and the background of the tab and tablist when focused.
 *
 * Note: Some of the CSS variables are (only) used in &lt;rec-carousel-slide&gt;, but they are intended to be set on &lt;rec-carousel&gt;,
 * and as such are documented here.
 */
export class RecCarousel extends LitElement {
  static _lastUId = 0;

  render() {
    const slidesTransform = {
      transform: `translateX(-${this._currentIndex}00%)`,
    };

    // Puts tabs in light dom, so that their aria-controls idref can link to the slide in the light dom.
    render(this.tabButtonTemplate(), this);

    return html`
      <div class="title">
        <slot name="title" @slotchange="${this.#handleTitleUpdate}">Title missing</slot>
      </div>
      <div class="controls" @keydown="${this.#handleNavigation}">
        <button
          class="nav-control"
          type="button"
          @click="${this.#handlePrevious}"
          aria-disabled="${!this.wrap && this._currentIndex === 0 ? 'true' : 'false'}"
        >
          <svg aria-hidden="true" focusable="false" viewBox="0 0 10 10">
            <path fill="currentColor" d="m9 4h-4v-2l-4 3 4 3v-2h4z"></path>
          </svg>
          <span class="visually-hidden">Previous</span><!-- TODO translate -->
        </button>
        <div part="tab" role="tablist" aria-label="Slides" @click="${this.#handleTabClick}"> <!--TODO translate -->
          <slot name="tab"></slot>
        </div>
        <button
          class="nav-control"
          type="button"
          @click="${this.#handleNext}"
          aria-disabled="${!this.wrap && this._currentIndex === this._slides.length - 1 ? 'true' : 'false'}"
        >
          <svg aria-hidden="true" focusable="false" viewBox="0 0 10 10">
            <path fill="currentColor" d="m1 4h4v-2l4 3-4 3v-2h-4z"></path>
          </svg>
          <span class="visually-hidden">Next</span><!-- TODO translate -->
        </button>
      </div>
      <div class="aperture">
        <div
          class="carousel-items"
          aria-live="polite"
          style="${styleMap(slidesTransform)}"
        >
          <slot @slotchange="${this.#handleSlidesUpdate}"></slot>
        </div>
      </div>
    `;
  }

  tabButtonTemplate() {
    return html`
      ${repeat(this._slides, (slide) => slide.id, (slide, index) => html`
        <!-- TODO translate -->
        <button type="button" role="tab" slot="tab"
          tabindex="${index === this._currentIndex ? '0' : '-1'}"
          aria-controls="${slide.id}"
          aria-label="Slide ${index + 1}"
          aria-expanded="${index === this._currentIndex ? 'true' : 'false'}"
          aria-selected="${index === this._currentIndex ? 'true' : 'false'}"
          @click="${() => this.#setSelectedTab(index, true)}"
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
      `)}
    `;
  }

  static get properties() {
    return {
      wrap: { type: Boolean },
      _currentIndex: { type: Number, state: true },
      _slides: { type: Array, state: true },
    };
  }

  static get styles() {
    return [ unsafeCSS(styles) ];
  }

  constructor() {
    super();

    this.wrap = false;
    this._currentIndex = 0;
    this._slides = [];
  }

  connectedCallback() {
    super.connectedCallback();

    this.setAttribute('role', 'region');
    this.setAttribute('role-description', 'carousel');
  }

  #handleTitleUpdate(event) {
    /* Since this is a named slot, contents will always be elements */
    const title = event.target.assignedElements()[0];

    if (!title) {
      this.removeAttribute('aria-labelledby');
      this.classList.remove('self-titled');
      return;
    }

    if (!title.id) {
      title.id = `rec-carousel-title-${++RecCarousel._lastUId}`;
    }
    this.setAttribute('aria-labelledby', title.id);
    this.classList.add('self-titled');
  }

  #handleSlidesUpdate(event) {
    // ignore non-<rec-carousel-slide-xxx> elements (tag will be hashed by framework)
    this._slides = event.target
      .assignedElements()
      .filter(slide => slide.tagName.startsWith('REC-CAROUSEL-SLIDE'));

    const total = this._slides.length;

    this._slides.forEach((slide, ix) => {
      const slideNr = ix + 1;
      slide.setAttribute('aria-label', `${slideNr} of ${total}`); /* translate */

      slide.style.transform = `translateX(${ix}00%)`;
      slide.setAttribute('aria-hidden', 'true');

      if (!slide.id) {
        slide.id = `rec-carousel-slide-${++RecCarousel._lastUId}`;
      }
    });

    this.#forceSelectedTab(0, false);
  }

  #handleTabClick(event) {
    const tablist = event.currentTarget;
    const tab = event.target;

    if (tab !== tablist) {
      const tabs = tablist.childNodes;
      for (let i = 0; i < tabs.length; i++) {
        if (tabs[i] === tab) {
          this.#setSelectedTab(i, true);
          break;
        }
      }
    }
  }

  #handleNavigation(event) {
    const moveFocus = !(event.target).classList.contains('nav-control');

    let handled = false;

    switch (event.key) {
    case 'ArrowRight':
      this.#setSelectedToNextTab(moveFocus);
      handled = true;
      break;

    case 'ArrowLeft':
      this.#setSelectedToPreviousTab(moveFocus);
      handled = true;
      break;

    case 'Home':
      this.#setSelectedTab(0, moveFocus);
      handled = true;
      break;

    case 'End':
      this.#setSelectedTab(this._slides.length - 1, moveFocus);
      handled = true;
      break;

    default:
      break;
    }

    if (handled) {
      event.stopPropagation();
      event.preventDefault();
    }
  }

  #handlePrevious() {
    this.#setSelectedToPreviousTab(false);
  }

  #handleNext() {
    this.#setSelectedToNextTab(false);
  }

  #setSelectedToPreviousTab(moveFocus) {
    let nextIndex = this._currentIndex - 1;

    if (nextIndex < 0) {
      if (!this.wrap) {
        return;
      }

      nextIndex = this._slides.length - 1;
    }

    this.#setSelectedTab(nextIndex, moveFocus);
  }

  #setSelectedToNextTab(moveFocus) {
    let nextIndex = this._currentIndex + 1;

    if (nextIndex >= this._slides.length) {
      if (!this.wrap) {
        return;
      }
      nextIndex = 0;
    }

    this.#setSelectedTab(nextIndex, moveFocus);
  }


  #setSelectedTab(index, moveFocus) {
    if (index === this._currentIndex) {
      return;
    }

    this.#forceSelectedTab(index, moveFocus);
  }

  #forceSelectedTab(index, moveFocus) {
    for (let i = 0; i < this._slides.length; i++) {
      const slide = this._slides[i];
      if (i === index) {
        slide.setAttribute('aria-hidden', 'false');

        if (moveFocus) {
          const tab = this.renderRoot.querySelector(`button[role="tab"][aria-controls="${slide.id}"]`);
          if (tab) {
            tab.focus();
          }
        }
      } else {
        slide.setAttribute('aria-hidden', 'true');
      }
    }

    /* Running the inert polyfill is expensive, so shouldn't happen _during_ the animation */
    requestIdleCallback(() => this._slides.forEach(slide => {
      const hidden = slide.getAttribute('aria-hidden');
      if (hidden === 'false') {
        slide.removeAttribute('inert');
      }
      else {
        slide.setAttribute('inert', '');
      }
    }));

    this._currentIndex = index;
  }
}

customElements.define('rec-carousel', RecCarousel);
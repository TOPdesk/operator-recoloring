import ZingTouch from 'zingtouch/src/ZingTouch';

/*
 * Adding swipe support to carousels
 */
(function () {
  const main = document.querySelector('#main');
  const gestureRegion = new ZingTouch.Region(main, false, false);

  document.querySelectorAll('rec-carousel').forEach(carousel => {
    gestureRegion.bind(carousel, 'swipe', event => {
      const direction = event.detail.data[0].currentDirection;

      if ((direction >= 0 && direction < 30) || (direction > 330 && direction <= 360)) {
        /* Right 0 + 30 or 360 - 30 */
        carousel.handlePrevious();
      }
      else if (direction > 150 && direction < 210) {
        /* Left 180 +- 30 */
        carousel.handleNext();
      }
    }, false);
  });
})();

/*
 * Filter Form
 */
(function () {
  const form = document.querySelector('#filter-form');
  const calculateButton = document.querySelector('#filter-form-submit');
  const colorField = document.querySelector('#filter-form-field');
  const eyedropperButton = document.querySelector('#filter-eyedropper');
  const calculator = document.querySelector('#filter-calculator');

  calculateButton.removeAttribute('aria-disabled');

  if(window.EyeDropper) {
    eyedropperButton.removeAttribute('hidden');
    eyedropperButton.addEventListener('click', async () => {
      // eslint-disable-next-line no-undef
      const eyedropper = new EyeDropper();

      try {
        const result = await eyedropper.open();
        colorField.value = result.sRGBHex;
      } catch (e) {
        // dropper closed, no problem
      }
    });
  }


  form.addEventListener('submit', (event) => {
    event.preventDefault();

    calculator.calculate(colorField.value);
  });
})();

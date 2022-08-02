/*
 * Adding swipe support to carousels
 */
(async function () {
	if (window.matchMedia('(any-pointer: coarse)').matches) {
		const { addHorizontalSwipeTriggers } = await import('./swipe');

		const main = document.querySelector('#main');

		document.querySelectorAll('rec-carousel').forEach(carousel => {
			addHorizontalSwipeTriggers(main, carousel, () => carousel.handleNext(), () => carousel.handlePrevious());
		});
	}
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

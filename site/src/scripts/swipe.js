
export const addHorizontalSwipeTriggers = function (container, element, leftCb, rightCb) {
	if (!element || !container) return;


	const minHorizontal = 10; // Minimum number of pixels traveled to count as a horizontal swipe.
	const deltaHorizontal = 3; // Delta for horizontal swipe

	// Store the touches
	let touches = [];

	// When the swipe is completed, calculate the direction.
	const _touchend = function() {
		if (!touches.length) return;

		const xStart = touches[0].x;
		const xEnd = touches[touches.length - 1].x;

		const xtravel = Math.abs(xStart - xEnd);
		const ytravel = Math.abs(touches[0].y - touches[touches.length - 1].y);

		if (xtravel > ytravel && xtravel >= minHorizontal) {
			const xArray = touches.map(t => t.x);

			if (xStart > xEnd) {
				if (Math.abs(Math.min(...xArray) - xEnd) <= deltaHorizontal) {
					leftCb();
				}
			}
			else {
				if (Math.abs(Math.max(...xArray) - xEnd) <= deltaHorizontal) {
					rightCb();
				}
			}
		}

		touches = []; // Clear touches array.
	};

	// When a swipe is performed, store the coords.
	const _touchmove = function (e) {
		let touch = e.changedTouches[0];
		touches.push({
			x: touch.clientX,
			y: touch.clientY
		});
	};

	element.addEventListener('touchmove', _touchmove, { passive: true });
	container.addEventListener('touchend', _touchend);
};
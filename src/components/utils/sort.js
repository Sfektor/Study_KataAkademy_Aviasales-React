// tiketFilter
export function theCheapest(arr) {
	return arr?.sort((prevEl, nextEl) => prevEl.price - nextEl.price);
}
export function theFastest(arr) {
	return arr?.sort((prevEl, nextEl) => {
		const forwardPrev = prevEl.segments[0];
		const forwardNext = nextEl.segments[0];
		const backPrev = prevEl.segments[1];
		const backNext = nextEl.segments[1];
		const sum1 = forwardPrev.duration + backPrev.duration;
		const sum2 = forwardNext.duration + backNext.duration;
		return sum1 - sum2;
	});
}
export function optimal(arr) {
	return arr?.sort((prevEl, nextEl) => {
		const forwardPrev = prevEl.segments[0];
		const forwardNext = nextEl.segments[0];
		const mult1 = prevEl.price * forwardPrev.duration;
		const mult2 = prevEl.price * forwardNext.duration;
		return mult1 - mult2;
	});
}
// sideFilter
export function sideFilter(arrTikets, arrFilters) {
	let newTikets = [];
	const noTransfersOn = arrFilters.filter[1].checked;
	const oneTransfersOn = arrFilters.filter[2].checked;
	const twoTransfersOn = arrFilters.filter[3].checked;
	const threeTransfersOn = arrFilters.filter[4].checked;

	if (noTransfersOn)
		newTikets = arrTikets?.data?.filter(
			(el) =>
				el.segments[1].stops.length === 0 && el.segments[0].stops.length === 0
		);
	if (oneTransfersOn)
		newTikets = arrTikets?.data?.filter(
			(el) =>
				el.segments[1].stops.length === 1 || el.segments[0].stops.length === 1
		);
	if (twoTransfersOn)
		newTikets = arrTikets?.data?.filter(
			(el) =>
				el.segments[1].stops.length === 2 || el.segments[0].stops.length === 2
		);
	if (threeTransfersOn)
		newTikets = arrTikets?.data?.filter(
			(el) =>
				el.segments[1].stops.length === 3 || el.segments[0].stops.length === 3
		);
	return newTikets;
}

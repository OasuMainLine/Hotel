document.addEventListener("DOMContentLoaded", main);
function main() {
	document.querySelector(".loading-splash").classList.add("hidden");
	document.querySelector("body").classList.add("loaded");
	// FLATPICKR
	flatpickr('input[type="date"]', {
		dateFormat: "M d, y",
		disableMobile: true,
	});

	// SPLIDE
	Splide.defaults = {
		type: "loop",
		arrows: false,
		autoplay: true,
		interval: 3000,
		gap: "2rem",
	};

	document.querySelectorAll(".splide").forEach((el) => {
		new Splide(el).mount();
	});

	// AOS
	AOS.init({
		duration: 700,
		startEvent: "load",
	});
}

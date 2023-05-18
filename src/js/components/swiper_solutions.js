const SLIDES_GAP = 29;
const CONTAINER_WIDTH = 1520;

const swiper_solutions = new Swiper('.swiper_solutions', {
	modules: [Navigation, Pagination],
	slidesPerView: 1,
	slidesPerGroup: 1,
	speed: 1000,
	spaceBetween: SLIDES_GAP / CONTAINER_WIDTH * 500 + '%',
	pagination: {
		el: ".swiper-pagination",
		type: "fraction",
	},
	navigation: {
		nextEl: ".swiper-button-next",
		prevEl: ".swiper-button-prev",
	},
	breakpoints: {
		769: {
			slidesPerView: 3,
			slidesPerGroup: 3,
			spaceBetween: SLIDES_GAP / CONTAINER_WIDTH * 100 + '%',
			speed: 1500,
		  }
	}
});

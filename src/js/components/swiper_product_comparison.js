const SLIDES_GAP = 28;
const CONTAINER_WIDTH = 1520;

const swiper_product_comparison = new Swiper('.swiper_product_comparison', {
	modules: [Navigation, Pagination],
	slidesPerView: 2,
	slidesPerGroup: 1,
	speed: 1000,
	spaceBetween: SLIDES_GAP / CONTAINER_WIDTH * 100 + '%',
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
			slidesPerView: 4,
			slidesPerGroup: 1,
			spaceBetween: SLIDES_GAP / CONTAINER_WIDTH * 100 + '%',
			speed: 1500,
		  }
	}
});

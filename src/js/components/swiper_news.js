const SLIDES_GAP = 28;
const CONTAINER_WIDTH = 1004;

const swiper_news = new Swiper('.swiper_news', {
	modules: [Navigation, Pagination],
	slidesPerView: 1,
	speed: 1000,
	spaceBetween: SLIDES_GAP / CONTAINER_WIDTH * 200 + '%',
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
			spaceBetween: SLIDES_GAP / CONTAINER_WIDTH * 100 + '%',
			speed: 1000,
		  }
	}
});

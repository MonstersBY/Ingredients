const SLIDES_GAP = 28;
const CONTAINER_WIDTH = 1004;

const swiper_news = new Swiper('.swiper_news', {
	modules: [Navigation, Pagination],
	slidesPerView: 4,
	speed: 200,
	spaceBetween: SLIDES_GAP / CONTAINER_WIDTH * 100 + '%',
	pagination: {
		el: ".swiper-pagination",
		type: "fraction",
	},
	navigation: {
		nextEl: ".swiper-button-next",
		prevEl: ".swiper-button-prev",
	},
});

const SLIDES_GAP = 28;
const CONTAINER_WIDTH = 1520;

const swiper_vendors = new Swiper('.swiper_vendors', {
	modules: [Navigation, Pagination],
	slidesPerView: 4,
	slidesPerGroup: 4,
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
});
const SLIDES_GAP = 28;
const CONTAINER_WIDTH = 1520;

const swiper_materials_1 = new Swiper('.swiper_materials_1', {
	modules: [Navigation, Pagination],
	slidesPerView: 2,
	slidesPerGroup: 2,
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

const swiper_materials_2 = new Swiper('.swiper_materials_2', {
	modules: [Navigation, Pagination],
	slidesPerView: 2,
	slidesPerGroup: 2,
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
const SLIDES_GAP = 20;
const CONTAINER_WIDTH = 1131;

const swiper_provider_orders = new Swiper('.swiper_provider_orders', {
	modules: [Navigation, Pagination, Grid],
	speed: 1000,
	grid: {
		rows: 3,
		fill: 'column'
	},
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

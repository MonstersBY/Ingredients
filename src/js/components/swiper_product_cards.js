
const swiper_product_cards = new Swiper('.swiper_product_cards', {
	modules: [Navigation, Pagination, Grid],
	speed: 1000,
	grid: {
		rows: 4,
		fill: 'column'
	},
	spaceBetween: 20,
	pagination: {
		el: ".swiper-pagination",
		type: "fraction",
	},
	navigation: {
		nextEl: ".swiper-button-next",
		prevEl: ".swiper-button-prev",
	},
});

const swiper_my_orders = new Swiper('.swiper_my_orders', {
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

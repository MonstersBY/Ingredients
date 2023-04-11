const swiper_grid = new Swiper('.swiper_grid', {
	modules: [Navigation, Pagination, Grid],
	slidesPerView: 4,
	slidesPerGroup: 4,
	grid: {
		rows: 3,
		fill: 'row',
	},
	speed: 1000,
	pagination: {
		el: ".swiper-pagination",
		type: "fraction",
	},
	navigation: {
		nextEl: ".swiper-button-next",
		prevEl: ".swiper-button-prev",
	},
});
const swiper_grid = new Swiper('.swiper_products-category', {
	modules: [Navigation, Pagination, Grid],
	slidesPerView: 1,
	slidesPerGroup: 1,
	grid: {
		rows: 6,
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
	breakpoints: {
		769: {
			slidesPerView: 4,
			slidesPerGroup: 4,
			grid: {
				rows: 3,
				fill: 'row',
			},
			speed: 1000,
		  }
	}
});

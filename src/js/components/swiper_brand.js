const swiper_brand = new Swiper('.swiper_brand', {
	modules: [Navigation, Pagination, Grid],
	slidesPerView: 2,
	slidesPerGroup: 2,
	speed: 1000,
	grid: {
		rows: 3,
		fill: 'row',
	},
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
			slidesPerView: 3,
			slidesPerGroup: 3,
			grid: {
				rows: 2,
				fill: 'row',
			},
			speed: 1500,
		  }
	}
});

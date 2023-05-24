const swiper_my_orders = new Swiper('.swiper_experts', {
	modules: [Navigation, Pagination, Grid],
	speed: 1000,
	grid: {
		rows: 2,
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
	breakpoints: {
		769: {
			grid: {
				rows: 4,
				fill: 'column',
			},
		}
	}
});

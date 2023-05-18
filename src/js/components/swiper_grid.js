window.Swiper_grid = function(slidesPerView, slidesPerGroup, rows) {
	const swiper_grid = new Swiper('.swiper_grid', {
		modules: [Navigation, Pagination, Grid],
		slidesPerView: slidesPerView,
		slidesPerGroup: slidesPerGroup,
		grid: {
			rows: rows,
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
}

Swiper_grid(4, 4, 3);

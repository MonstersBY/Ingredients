window.Swiper_grid = function(slidesPerView, slidesPerGroup, rows, slidesPerViewM, slidesPerGroupM, rowsM) {
	const swiper_grid = new Swiper('.swiper_grid', {
		modules: [Navigation, Pagination, Grid],
		slidesPerView: slidesPerViewM,
		slidesPerGroup: slidesPerGroupM,
		grid: {
			rows: rowsM,
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
				slidesPerView: slidesPerView,
				slidesPerGroup: slidesPerGroup,
				grid: {
					rows: rows,
					fill: 'row',
				},
				speed: 1000,
			  }
		}
	});
}

Swiper_grid(4, 4, 3, 2, 2, 4);

const swiper_column_line = new Swiper('.swiper_column_line', {
	modules: [Navigation, Pagination],
	slidesPerView: 1,
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

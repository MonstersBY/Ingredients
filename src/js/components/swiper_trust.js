const swiper_trust = new Swiper('.swiper_trust', {
	modules: [Navigation, Pagination, Grid],
	slidesPerView: 1,
	slidesPerGroup: 1,
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

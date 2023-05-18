const SLIDES_GAP = 28;
const CONTAINER_WIDTH = 1520;

const swiper_vendors = new Swiper('.swiper_vendors', {
	modules: [Navigation, Pagination, Grid],
	slidesPerView: 2,
	slidesPerGroup: 2,
	speed: 1000,
	grid: {
		rows: 2,
		fill: 'row',
	},
	spaceBetween: 0,
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
				rows: 1,
				fill: 'row',
			},
			spaceBetween: SLIDES_GAP / CONTAINER_WIDTH * 100 + '%',
			speed: 1500,
		  }
	}
});

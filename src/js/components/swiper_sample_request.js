const SLIDES_GAP = 20;
const CONTAINER_WIDTH = 1131;

const swiper_my_orders = new Swiper('.swiper_sample_request', {
	modules: [Navigation, Pagination, Grid],
	speed: 1000,
	grid: {
		rows: 4,
		fill: 'column'
	},
	spaceBetween: SLIDES_GAP / CONTAINER_WIDTH * 100 + '%',
	pagination: {
		el: ".swiper-pagination",
		type: "fraction",
	},
	navigation: {
		nextEl: ".swiper-button-next",
		prevEl: ".swiper-button-prev",
	},
});

if($('.my_sample_request').length){
	$('.all_btn').children('span').text(`(${$('.count_all .sample_request__item').length})`)
	$('.new_btn').children('span').text(`(${$('.count_all .status_new').length})`)
	$('.denied_btn').children('span').text(`(${$('.count_all .status_denied').length})`)
	$('.delivered_btn').children('span').text(`(${$('.count_all .sample_request__item').length - $('.count_all .status_new').length - $('.count_all .status_denied').length})`)
}

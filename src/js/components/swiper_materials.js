const SLIDES_GAP = 28;
const CONTAINER_WIDTH = 1520;

const swiper_materials_1 = new Swiper('.swiper_materials_1', {
	modules: [Navigation, Pagination],
	slidesPerView: 2,
	slidesPerGroup: 2,
	speed: 200,
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

const swiper_materials_2 = new Swiper('.swiper_materials_2', {
	modules: [Navigation, Pagination],
	slidesPerView: 2,
	slidesPerGroup: 2,
	speed: 200,
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


let switcher_btns = $('.switcher__btn');
let switcher__contents = $('.switcher__content');

if (switcher_btns) {
	switcher_btns.on('click', function(event) {
		$('.switcher__btn').removeClass('active');
		$(this).toggleClass('active');

		let index = $(this).index();

		switcher__contents.addClass('switcher__content_hide');

		$(switcher__contents[index]).removeClass('switcher__content_hide');

		let swiper_update = eval('swiper_materials_' + ++index);

		swiper_update.slideTo(0,0,false);

	});
}
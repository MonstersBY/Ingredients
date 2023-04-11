let switcher_btns = $('.switcher__btn');
let switcher__contents = $('.switcher__content');

if (switcher_btns.length > 0) {
	switcher_btns.on('click', function(evt) {
		evt.preventDefault();
		$('.switcher__btn').removeClass('active');
		$(this).toggleClass('active');

		let index = $(this).index();

		switcher__contents.addClass('switcher__content_hide');

		$(switcher__contents[index]).removeClass('switcher__content_hide');

		let swiper_update = $(this).closest('.section').find('.swiper');
		swiper_update[index].swiper.slideTo(0,0,false);

	});
}
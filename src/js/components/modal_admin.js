$('.admin .answer, .modal-admin-answer .modal-box__close').on('click', function(evt) {
	evt.preventDefault();
	$('main').toggleClass('modal');
	$('html').toggleClass('modal');
	const $modal_box = $('.modal-admin-answer')
	const $container = $modal_box.children('.modal-box__container')
	$modal_box.toggleClass('active');
	$container.slideToggle();
});

$('.admin .btn-reject, .modal-admin-reject .modal-box__close').on('click', function(evt) {
	evt.preventDefault();
	$('main').toggleClass('modal');
	$('html').toggleClass('modal');
	const $modal_box = $('.modal-admin-reject')
	const $container = $modal_box.children('.modal-box__container')
	$modal_box.toggleClass('active');
	$container.slideToggle();
});

$('.admin-moderation .detail').on('click', function(evt) {
	evt.preventDefault();
	const $this = $(this)
	const $item = $this.closest('.details')
	const $container = $item.children('.details__bottom')
	$this.toggleClass('active');
	$container.slideToggle('slow');

	setTimeout(()=>{
		$('.switcher__container').each(function (index, elem) {
			let number = 1920 / window.outerWidth
			let height = $(elem).find('.switcher__content.active').outerHeight()
			if (window.outerWidth <= 768) {
				number = 375 / window.outerWidth
				height = $(elem).find('.switcher__content.active').outerHeight()
			}
			let switcher_content_height = height * number;
			$(elem).css('height', `${switcher_content_height}rem`);
		});
	}, 700);
});

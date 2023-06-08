$('.sidebar-experts__link, .modal-experts .modal-box__close').on('click', function(evt) {
	evt.preventDefault();
	$('main').toggleClass('modal');
	$('html').toggleClass('modal');
	const $modal_box = $('.modal-experts')
	const $container = $modal_box.children('.modal-box__container')
	$modal_box.toggleClass('active');
	$container.slideToggle();
});

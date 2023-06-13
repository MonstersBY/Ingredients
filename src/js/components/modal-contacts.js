$('.btn-contacts, .modal-contacts .modal-box__close, .modal-contacts .btn__close').on('click', function(evt) {
	evt.preventDefault();
	$('main').toggleClass('modal');
	$('html').toggleClass('modal');
	const $modal_box = $('.modal-contacts')
	const $container = $modal_box.children('.modal-box__container')
	$modal_box.toggleClass('active');
	$container.slideToggle();
});

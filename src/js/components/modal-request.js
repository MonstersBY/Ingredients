$('.btn-price, .modal-price .modal-box__close, .modal-price .btn__close').on('click', function(evt) {
	evt.preventDefault();
	$('main').toggleClass('modal');
	$('html').toggleClass('modal');
	const $modal_box = $('.modal-price')
	const $container = $modal_box.children('.modal-box__container')
	$container.children('.modal-request-first').toggleClass('active');
	if($(this).hasClass('modal-box__close') || $(this).hasClass('btn__close')) {
		$container.children('.active').each(function(){
			$(this).toggleClass('active')
		})
	}
	$modal_box.toggleClass('active');
	$container.slideToggle();
});
$('.modal-request .btn-next').on('click', function(evt) {
	evt.preventDefault();
	const $this = $(this)
	const $container = $this.closest('.modal-box__container')
	$container.children('.modal-request-first').toggleClass('active');
	$container.children('.modal-request-second').toggleClass('active');
});
$('.modal-request .btn-last').on('click', function(evt) {
	evt.preventDefault();
	const $this = $(this)
	const $container = $this.closest('.modal-box__container')
	$container.children('.modal-request-second').toggleClass('active');
	$container.children('.modal-request-last').toggleClass('active');
});

$('.btn-doc, .modal-document .modal-box__close, .modal-document .btn__close').on('click', function(evt) {
	evt.preventDefault();
	$('main').toggleClass('modal');
	$('html').toggleClass('modal');
	const $modal_box = $('.modal-document')
	const $container = $modal_box.children('.modal-box__container')
	$container.children('.modal-request-first').toggleClass('active');
	if($(this).hasClass('modal-box__close') || $(this).hasClass('btn__close')) {
		$container.children('.active').each(function(){
			$(this).toggleClass('active')
		})
	}
	$modal_box.toggleClass('active');
	$container.slideToggle();
});

$('.btn-sample, .modal-sample .modal-box__close, .modal-sample .btn__close').on('click', function(evt) {
	evt.preventDefault();
	$('main').toggleClass('modal');
	$('html').toggleClass('modal');
	const $modal_box = $('.modal-sample')
	const $container = $modal_box.children('.modal-box__container')
	$container.children('.modal-request-first').toggleClass('active');
	if($(this).hasClass('modal-box__close') || $(this).hasClass('btn__close')) {
		$container.children('.active').each(function(){
			$(this).toggleClass('active')
		})
	}
	$modal_box.toggleClass('active');
	$container.slideToggle();
});

$('.btn-order, .modal-order .modal-box__close, .modal-order .btn__close').on('click', function(evt) {
	evt.preventDefault();
	$('main').toggleClass('modal');
	$('html').toggleClass('modal');
	const $modal_box = $('.modal-order')
	const $container = $modal_box.children('.modal-box__container')
	$container.children('.modal-request-first').toggleClass('active');
	if($(this).hasClass('modal-box__close') || $(this).hasClass('btn__close')) {
		$container.children('.active').each(function(){
			$(this).toggleClass('active')
		})
	}
	$modal_box.toggleClass('active');
	$container.slideToggle();
});


$('.btn-price-vendor, .modal-price-vendor .modal-box__close, .modal-price-vendor .btn__close').on('click', function(evt) {
	evt.preventDefault();
	$('main').toggleClass('modal');
	$('html').toggleClass('modal');
	const $modal_box = $('.modal-price-vendor')
	const $container = $modal_box.children('.modal-box__container')
	$container.children('.modal-request-list').toggleClass('active');
	if($(this).hasClass('modal-box__close') || $(this).hasClass('btn__close')) {
		$container.children('.active').each(function(){
			$(this).toggleClass('active')
		})
	}
	$modal_box.toggleClass('active');
	$container.slideToggle();
});

$('.modal-request .start-request').on('click', function(evt) {
	evt.preventDefault();
	const $this = $(this)
	const $container = $this.closest('.modal-box__container')
	$container.children('.modal-request-list').toggleClass('active');
	$container.children('.modal-request-first').toggleClass('active');
});

$('.btn-doc-vendor, .modal-document-vendor .modal-box__close, .modal-document-vendor .btn__close').on('click', function(evt) {
	evt.preventDefault();
	$('main').toggleClass('modal');
	$('html').toggleClass('modal');
	const $modal_box = $('.modal-document-vendor')
	const $container = $modal_box.children('.modal-box__container')
	$container.children('.modal-request-list').toggleClass('active');
	if($(this).hasClass('modal-box__close') || $(this).hasClass('btn__close')) {
		$container.children('.active').each(function(){
			$(this).toggleClass('active')
		})
	}
	$modal_box.toggleClass('active');
	$container.slideToggle();
});

$('.btn-sample-vendor, .modal-sample-vendor .modal-box__close, .modal-sample-vendor .btn__close').on('click', function(evt) {
	evt.preventDefault();
	$('main').toggleClass('modal');
	$('html').toggleClass('modal');
	const $modal_box = $('.modal-sample-vendor')
	const $container = $modal_box.children('.modal-box__container')
	$container.children('.modal-request-list').toggleClass('active');
	if($(this).hasClass('modal-box__close') || $(this).hasClass('btn__close')) {
		$container.children('.active').each(function(){
			$(this).toggleClass('active')
		})
	}
	$modal_box.toggleClass('active');
	$container.slideToggle();
});


//feedback-open

$('.feedback-open, .modal-feedback .modal-box__close, .modal-feedback .btn__close').on('click', function(evt) {
	evt.preventDefault();
	$('main').toggleClass('modal');
	$('html').toggleClass('modal');
	const $modal_box = $('.modal-feedback')
	const $container = $modal_box.children('.modal-box__container')
	$container.children('.modal-request-first').toggleClass('active');
	if($(this).hasClass('modal-box__close') || $(this).hasClass('btn__close')) {
		$container.children('.active').each(function(){
			$(this).toggleClass('active')
		})
	}
	$modal_box.toggleClass('active');
	$container.slideToggle();
});

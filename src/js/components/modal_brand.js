$('.brand__change, .brand__change-close').on('click', function(evt) {
	evt.preventDefault();
	$('main').toggleClass('modal');
	$('html').toggleClass('modal');
	const $modal_box = $('.brand__modal')
	const $container = $modal_box.children('.brand__change-box')
	$modal_box.toggleClass('active');
	$container.slideToggle();
});
$('.brand__add, .brand__add-close').on('click', function(evt) {
	evt.preventDefault();
	$('main').toggleClass('modal');
	$('html').toggleClass('modal');
	const $modal_box = $('.brand__modal')
	const $container = $modal_box.children('.brand__add-box')
	$modal_box.toggleClass('active');
	$container.slideToggle();
});
$('.brand__confirm-close').on('click', function(evt) {
	evt.preventDefault();
	$('main').toggleClass('modal');
	$('html').toggleClass('modal');
	const $modal_box = $('.brand__modal')
	const $container = $modal_box.children('.brand__confirm')
	$modal_box.toggleClass('active');
	$container.slideToggle();
});
$('.brand__consideration-close').on('click', function(evt) {
	evt.preventDefault();
	$('main').toggleClass('modal');
	$('html').toggleClass('modal');
	const $modal_box = $('.brand__modal')
	const $container = $modal_box.children('.brand__consideration')
	$modal_box.toggleClass('active');
	$container.slideToggle();
});
function confirm(check) {
	const $modal_box = $('.brand__modal')
	const $container = check ? $modal_box.children('.brand__change-box') : $modal_box.children('.brand__add-box')
	$container.slideToggle();
	const $confirm = $modal_box.children('.brand__confirm')
	$confirm.slideToggle();
}
function consideration() {
	const $modal_box = $('.brand__modal')
	const $confirm = $modal_box.children('.brand__confirm')
	$confirm.slideToggle();
	const $consideration = $modal_box.children('.brand__consideration')
	$consideration.slideToggle();
}
$('.form_next').on('submit', function(evt) {
	let $this = $(this);
	let $inputs = $this.find('.required');

	evt.preventDefault();
	$inputs.each(function(index, elem) {
		if ($(elem).val()) {
			$(elem).removeClass('invalid');
			confirm($this.parent('.brand__change-box').length)
		} else {
			$(elem).addClass('invalid');
		}
	});
});
$('.form_confirm').on('submit', function(evt) {
	evt.preventDefault();
	let $this = $(this);
	let $inputs = $this.find('.required');
	$inputs.each(function(index, elem) {
		if ($(elem).val()) {
			$(elem).removeClass('invalid');
			consideration();
		} else {
			$(elem).addClass('invalid');
		}
	});
});

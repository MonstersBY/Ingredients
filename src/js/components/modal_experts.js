$('.company-experts__add, .company-experts__close').on('click', function(evt) {
	evt.preventDefault();
	$('main').toggleClass('modal');
	$('html').toggleClass('modal');
	$('.company-experts__modal').toggleClass('active');
	$('.company-experts__modal-container').slideToggle();
});

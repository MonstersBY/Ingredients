$('.hamburger').on('click', function(evt) {
	evt.preventDefault();
	let $this = $(this);
	let $header = $('.header');
	let $drop = $('.header__bottom-mobile');

	$this.toggleClass('active');
	$header.toggleClass('active');
	$drop.slideToggle();
	$('li[class="active"]').each(function(){
		$(this).toggleClass('active')
		$(this).children('.drop').slideToggle();
	})

});
$('.drop__back').on('click', function(evt) {
	evt.preventDefault();

	let $this = $(this);
	let $this_drop =  $this.parent().parent()
	let $this_main =  $this.parent().parent().parent()

	$this_main.toggleClass('active');
	$this_drop.slideToggle();
});

$('.search_open-mobile, .search_close-mobile, .card_product-open-search').on('click', function(evt) {
	evt.preventDefault();
	let $header = $('.header');
	let $search_wrap = $header.find('.search_wrap-mobile');

	$search_wrap.slideToggle();
});

$('.icon-account, .header__account-exit').on('click', function(evt) {
	evt.preventDefault();
	let $this = $(this);
	let $header = $this.closest('.header');
	let $search_wrap = $header.find('.header__account');

	$search_wrap.slideToggle();
});

$('.card_product-open-review').on('click', function(evt) {
	evt.preventDefault();
	let $this = $(this);
	let $footer = $this.closest('.card_product-footer');
	let $sidebar = $footer.siblings('.sidebar');

	$sidebar.slideToggle();
});
$('.sidebar__exit').on('click', function(evt) {
	evt.preventDefault();
	let $this = $(this);
	let $footer = $this.closest('.sidebar');

	$footer.slideToggle();
});

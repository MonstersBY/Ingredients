$('.search_open, .search_close').on('click', function(evt) {
	evt.preventDefault();
	let $this = $(this);
	let $header = $this.closest('.header');
	let $search_wrap = $header.find('.search_wrap');
	$('.header-blur').toggleClass('active');

	$search_wrap.slideToggle();
});

$('.search__category-btn').on('click', function(evt) {
	evt.preventDefault();
	let $this = $(this);
	let $header = $this.closest('.header');
	let $search_container = $header.find('.search__category-container');
	let $search_wrapper = $header.find('.search__category-wrapper');
	$search_wrapper.toggleClass('active');
	$this.toggleClass('active');

	$search_container.slideToggle();
});
$('.search__category-wrapper').on('click', function(evt) {
	evt.preventDefault();
	if ($(evt.target).hasClass('search__category-wrapper')) {
		let $this = $(this);
		let $header = $this.closest('.header');
		let $search_btn = $header.find('.search__category-btn');
		let $search_container = $header.find('.search__category-container');
		let $search_wrapper = $header.find('.search__category-wrapper');
		$search_wrapper.toggleClass('active');
		$search_btn.toggleClass('active');

		$search_container.slideToggle();
	}
});

// baner
$('.banner__input').on('input', function(evt){
	$(this).val() ? $('.baner-search').addClass('active') : $('.baner-search').removeClass('active')
})

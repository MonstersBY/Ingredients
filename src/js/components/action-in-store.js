$('.action-in-store__item-top').on('click', function(evt) {
	evt.preventDefault();
	let $this = $(this);
	let $item = $this.closest('.action-in-store__item');
	let $bottom = $item.find('.action-in-store__item-bottom');

	$item.toggleClass('active');
	$bottom.slideToggle();
});

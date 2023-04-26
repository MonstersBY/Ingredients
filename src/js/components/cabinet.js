$('.item__drop_btn').on('click', function(evt) {
	evt.preventDefault();
	let $this = $(this);
	let $drop = $this.siblings('.item__drop');

	$this.toggleClass('active');
	$drop.slideToggle();

});
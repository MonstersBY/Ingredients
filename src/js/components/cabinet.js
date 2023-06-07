$('.item__drop_btn').on('click', function(evt) {
	evt.preventDefault();
	let $this = $(this);
	let $drop = $this.siblings('.item__drop');

	if($this.closest('.search__modal').length) {

		if (window.outerWidth <= 768) {
			if($drop.hasClass('range')) {
				$this.toggleClass('active');
				$drop.slideToggle();
			} else {
				$drop.toggleClass('active');
				$('.search__modal-bottom').toggleClass('active');
			}
		} else {
			$this.toggleClass('active');
			$drop.slideToggle();
		}

	} else {
		$this.toggleClass('active');
		$drop.slideToggle();
	}

});

$('.item__drop-top .item__drop_btn-back').on('click', function(evt) {
	evt.preventDefault();
	let $this = $(this);
	let $drop = $this.closest('.item__drop');

	$drop.toggleClass('active');
	$('.search__modal-bottom').toggleClass('active');
});

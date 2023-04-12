$('.displaying').on('click', function(evt) {
	evt.preventDefault();
	let $this = $(this);
	let $root = $this.closest('.section');
	if ($this.hasClass('displaying_tiles')) {
		$this.removeClass('displaying_tiles').addClass('displaying_list');
		$root.addClass('section_displaying_list');
	} else if ($this.hasClass('displaying_list')) {
		$this.removeClass('displaying_list').addClass('displaying_tiles');
		$root.removeClass('section_displaying_list');
	}
});
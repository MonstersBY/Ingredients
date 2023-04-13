$('.displaying').on('click', function (evt) {
	evt.preventDefault();
	let $this = $(this);
	let $root = $this.closest('.section');
	let $swipers = $root.find('.swiper');

	$swipers.each((index, element) => {
		element.swiper.destroy();
	});

	if ($this.hasClass('displaying_tiles')) {
		$this.removeClass('displaying_tiles').addClass('displaying_list');
		$root.addClass('section_displaying_list');
		Swiper_grid(1, 1, 5);
	} else if ($this.hasClass('displaying_list')) {
		$this.removeClass('displaying_list').addClass('displaying_tiles');
		$root.removeClass('section_displaying_list');
		Swiper_grid(4, 4, 3);
	}

	function swiperUpdate() {
		$swipers.each((index, element) => {
			element.swiper.update();
		});
	}

	setTimeout(swiperUpdate, 10);

});
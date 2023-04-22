let $switcher_btns = $('.switcher__btn');

let $switcher__containers = $('.switcher__container');

window.switcherContainerHeight = () => {
	$('.switcher__container').each(function(index, elem) {
		let switcher_content_height = $(elem).find('.switcher__content.active').outerHeight();	
		$(elem).css('height', `${switcher_content_height}rem`);
	});
}

switcherContainerHeight();




if ($switcher_btns.length > 0) {
	$switcher_btns.on('click', function(evt) {
		evt.preventDefault();
		let $this = $(this);
		let index = $this.index();
		let $switcher = $this.closest('.switcher');
		let $switcher_container = $switcher.find('.switcher__container');
		let $switcher_contents = $switcher_container.find('.switcher__content');
		let switcher_content_height = $($switcher_contents[index]).outerHeight();

		$this.siblings('.switcher__btn').removeClass('active');
		$this.toggleClass('active');

		$switcher_contents.each(function(index, elem) {
			$(elem).removeClass('active');

			let $invalid_inputs = $(elem).find('.invalid');
			if ($invalid_inputs.length) {
				$invalid_inputs.each(function(index, elem) {
					$(elem).removeClass('invalid');
				});
			}
		});

		$($switcher_contents[index]).addClass('active');

		$switcher_container.css('height', `${switcher_content_height}rem`);



		let $swiper_update = $this.closest('.section').find('.swiper');
		if ($swiper_update.length) {
			$swiper_update[index].swiper.slideTo(0,0,false);
		}
	});
}
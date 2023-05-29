$('.form__item input').on('input', function(evt) {
	let $this = $(this);
	let $parent = $this.parent();
	let $placeholder = $parent.find('.placeholder');

	$this.removeClass('invalid');

	if ($this.val()) {
		$placeholder.addClass('active');
	} else {
		$placeholder.removeClass('active');
	}
});
$('.form__item textarea').on('input', function(evt) {
	let $this = $(this);
	let $parent = $this.parent();
	let $placeholder = $parent.find('.placeholder');

	$this.removeClass('invalid');

	if ($this.val()) {
		$placeholder.addClass('active');
	} else {
		$placeholder.removeClass('active');
	}
});

$('.form_validation').on('submit', function(evt) {
	let $this = $(this);
	let $inputs = $this.find('.required');

	$inputs.each(function(index, elem) {
		if ($(elem).val()) {
			$(elem).removeClass('invalid');
		} else {
			$(elem).addClass('invalid');
			evt.preventDefault();
		}
	});
});
$('.textarea').on('keyup', function(evt) {
	let $this = $(this);
	if ($this.siblings('.count-text').length){
		$this.siblings('.count-text').children('span').text(`${$this.val().length}`)
	}
});

$('.product_validation').on('submit', function(evt) {
	evt.preventDefault();
	let $this = $(this);
	let $inputs = $this.find('.required');

	$inputs.each(function(index, elem) {
		if ($(elem).val()) {
			$(elem).removeClass('invalid');
		} else {
			$(elem).addClass('invalid');
		}
	});
});

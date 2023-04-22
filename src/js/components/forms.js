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
$('.tags__top').on('click', function(evt) {
	evt.preventDefault();
	let $this = $(this);
	let $tags = $this.closest('.tags');
	let $tags_bottom = $tags.find('.tags__bottom');

	$this.toggleClass('active');
	$tags_bottom.slideToggle();
});

$('.tags').each((index, elem) => {
	let $this = $(elem);
	let total_tags = $this.find('.tag').length;
	let $total_tags = $this.find('.total_tags');
	$total_tags.text(total_tags);
});

$('.tag input').on('change', function(evt) {
	let $this = $(this);
	let $tags = $this.closest('.tags');
	let $checked_tags = $tags.find('.checked_tags');
	let checked_tags = $tags.find('input:checked').length;
	$checked_tags.text(checked_tags);
})
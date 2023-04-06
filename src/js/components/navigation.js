$('.drop_btn').on('click', function(evt) {
	evt.preventDefault();

	let $this = $(this); // .drop_btn
	let $this_parent = $this.parent(); // .nav__item
	let $this_drop = $this.siblings('.drop');  // .drop_btn + .drop

	let $this_parent_siblings = $this_parent.siblings('.nav__item');  // .nav__item all
	let $this_siblings_drop = $this_parent_siblings.children('.drop'); // other .drops

	$this_parent_siblings.removeClass('active');

	$this_parent.toggleClass('active');

	$this_siblings_drop.slideUp();

	$this_drop.slideToggle();
});
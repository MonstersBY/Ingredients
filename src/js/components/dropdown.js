$('.dropdown_btn').on('click', function(evt) {
	$(this).parent('.dropdown').toggleClass('open');
});

$(document).on('click', function (evt) {
	if ($(evt.target).closest('.dropdown').length === 0) {
		$('.dropdown').removeClass('open');
	}
});
$(document).on('scroll', function() {
	if($('.sidebar__container').length) {
		if (!$('.sidebar-request').length) {
			var stickyMob = $('.sidebar__container');
			fixedH (stickyMob)
		}
	} else {
		var stickyMob = $('.sidebar');
		fixedH (stickyMob)
	}
});

function fixedH (item) {
	const sideHeight = item.height()
	const containerHeight = $('.sidebar').closest('.container').height()
	if ($(this).scrollTop() >= containerHeight-sideHeight) {
		item.removeClass('active')
		item.addClass('active__bottom')
	} else {
		item.removeClass('active__bottom')
		item.addClass('active')
	}
}

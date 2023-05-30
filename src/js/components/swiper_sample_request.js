const SLIDES_GAP = 20;
const CONTAINER_WIDTH = 1131;

const swiper_my_orders = new Swiper('.swiper_sample_request', {
	modules: [Navigation, Pagination, Grid],
	speed: 1000,
	grid: {
		rows: 4,
		fill: 'column'
	},
	spaceBetween: SLIDES_GAP / CONTAINER_WIDTH * 100 + '%',
	pagination: {
		el: ".swiper-pagination",
		type: "fraction",
	},
	navigation: {
		nextEl: ".swiper-button-next",
		prevEl: ".swiper-button-prev",
	},
});

// $('.my_sample_request .switcher__btn').on('click', function(evt) {
// 	evt.preventDefault();
// 	console.log(123)

// 	let $this = $(this);
// 	let $section = $this.closest('.section');
// 	let $messages = $section.find('.swiper_shadow');
// 	switch($this.attr('class').split(' ')[2]) {
// 		case 'all_btn':
// 			$messages.removeClass();
// 			break;
// 		case 'new_btn':
// 			$messages.removeClass();
// 			$messages.addClass('new_only');
// 			break;
// 		case 'delivered_btn':
// 			$messages.removeClass();
// 			$messages.addClass('delivered_only');
// 			break;
// 		case 'denied_btn':
// 			$messages.removeClass();
// 			$messages.addClass('denied_only');
// 			break;
// 	}
// 	$messages.addClass('swiper_shadow');
// 	// if ($this.hasClass('new_btn')) {
// 	// 	$messages.addClass('new_only');
// 	// } else {
// 	// 	$messages.removeClass('new_only');
// 	// }
// 	swiper_my_orders.update()
// });

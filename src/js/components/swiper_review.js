const swiper_review = new Swiper('.swiper_review', {
	modules: [Navigation, Pagination],
	slidesPerView: 1,
	speed: 1000,
	pagination: {
		el: ".swiper-pagination",
		type: "fraction",
	},
	navigation: {
		nextEl: ".swiper-button-next",
		prevEl: ".swiper-button-prev",
	},
});
// ChangeHeight()
// function ChangeHeight() {
// 	if ($('.swiper_review').length) {
// 		const $wrapper = $('.swiper_review').children('.swiper-wrapper')
// 		let count = 0
// 		const gap = 28
// 		for (let i = 0; i < 2; i++) {
// 			if (i)  count += gap
// 			count += $wrapper.children('.swiper-slide')[0].scrollHeight
// 		}
// 		console.log (count)
// 		$wrapper.css("height", `${count}rem`);
// 	}
// }

$('.swiper_review .product-review__open').on('click', function(evt){
	evt.preventDefault();
	let $this = $(this);
	let $slide = $this.closest('.slide');
	let $wrapper = $this.closest('.swiper-wrapper');
	const height = $wrapper[0].scrollHeight
	if($slide.children('.product-review__answer').hasClass('active')) {
		$wrapper.find('.active').slideToggle()
		$wrapper.find('.active').toggleClass('active')
	} else {
		if($wrapper.find('.active').length) {
			$wrapper.find('.active').slideToggle()
			$wrapper.find('.active').toggleClass('active')
		}
		$slide.children('.product-review__answer').toggleClass('active');
		$slide.children('.product-review__answer').slideToggle();
	}
})


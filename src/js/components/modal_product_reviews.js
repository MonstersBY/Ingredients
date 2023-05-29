$('.product_reviews__answer, .product_reviews__close').on('click', function(evt) {
	evt.preventDefault();
	$('main').toggleClass('modal');
	$('html').toggleClass('modal');
	const $modal_box = $('.product_reviews__modal')
	const $container = $modal_box.children('.modal-box__container')
	$modal_box.toggleClass('active');
	$container.slideToggle();

	if($modal_box.hasClass('active')) {
		const $this = $(this)
		const $newBox = $('.product_reviews__modal-item')
		$newBox.empty()
		const $column =  $this.parent('.product_reviews__column')
		const $container = $column.parent('.product_reviews__container')
		const $item = $container.parent('.product_reviews__item')
		firstElem = document.createElement('div');
		firstElem.classList.add('first_elements');
		$container.children('.product_reviews__title').clone().appendTo(firstElem)
		$container.children('.product_reviews__vendor-code').clone().appendTo(firstElem)
		$column.children('.product_reviews__info').clone().appendTo(firstElem)
		secondElem = document.createElement('div');
		span = document.createElement('span')
		span.innerText = 'Отзыв:'
		secondElem.classList.add('second_elements');
		secondElem.append(span)
		$container.children('.product_reviews__text').clone().appendTo(secondElem)
		$container.children('.product_reviews__vendor-code').clone().appendTo(secondElem)
		$column.children('.product_reviews__info').clone().appendTo(secondElem)
		$item.children('.product_reviews__img').clone().appendTo($newBox)
		$newBox.append(firstElem, secondElem)
		console.log(123)
	}
});

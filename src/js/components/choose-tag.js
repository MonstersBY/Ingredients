$('.choose-tag .form__item').on('click', function(e){
	e.preventDefault();
	let $this = $(this);
	let $menu = $this.parent('.choose-tag');
	let $box = $menu.children('.choose-tag__box')
	if (!$menu.hasClass('open')) {
		$menu.addClass('open')
		$box.slideToggle();
	}
})
$('.choose-tag input[type=text]').on('keyup', function(e){
	e.preventDefault();
	const value = $(this).val().toLowerCase();
	const $container = $(this).parent().parent('.choose-tag')
	const $list = $container.children('.choose-tag__box').children('.choose-tag__container').children('.choose-tag__item')
	$list.filter(function() {
		$(this).toggle($(this).text().toLowerCase().indexOf(value) > -1)
	});
})

$('body').on("click", function (e) {
	$('.choose-tag').each(function() {
		const $menu = $(this)
		let $box = $menu.children('.choose-tag__box')
		if($menu !== e.target && !$menu.has(e.target).length) {
			if ($menu.hasClass('open')) {
				$menu.removeClass('open')
				$box.slideToggle();
			}
		}
	})
});

$('.choose-tag input').on('change', function (e){
	let $this = $(this);
	let $container = $this.parent('.choose-tag__item');
	let $box = $container.parent().parent('.choose-tag__box');
	$container.toggleClass('checked')
	createTags ($box)

})

function createTags ($box) {
	let progressElements = $box.next();
	if (progressElements) {
		progressElements.remove();
	}
	if ($box.children().children('.checked').length) {
		progressElements = document.createElement('div');
		progressElements.classList.add('progress_elements');
		$box.after(progressElements);
		$box.children().children('.checked').each(function() {
			let progressElement = document.createElement('div');
			progressElement.innerHTML = $(this).text()
			const input = $(this)
			progressElements.appendChild(progressElement);
			progressElement.addEventListener('click', ()=> {
				input.children('input').prop('checked', false);
				input.toggleClass('checked')
				createTags ($box)
			})
		})
	}
}

$('.all-filter').on('click', function(evt) {
	evt.preventDefault();
	let $this = $(this);
	let $drop = $('.search__modal');

	$this.toggleClass('active');
	$drop.slideToggle();

});

$('.search__modal-exit').on('click', function(evt) {
	evt.preventDefault();
	let $all = $('.all-filter');
	let $drop = $('.search__modal');

	$all.toggleClass('active');
	$drop.slideToggle();

});

$('.search__modal-apply').on('click', function(evt) {
	evt.preventDefault();
	let $all = $('.all-filter');
	let $drop = $('.search__modal');

	$all.toggleClass('active');
	$drop.slideToggle();
	$('.filter__tags-wrap').empty()
	$('input[type="checkbox"]:checked').each(function(){
		let $checked = $(this).siblings('span').text();
		$('.filter__tags-wrap').append(
			$(`<div class='tag'><span>${$checked}</span></div>`).click(function(){
				$(this).remove()
				if ( $('.filter__tags-wrap').children().length == 1 ) $('.filter__tags-wrap').empty()
			})
		)
	})
	if ( $('.filter__tags-wrap').children().length > 0 ) {
		$('.filter__tags-wrap').append(
			$(`<div class='tag clean-all'><span>Очистить все</span></div>`).click(function(){
				$('.filter__tags-wrap').empty()
			})
		)
   	}
});

$('.search__modal-clean').on('click', function(evt) {
	evt.preventDefault();

	$('.filter__tags-wrap').empty()
	$('input[type="checkbox"]:checked').each(function(){
		$(this).prop( "checked", false );
	})

});

$('input[type="range"]').on( 'input', function() {
	const minBtn = $(this).parent().children('.min')
	const maxBtn = $(this).parent().children('.max')
	const origin = this.className
	let minVal = parseInt($(minBtn).val())
	let maxVal = parseInt($(maxBtn).val())
	if(origin === 'min' && minVal > maxVal-1){
		$(minBtn).val(maxVal-1);
	}
	minVal = parseInt($(minBtn).val());
	$('.range-number-min').children('span').html(minVal + 'шт');
	if(origin === 'max' && maxVal-1 < minVal){
		$(maxBtn).val(1 + minVal);
	}
	maxVal = parseInt($(maxBtn).val());
	$('.range-number-max').children('span').html(maxVal + 'шт');
});

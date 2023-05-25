$('.head-search-input').on('input', function(evt){

	let $this = $(this);
	let $section = $this.closest('.head-search');
	let $search = $section.find('.head-search-help');
	$(this).val() ? $search.addClass('active') : $search.removeClass('active')
})

$('.head-search-input-mobile').on('input', function(evt){
	if ($(this).val()){
		$('.search__by-word').addClass('active')
		$('.search__wait').addClass('active')
	} else {
		$('.search__by-word').removeClass('active')
		$('.search__wait').removeClass('active')
	}
})

$('.head-search-input').on('input', function(evt){
	$(this).val() ? $('.head-search-help').addClass('active') : $('.head-search-help').removeClass('active')
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

$('.head-search-input').on('input', function(evt){
	$(this).val() ? $('.head-search-help').addClass('active') : $('.head-search-help').removeClass('active')
})

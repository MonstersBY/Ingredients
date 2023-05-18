$('.form__item input').on('input', function(evt) {
	let $this = $(this);
	let $parent = $this.parent();
	let $placeholder = $parent.find('.placeholder');

	$this.removeClass('invalid');

	if ($this.val()) {
		$placeholder.addClass('active');
	} else {
		$placeholder.removeClass('active');
	}
});

$('.form_validation').on('submit', function(evt) {
	let $this = $(this);
	let $inputs = $this.find('.required');

	$inputs.each(function(index, elem) {
		if ($(elem).val()) {
			$(elem).removeClass('invalid');
		} else {
			$(elem).addClass('invalid');
			evt.preventDefault();
		}
	});
});

const select = document.querySelectorAll('.select-department')
let selectedArr = []

select.forEach((btn)=>{
	btn.addEventListener('click', (evt)=>{
		const target = evt.target.closest('.option')
		if (!target) return
		if (btn.querySelector('.current').innerText == target.innerText) return
		const div = document.createElement('div')
		div.classList.add('selected-dep')
		if(selectedArr.find((i) => i === target.innerText)) return
		selectedArr.push(target.innerText)
		div.innerHTML = target.innerText
		div.addEventListener('click', (divEvt) => {
			div.remove()
			selectedArr = selectedArr.filter((i) => {return i !== target.innerText})
		})
		btn.nextSibling.nextSibling.append(div);
	})
})

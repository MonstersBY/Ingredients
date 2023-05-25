let $switcher_btns = $('.switcher__btn');

let $switcher__containers = $('.switcher__container');

window.switcherContainerHeight = () => {
	$('.switcher__container').each(function (index, elem) {
		console.log($(elem).find('.switcher__content.active').outerHeight())
		console.log($(elem).find('.switcher__content.active').innerHeight())
		let number = 1920 / window.outerWidth
		if (window.outerWidth <= 768) number = 375 / window.outerWidth
		let switcher_content_height = $(elem).find('.switcher__content.active').outerHeight() * number;
		$(elem).css('height', `${switcher_content_height}rem`);
	});
}

switcherContainerHeight();

if ($switcher_btns.length > 0) {
	$switcher_btns.on('click', function (evt) {
		evt.preventDefault();
		let $this = $(this);
		let index = $this.index();
		let $switcher = $this.closest('.switcher');
		let $switcher_container = $switcher.find('.switcher__container');
		let $switcher_contents = $switcher_container.find('.switcher__content');
		let number = 1920 / window.outerWidth
		if (window.outerWidth <= 768) number = 375 / window.outerWidth
		let switcher_content_height = $($switcher_contents[index]).outerHeight() * number;

		$this.siblings('.switcher__btn').removeClass('active');
		$this.addClass('active');

		$switcher_contents.each(function (index, elem) {
			$(elem).removeClass('active');

			let $invalid_inputs = $(elem).find('.invalid');
			if ($invalid_inputs.length) {
				$invalid_inputs.each(function (index, elem) {
					$(elem).removeClass('invalid');
				});
			}
		});

		$($switcher_contents[index]).addClass('active');

		$switcher_container.css('height', `${switcher_content_height}rem`);

		let $swiper_update = $this.closest('.section').find('.swiper');
		if ($swiper_update.length[index]) {
			$swiper_update[index].swiper.slideTo(0, 0, false);
		}
	});
}



document.querySelectorAll('.drop-zone__input').forEach((inputElement) => {
	const dropZoneElement = inputElement.closest('.drop-zone');

	dropZoneElement.addEventListener('click', (e) => {
		inputElement.click();
	});

	inputElement.addEventListener('change', (e) => {
		if (inputElement.files.length) {
			updateProgress(dropZoneElement, inputElement.files);
		}
	});

	dropZoneElement.addEventListener('dragover', (e) => {
		e.preventDefault();
		dropZoneElement.classList.add('drop-zone--over');
	});

	['dragleave', 'dragend'].forEach((type) => {
		dropZoneElement.addEventListener(type, (e) => {
			dropZoneElement.classList.remove('drop-zone--over');
		});
	});

	dropZoneElement.addEventListener('drop', (e) => {
		e.preventDefault();

		if (e.dataTransfer.files.length) {
			inputElement.files = e.dataTransfer.files;
			updateProgress(dropZoneElement, e.dataTransfer.files);
		}

		dropZoneElement.classList.remove('drop-zone--over');
	});
});


function updateProgress(dropZoneElement, files) {
	let progressElements = dropZoneElement.nextElementSibling;

	// First time - remove the prompt
	if (progressElements) {
		progressElements.remove();
	}

	progressElements = document.createElement('div');
	progressElements.classList.add('progress_elements');
	dropZoneElement.after(progressElements);

	let progressElement = document.createElement('div');
	progressElement.classList.add('file__progress');

	let fileNameElement = document.createElement('div');
	fileNameElement.classList.add('file__name');
	fileNameElement.innerHTML = files[0].name;

	let fileWeightElement = document.createElement('div');
	fileWeightElement.classList.add('file__weight');
	fileWeightElement.innerHTML = Math.trunc(files[0].size / 1024) + ' kb';

	let fileIconElement = document.createElement('div');
	fileIconElement.classList.add('file__icon');

	progressElement.append(fileNameElement, fileWeightElement, fileIconElement);
	progressElements.appendChild(progressElement);

	// files.forEach((elem) => {
	// 	let progressElement = document.createElement('div');
	// 	progressElement.classList.add('file__progress');

	// 	let fileNameElement = document.createElement('div');
	// 	fileNameElement.classList.add('file__name');
	// 	fileNameElement.innerHTML = elem.name;

	// 	let fileWeightElement = document.createElement('div');
	// 	fileWeightElement.classList.add('file__weight');
	// 	fileWeightElement.innerHTML = Math.trunc(elem.size / 1024) + ' kb';

	// 	let fileIconElement = document.createElement('div');
	// 	fileIconElement.classList.add('file__icon');

	// 	progressElement.append(fileNameElement, fileWeightElement, fileIconElement);
	// 	progressElements.appendChild(progressElement);

	// });


	switcherContainerHeight();

}



$('.section_messages .switcher__btn').on('click', function(evt) {
	evt.preventDefault();

	let $this = $(this);
	let $section = $this.closest('.section');
	let $messages = $section.find('.messages');
	if ($this.hasClass('all_messages')) {
		$messages.removeClass('unread_only');
	} else {
		$messages.addClass('unread_only');
	}
});

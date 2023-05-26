let $switcher_btns = $('.switcher__btn');

let $switcher__containers = $('.switcher__container');

window.switcherContainerHeight = () => {
	$('.switcher__container').each(function (index, elem) {
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

document.querySelectorAll('.photo__zone-input').forEach((inputElement) => {
	const dropZoneElement = inputElement.closest('.photo__zone');

	dropZoneElement.addEventListener('click', (e) => {
		inputElement.click();
	});
	const validImageTypes = ['image/jpeg', 'image/png'];
	inputElement.addEventListener('change', (e) => {
		const fileType = inputElement.files[0]["type"];
		if (inputElement.files.length && validImageTypes.includes(fileType)) {
			addPhoto(dropZoneElement, inputElement.files)
		}
	});

	dropZoneElement.addEventListener('dragover', (e) => {
		e.preventDefault();
	});

	dropZoneElement.addEventListener('drop', (e) => {
		e.preventDefault();
		const fileType = e.dataTransfer.files[0]["type"];
		if (e.dataTransfer.files.length && validImageTypes.includes(fileType)) {
			inputElement.files = e.dataTransfer.files;
			addPhoto(dropZoneElement, inputElement.files)
		}
	});
});

function addPhoto(dropZoneElement, files) {
	let progressElements = dropZoneElement.nextElementSibling;

	// First time - remove the prompt
	if (progressElements) {
		progressElements.remove();
	}

	progressElements = document.createElement('div');
	progressElements.classList.add('progress_elements');
	dropZoneElement.after(progressElements);

	let progressElement = document.createElement('div');
	progressElement.classList.add('photo__show');

	let deleteElement = document.createElement('div');
	deleteElement.classList.add('photo__delete');

	let mainElement = document.createElement('div');
	mainElement.classList.add('photo__main');
	mainElement.innerText = 'главная'

	let fileImgElement = document.createElement('img');
	fileImgElement.src = URL.createObjectURL(files[0]);

	progressElement.append(fileImgElement, mainElement, deleteElement);
	progressElements.appendChild(progressElement);
	deleteElement.addEventListener('click', () =>{
		progressElements.remove();
	})
}

function updateProgress(dropZoneElement, files) {
	let progressElements = dropZoneElement.nextElementSibling;

	// First time - remove the prompt
	if (progressElements) {
		progressElements.remove();
	}

	progressElements = document.createElement('div');
	progressElements.classList.add('progress_elements');
	dropZoneElement.after(progressElements);

	Array.from(files).forEach((elem) => {
		let progressElement = document.createElement('div');
		progressElement.classList.add('file__progress');

		let fileNameElement = document.createElement('div');
		fileNameElement.classList.add('file__name');
		fileNameElement.innerHTML = elem.name;

		let fileWeightElement = document.createElement('div');
		fileWeightElement.classList.add('file__weight');
		fileWeightElement.innerHTML = Math.trunc(elem.size / 1024) + ' kb';

		let fileIconElement = document.createElement('div');
		fileIconElement.classList.add('file__icon');

		progressElement.append(fileNameElement, fileWeightElement, fileIconElement);
		progressElements.appendChild(progressElement);
	});


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

let $switcher_btns = $('.switcher__btn');

let $switcher__containers = $('.switcher__container');

window.switcherContainerHeight = () => {
	$('.switcher__container').each(function (index, elem) {
		let switcher_content_height = $(elem).find('.switcher__content.active').outerHeight();
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
		let switcher_content_height = $($switcher_contents[index]).outerHeight();

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
		if ($swiper_update.length) {
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
			updateThumbnail(dropZoneElement, inputElement.files);
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
			updateThumbnail(dropZoneElement, e.dataTransfer.files);
		}

		dropZoneElement.classList.remove('drop-zone--over');
	});
});

/**
 * Updates the thumbnail on a drop zone element.
 *
 * @param {HTMLElement} dropZoneElement
 * @param {Files} files
 */
function updateThumbnail(dropZoneElement, files) {
	let thumbnailElements = dropZoneElement.querySelector('.drop-zone__thumb');
	let progressElement = dropZoneElement.nextElementSibling;
	let fileNameElement = progressElement.querySelector('.file__name');
	let fileWeightElement = progressElement.querySelector('.file__weight');

	// First time - remove the prompt
	if (dropZoneElement.querySelector('.drop-zone__prompt')) {
		dropZoneElement.querySelector('.drop-zone__prompt').remove();
	}

	// First time - there is no thumbnail element, so lets create it
	if (!thumbnailElement) {
		thumbnailElement = document.createElement('div');
		thumbnailElement.classList.add('drop-zone__thumb');
		dropZoneElement.appendChild(thumbnailElement);
	}

	thumbnailElement.dataset.label = file.name;
	fileNameElement.innerHTML = file.name;
	fileWeightElement.innerHTML = Math.trunc(file.size / 1024) + ' kb';

	console.log(file);

	// Show thumbnail for image files
	if (file.type.startsWith('image/')) {
		const reader = new FileReader();

		reader.readAsDataURL(file);
		reader.onload = () => {
			thumbnailElement.style.backgroundImage = `url('${reader.result}')`;
		};
	} else {
		thumbnailElement.style.backgroundImage = null;
	}
}

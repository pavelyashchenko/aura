// Accordion tabs
const Accordion = () => {
	const panelTitle = $('.accordion__title');
	const visibilityMode = 'single';
	const isInitialized = 'init';
	const transitionTime = 170;

	if (isInitialized === 'init') {
		function hidePanels() {
			const activeTitles = panelTitle.filter(function () {
				return $(this).attr('aria-selected') === 'true';
			});

			$.each(activeTitles, function () {
				$(this).attr('aria-selected', 'false');
				$(this).attr('aria-expanded', 'false');
				$(this).parent().removeClass('is-active');
				$(this).next().slideUp(transitionTime);
			});
		}

		// Expand or collapse panels
		$.each(panelTitle, function () {
			const isOpen = $(this).attr('aria-selected');

			if (isOpen === 'true') {
				$(this).next().slideDown(transitionTime);
			} else {
				$(this).next().slideUp(transitionTime);
			}
		});

		if (visibilityMode === 'single') {
			panelTitle.on('click keydown', function () {
				const title = $(this);
				const panel = $(this).next();
				panelTitle.removeAttr('style');

				if (event.type === 'click') {
					$(this).css('outline', 'none');
				}

				if (event.which !== 9 || event.keyCode !== 9) {
					event.preventDefault();
				}

				if (
					event.which === 13 ||
					event.keyCode === 13 ||
					event.type === 'click'
				) {
					if (panel.length) {
						if (panel.is(':visible')) {
							$.each(panelTitle, function () {
								hidePanels();
								$(this).parent().removeClass('is-active');
							});
						} else {
							hidePanels();
							title.attr('aria-selected', 'true');
							title.attr('aria-expanded', 'true');
							panel.slideDown(transitionTime);
							$(this).parent().addClass('is-active');
							$(panel).focus();
							$(panel).attr('tabindex', '0');
						}
					}
				}
			});
		} else if (visibilityMode === 'multiply') {
			panelTitle.on('click', function () {
				const panel = $(this).next();

				if (panel.length) {
					panel.slideDown(transitionTime);
				} else {
					panel.slideUp(transitionTime);
				}
			});
		}
	} else {
		$(panelTitle).unbind('click');
	}
};

// Lottie anim
const grayArow = () => {
	bodymovin.loadAnimation({
		container: document.querySelector('#gray-arrow'),
		renderer: 'svg',
		loop: true,
		autoplay: true,
		path: 'scripts/animations/gray-line.json',
	});

	bodymovin.loadAnimation({
		container: document.querySelector('#percent1'),
		renderer: 'svg',
		loop: true,
		autoplay: true,
		path: 'scripts/animations/100_2_gray_line.json',
	});
};

const greenArrow = () => {
	bodymovin.loadAnimation({
		container: document.querySelector('#green-arrow'),
		renderer: 'svg',
		loop: true,
		autoplay: true,
		path: 'scripts/animations/green-line.json',
	});

	bodymovin.loadAnimation({
		container: document.querySelector('#percent2'),
		renderer: 'svg',
		loop: true,
		autoplay: true,
		path: 'scripts/animations/100_1_green_line.json',
	});
};

const yellowArrowFirst = () => {
	bodymovin.loadAnimation({
		container: document.querySelector('#yellow-arrow1'),
		renderer: 'svg',
		loop: true,
		autoplay: true,
		path: 'scripts/animations/yellow-line1.json',
	});

	bodymovin.loadAnimation({
		container: document.querySelector('#percent3'),
		renderer: 'svg',
		loop: true,
		autoplay: true,
		path: 'scripts/animations/200_1_yellow_line.json',
	});
};

const yellowArrowSecond = () => {
	bodymovin.loadAnimation({
		container: document.querySelector('#yellow-arrow2'),
		renderer: 'svg',
		loop: true,
		autoplay: true,
		path: 'scripts/animations/yellow-line2.json',
	});

	bodymovin.loadAnimation({
		container: document.querySelector('#percent4'),
		renderer: 'svg',
		loop: true,
		autoplay: true,
		path: 'scripts/animations/200_2_yellow_line.json',
	});
};

// Modal FAQ Link
const modalFaqLink = () => {
	$('#modal-link-faq').on('click', function () {
		$('html, body').animate({
			scrollTop: $('#faq').offset().top,
		});

		$('.modal').iziModal('close');
	});
};

// FAQ Show more button
const showMoreFaq = () => {
	$('.faq__button-learn-more').on('click', function () {
    $('.faq__hidden-blocks').slideToggle(300);
    $(this).toggleClass('is-active');

    if ($(this).hasClass('is-active')) {
      $(this).text('Show less')
    } else {
      $(this).text('Learn more')
    }
	});
};

(function () {
	var swiper = new Swiper('#price-blocks', {
		direction: 'horizontal',
		slidesPerView: 5,
		spaceBetween: 30,
		freeMode: true,
		mousewheel: false,
		scrollbar: {
			el: '.swiper-scrollbar',
			hide: false,
		},
	});

	var swiper2 = new Swiper('#mobile-price-blocks', {
		slidesPerView: 1.5,
		spaceBetween: 30,
		navigation: {
			nextEl: '.swiper-button-next',
			prevEl: '.swiper-button-prev',
		},
		breakpoints: {
			425: {
				slidesPerView: 2,
			},
			640: {
				slidesPerView: 3,
			},
			768: {
				slidesPerView: 4,
			},
		},
	});

	Accordion();
	setTimeout(function () {
		grayArow();
		greenArrow();
		yellowArrowFirst();
		yellowArrowSecond();
	}, 1700);
	modalFaqLink();
	showMoreFaq();

  var parallaxInstance = new Parallax(parallax);
})();

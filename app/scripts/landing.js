// Accordion tabs
const Accordion = () => {
  const panelTitle = $(".accordion__title");
  const visibilityMode = "single";
  const isInitialized = "init";
  const transitionTime = 170;

  if (isInitialized === "init") {
    function hidePanels() {
      const activeTitles = panelTitle.filter(function() {
        return $(this).attr("aria-selected") === "true";
      });

      $.each(activeTitles, function() {
        $(this).attr("aria-selected", "false");
        $(this).attr("aria-expanded", "false");
        $(this).parent().removeClass("is-active");
        $(this)
          .next()
          .slideUp(transitionTime);
      });
    }

    // Expand or collapse panels
    $.each(panelTitle, function() {
      const isOpen = $(this).attr("aria-selected");

      if (isOpen === "true") {
        $(this)
          .next()
          .slideDown(transitionTime);
      } else {
        $(this)
          .next()
          .slideUp(transitionTime);
      }
    });

    if (visibilityMode === "single") {
      panelTitle.on("click keydown", function() {
        const title = $(this);
        const panel = $(this).next();
        panelTitle.removeAttr('style');

        if (event.type === "click") {
          $(this).css("outline", "none");
        }

        if (event.which !== 9 || event.keyCode !== 9) {
          event.preventDefault();
        }

        if (event.which === 13 || event.keyCode === 13 || event.type === "click") {
          if (panel.length) {
            if (panel.is(":visible")) {
              $.each(panelTitle, function() {
                hidePanels();
                $(this).parent().removeClass("is-active");
              });
            } else {
              hidePanels();
              title.attr("aria-selected", "true");
              title.attr("aria-expanded", "true");
              panel.slideDown(transitionTime);
              $(this).parent().addClass("is-active");
              $(panel).focus();
              $(panel).attr("tabindex", "0")
            }
          }
        }
      });
    } else if (visibilityMode === "multiply") {
      panelTitle.on("click", function() {
        const panel = $(this).next();

        if (panel.length) {
          panel.slideDown(transitionTime);
        } else {
          panel.slideUp(transitionTime);
        }
      });
    }
  } else {
    $(panelTitle).unbind("click");
  }
}

// Lottie anim
const grayArow = () => {
  bodymovin.loadAnimation({
    container: document.querySelector('#gray-arrow'),
    renderer: 'svg',
    loop: true,
    autoplay: true,
    path: 'scripts/animations/gray-line.json'
  })
}

const greenArrow = () => {
  bodymovin.loadAnimation({
    container: document.querySelector('#green-arrow'),
    renderer: 'svg',
    loop: true,
    autoplay: true,
    path: 'scripts/animations/green-line.json'
  })
}

const yellowArrowFirst = () => {
  bodymovin.loadAnimation({
    container: document.querySelector('#yellow-arrow1'),
    renderer: 'svg',
    loop: true,
    autoplay: true,
    path: 'scripts/animations/yellow-line1.json'
  })
}

const yellowArrowSecond = () => {
  bodymovin.loadAnimation({
    container: document.querySelector('#yellow-arrow2'),
    renderer: 'svg',
    loop: true,
    autoplay: true,
    path: 'scripts/animations/yellow-line2.json'
  })
}


(function() {
  var swiper = new Swiper(".carousel-price-blocks", {
    slidesPerView: 1,
    spaceBetween: 30,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev"
    },
    breakpoints: {
      425: {
        slidesPerView: 2
      },
      640: {
        slidesPerView: 3
      },
      768: {
        slidesPerView: 4
      }
    }
  });

  setTimeout(function (){
    grayArow();
  }, 1700);
  setTimeout(function (){
    greenArrow();
  }, 1700);
  setTimeout(function (){
    yellowArrowFirst();
  }, 1700);
  setTimeout(function (){
    yellowArrowSecond();
  }, 1700);
  Accordion();
})();

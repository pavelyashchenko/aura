(function () {
  // Smoke animation
  var canvas = document.getElementById('canvas')
  var ctx = canvas.getContext('2d')
  canvas.width = innerWidth
  canvas.height = innerHeight

  var party = smokemachine(ctx, [4, 192, 172])
  party.start() // start animating
  party.setPreDrawCallback(function(dt){
    party.addSmoke(innerWidth/2, innerHeight, 1)
  })


  // Accordion tabs
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

  // $(".accordion__title").on("click", function(){
  //   $(this).parent().toggleClass("is-active");
  // })
})();

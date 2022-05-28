(function () {
  // Fixed header
  (function fixedHeader() {
    $(window).scroll(function(){
      if ($(this).scrollTop() > 50) {
        $(".header__desktop, .header__mobile").addClass("is-fixed")
      } else {
        $(".header__desktop, .header__mobile").removeClass("is-fixed")
      }
    });
  })();

  // Burger menu mobile
  (function mobileMenu() {
    $(".header__burger-button .plates").on("click", function() {
      $(".header__mobile").toggleClass("is-active");
      $("body").toggleClass("scroll-block");
    });
  })();

  // Scripts init
	new WOW().init();
  $(".modal").iziModal({
    transitionIn: 'fadeInDown',
    bodyOverflow: true
  });
})();
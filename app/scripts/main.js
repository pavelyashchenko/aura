(function () {
  (function fixedHeader() {
    $(window).scroll(function(){
      if ($(this).scrollTop() > 50) {
        $(".header__desktop, .header__mobile").addClass("is-fixed")
      } else {
        $(".header__desktop, .header__mobile").removeClass("is-fixed")
      }
    });
  })();

  (function mobileMenu() {
    $(".header__burger-button").on("click", function() {
      $(".header__mobile").toggleClass("is-active");
      $("body").toggleClass("scroll-block");
    });
  })();

	new WOW().init();
})();



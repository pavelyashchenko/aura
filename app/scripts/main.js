(function () {
	$(window).scroll(function(){
    if ($(this).scrollTop() > 50) {
      $(".header").addClass("is-fixed")
    } else {
      $(".header").removeClass("is-fixed")
    }
  });

  (function mobileMenu() {
    $(".header__burger-button").on("click", function() {
      $(".header__mobile").toggleClass("is-active");
      $("body").toggleClass("scroll-block");
    });
  })();

	new WOW().init();
})();
//\\//\\//\\//\\ End jQuery //\\//\\//\\//\\



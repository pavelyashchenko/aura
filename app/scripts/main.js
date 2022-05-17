(function () {
	$(window).scroll(function(){
    if ($(this).scrollTop() > 50) {
      $(".header").addClass("is-fixed")
    } else {
      $(".header").removeClass("is-fixed")
    }
  });

	new WOW().init();
})();
//\\//\\//\\//\\ End jQuery //\\//\\//\\//\\



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


var canvas = document.getElementById('canvas')
var ctx = canvas.getContext('2d')
canvas.width = innerWidth
canvas.height = innerHeight

var party = smokemachine(ctx, [4, 192, 172])
party.start() // start animating
party.setPreDrawCallback(function(dt){
	party.addSmoke(innerWidth/2, innerHeight, 1)
})
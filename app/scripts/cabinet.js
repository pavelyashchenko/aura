(function() {
  // SLiders
  var swiper = new Swiper(".carousel-cabinet-blocks", {
    direction: "horizontal",
    slidesPerView: "auto",
    spaceBetween: 15,
    grabCursor: true,
    freeMode: true,
    mousewheel: false,
    watchSlidesProgress: true,
    scrollbar: {
      el: ".swiper-scrollbar",
      hide: false,
      draggable: true
    }
  });
})();
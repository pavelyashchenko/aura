(function() {
  // SLiders
  var swiper = new Swiper(".carousel-cabinet-blocks", {
    direction: "horizontal",
    slidesPerView: 2,
    spaceBetween: 30,
    grabCursor: true,
    freeMode: true,
    mousewheel: true,
    scrollbar: {
      el: ".swiper-scrollbar",
      hide: false,
    },
    breakpoints: {
      425: {
        slidesPerView: 3
      },
      640: {
        slidesPerView: 4
      },
      915: {
        slidesPerView: 5
      },
      916: {
        slidesPerView: 4
      }
    }
  });
})();
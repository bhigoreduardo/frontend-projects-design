/* TESTIMONIALS SLIDER */
var swiper = new Swiper(".testimonials-slider", {
  slidesPerView: 3,
  spaceBetween: 10,
  grabCursor: true,
  loop: true,
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
  centeredSlides: true,
  breakpoints: {
    0: {
      slidesPerView: 1,
    },
    480: {
      slidesPerView: 2,
    },
    768: {
      slidesPerView: 3,
    },
  },
});

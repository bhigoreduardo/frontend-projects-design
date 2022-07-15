/* HOME SLIDER */
var swiper = new Swiper(".banner-slider", {
  grabCursor: true,
  spaceBetween: 0,
  centeredSlides: true,
  loop: true,
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

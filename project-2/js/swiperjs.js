var swiper = new Swiper(".home-slider", {
  loop: true,
  grabCursor: true,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

var swiper = new Swiper(".testimonials-slider", {
  loop: true,
  grabCursor: true,
  spaceBetween: 20,
  breakpoints: {
    640: {
      slidesPerView: 1,
    },
    768: {
      slidesPerView: 2,
    },
    992: {
      slidesPerView: 3,
    },
  },
});

var swiper = new Swiper(".blog-slider", {
  loop: true,
  grabCursor: true,
  spaceBetween: 20,
  breakpoints: {
    640: {
      slidesPerView: 1,
    },
    768: {
      slidesPerView: 2,
    },
    992: {
      slidesPerView: 3,
    },
  },
});

var swiper = new Swiper(".clients-slider", {
  loop: true,
  grabCursor: true,
  spaceBetween: 20,
  breakpoints: {
      480: {
          slidesPerView: 2,
      },
      640: {
          slidesPerView: 3,
      },
      768: {
          slidesPerView: 4,
      },
      992: {
          slidesPerView: 5,
      },
  },
});
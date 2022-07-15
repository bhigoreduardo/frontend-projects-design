/* BANNER SLIDER */
var swiper = new Swiper(".banner-slider", {
  grabCursor: true,
  slidesPerView: 1,
  spaceBetween: 0,
  loop: true,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

/* PRODUCTS SLIDER */
var swiper = new Swiper(".products-slider", {
  grabCursor: true,
  slidesPerView: 4,
  spaceBetween: 20,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
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
    1024: {
      slidesPerView: 4,
    },
  },
  loop: true,
});

/* TESTIMONIALS SLIDER */
var swiper = new Swiper(".testimonials-slider", {
  grabCursor: true,
  slidesPerView: 3,
  spaceBetween: 20,
  breakpoints: {
    0: {
      slidesPerView: 1,
    },
    480: {
      slidesPerView: 2,
    },
    992: {
      slidesPerView: 3,
    },
  },
  loop: true,
});

/* BLOG SLIDER */
var swiper = new Swiper(".blog-slider", {
  grabCursor: true,
  slidesPerView: 3,
  spaceBetween: 20,
  breakpoints: {
    0: {
      slidesPerView: 1,
    },
    650: {
      slidesPerView: 2,
    },
    992: {
      slidesPerView: 3,
    },
  },
  loop: true,
});

/* CLIENTS SLIDER */
var swiper = new Swiper(".clients-slider", {
  grabCursor: true,
  slidesPerView: 4,
  spaceBetween: 20,
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
      992: {
          slidesPerView: 4,
      },
  },
  loop: true,
});
function sliderInfinite(target) {
  this.wrapper = document.querySelector(`.${target}`);
  this.wrapperSlide = this.wrapper.children[0];
  this.nextButton = this.wrapper.children[1].children[1];
  this.prevButton = this.wrapper.children[1].children[0];
  this.bullets = this.wrapper.children[2].children;

  this.slide = this.wrapperSlide.children;
  this.index = 1;
  this.slideId;
}

function sliderCarrosel(slider, loop, bulletsCondition) {
  let firstClone = slider.slide[0].cloneNode(true),
    lastClone = slider.slide[slider.slide.length - 1].cloneNode(true);

  firstClone.class = "fist-clone";
  lastClone.class = "last-clone";

  slider.wrapperSlide.append(firstClone);
  slider.wrapperSlide.prepend(lastClone);

  getSlide = () => slider.wrapperSlide.children;

  slider.slide = getSlide();

  let slideWidth = slider.slide[0].clientWidth;
  // let slideWidth = slider.slide[0].offsetWidth;
  // let slideWidth = slider.slide[0].getBoundingClientRect().width;

  slider.wrapperSlide.style.transform = `translateX(${-slideWidth * slider.index}px)`;

  slider.wrapperSlide.addEventListener("transitionend", () => {
    slider.slide = getSlide();
    if (slider.slide[slider.index].class === firstClone.class) {
      slider.wrapperSlide.style.transition = `none`;
      slider.index = 1;
      slider.wrapperSlide.style.transform = `translateX(${-slideWidth * slider.index}px)`;
    }

    if (slider.slide[slider.index].class === lastClone.class) {
      slider.wrapperSlide.style.transition = `none`;
      slider.index = slider.slide.length - 2;
      slider.wrapperSlide.style.transform = `translateX(${-slideWidth * slider.index}px)`;
    }
  });

  if (bulletsCondition.length > 0) {
    slider.wrapperSlide.addEventListener("transitionstart", () => {
      slider.slide = getSlide();
      if (slider.slide[slider.index].class === firstClone.class) {
        resetBullets(0);
      }
      if (slider.slide[slider.index].class == lastClone.class) {
        resetBullets(slider.bullets.length - 1);
      }
    });

    for (let i = 0; i < slider.bullets.length; i++) {
      slider.bullets[i].addEventListener("click", () => {
        slider.index = i + 1;
        slider.wrapperSlide.style.transform = `translateX(${-slideWidth * slider.index}px)`;
        slider.wrapperSlide.style.transition = `1s`;
        resetBullets(i);
      });
    }

    function resetBullets(i) {
      for (let i = 0; i < slider.bullets.length; i++) {
        slider.bullets[i].classList.remove("active");
      }

      slider.bullets[i].classList.add("active");
    }
  }

  function moveToNextSlide() {
    slider.slide = getSlide();
    if (slider.index >= slider.slide.length - 1) return;

    slider.index++;
    slider.wrapperSlide.style.transform = `translateX(${-slideWidth * slider.index}px)`;
    slider.wrapperSlide.style.transition = `1s`;
    if (slider.index <= slider.bullets.length && bulletsCondition.length > 0) resetBullets(slider.index - 1);
  }

  function moveToPreviousSlide() {
    slider.slide = getSlide();
    if (slider.index <= 0) return;

    slider.index--;
    slider.wrapperSlide.style.transform = `translateX(${-slideWidth * slider.index}px)`;
    slider.wrapperSlide.style.transition = `1s`;
    if (slider.index > 0 && bulletsCondition.length > 0) resetBullets(slider.index - 1);
  }

  slider.nextButton.addEventListener("click", moveToNextSlide);
  slider.prevButton.addEventListener("click", moveToPreviousSlide);

  if (loop) {
    startSlide();

    function startSlide() {
      slider.slideId = setInterval(() => {
        moveToNextSlide();
      }, 2000);
    }

    slider.wrapper.addEventListener("mouseenter", () => clearInterval(slider.slideId));
    slider.wrapper.addEventListener("mouseleave", startSlide);
  }
}

window.addEventListener("DOMContentLoaded", () => {
  /* SLIDER OFFER */
  wrapperOffer1 = new sliderInfinite("wrapper-offer-1");
  sliderCarrosel(wrapperOffer1, false, false);

  wrapperOffer2 = new sliderInfinite("wrapper-offer-2");
  sliderCarrosel(wrapperOffer2, false, false);

  wrapperOffer3 = new sliderInfinite("wrapper-offer-3");
  sliderCarrosel(wrapperOffer3, false, false);

  /* SLIDER RELEASES */
  wrapperReleases1 = new sliderInfinite("wrapper-releases-1");
  sliderCarrosel(wrapperReleases1, false, false);

  wrapperReleases2 = new sliderInfinite("wrapper-releases-2");
  sliderCarrosel(wrapperReleases2, false, false);

  wrapperReleases3 = new sliderInfinite("wrapper-releases-3");
  sliderCarrosel(wrapperReleases3, false, false);

  wrapperReleases4 = new sliderInfinite("wrapper-releases-4");
  sliderCarrosel(wrapperReleases4, false, false);

  wrapperReleases5 = new sliderInfinite("wrapper-releases-5");
  sliderCarrosel(wrapperReleases5, false, false);
});

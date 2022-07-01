function slider(target) {
  this.wrapper = document.querySelector(`.${target}`);
  this.wrapperSlide = this.wrapper.children[0].children[0];
  this.nextButton = this.wrapper.children[1].children[1];
  this.prevButton = this.wrapper.children[1].children[0];

  this.slide = this.wrapperSlide.children;
  this.index = 0;
  this.maxSlide = this.slide.length;
}

function sliderFinite(slider) {
  const sizeWidth = window.innerWidth;

  let slidePerPage, movePer;

  if (sizeWidth > 992) {
    slidePerPage = 3;
  } else if (sizeWidth > 530) {
    slidePerPage = 2;
  } else {
    slidePerPage = 1;
  }

  movePer = slider.maxSlide - slidePerPage;

  let slideWidth = slider.slide[0].clientWidth + 24;

  function moveToNextSlide() {
    if (slider.index >= movePer) return;

    slider.index++;
    slider.wrapperSlide.style.transform = `translateX(${-slideWidth * slider.index}px)`;
    slider.wrapperSlide.style.transition = `1s`;
  }

  function moveToPreviousSlide() {
    if (slider.index == 0) return;

    slider.index--;
    slider.wrapperSlide.style.transform = `translateX(${-slideWidth * slider.index}px)`;
    slider.wrapperSlide.style.transition = `1s`;
  }

  slider.nextButton.addEventListener("click", moveToNextSlide);
  slider.prevButton.addEventListener("click", moveToPreviousSlide);
}

window.addEventListener("DOMContentLoaded", () => {
  const wrapperReleases = new slider("wrapper-releases");
  sliderFinite(wrapperReleases);

  const wrapperBlog = new slider("wrapper-blog");
  sliderFinite(wrapperBlog);
});

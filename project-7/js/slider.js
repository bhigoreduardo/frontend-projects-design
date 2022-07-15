// SLIDER WRAPPER
const wrapper = document.querySelector(".wrapper"),
  wrapperSlide = document.querySelector(".wrapper-slide"),
  nextButton = document.getElementById("next-button"),
  prevButton = document.getElementById("prev-button"),
  bullets = document.querySelectorAll(".slide-navigation span");

let slide = document.querySelectorAll(".slide");
let index = 1;
let slideId;

const firstClone = slide[0].cloneNode(true);
const lastClone = slide[slide.length - 1].cloneNode(true);

firstClone.id = "first-clone";
lastClone.id = "last-clone";

wrapperSlide.append(firstClone);
wrapperSlide.prepend(lastClone);

const getSlide = () => document.querySelectorAll(".slide");

// const slideWidth = wrapperSlide.clientWidth;
const slideWidth = window.innerWidth;

wrapperSlide.style.transform = `translateX(${-slideWidth * index}px)`;

wrapperSlide.addEventListener("transitionend", () => {
  slide = getSlide();
  if (slide[index].id === firstClone.id) {
    wrapperSlide.style.transition = `none`;
    index = 1;
    wrapperSlide.style.transform = `translateX(${-slideWidth * index}px)`;
  }

  if (slide[index].id === lastClone.id) {
    wrapperSlide.style.transition = `none`;
    index = slide.length - 2;
    wrapperSlide.style.transform = `translateX(${-slideWidth * index}px)`;
  }
});

wrapperSlide.addEventListener("transitionstart", () => {
  slide = getSlide();
  if (slide[index].id === firstClone.id) {
    resetBullets(0);
  }
  if (slide[index].id == lastClone.id) {
    resetBullets(bullets.length - 1);
  }
});

nextButton.addEventListener("click", moveToNextSlide);
prevButton.addEventListener("click", moveToPreviousSlide);

wrapper.addEventListener("mouseenter", () => clearInterval(slideId));
wrapper.addEventListener("mouseleave", startSlide);

bullets.forEach((bullet, i) => {
  bullet.addEventListener("click", () => {
    index = i + 1;
    wrapperSlide.style.transform = `translateX(${-slideWidth * index}px)`;
    wrapperSlide.style.transition = `1s`;
    resetBullets(i);
  });
});

function startSlide() {
  slideId = setInterval(() => {
    moveToNextSlide();
  }, 2000);
}

function moveToNextSlide() {
  slide = getSlide();
  if (index >= slide.length - 1) return;

  index++;
  wrapperSlide.style.transform = `translateX(${-slideWidth * index}px)`;
  wrapperSlide.style.transition = `1s`;
  if (index <= bullets.length) resetBullets(index - 1);
}

function moveToPreviousSlide() {
  slide = getSlide();
  if (index <= 0) return;
  index--;
  wrapperSlide.style.transform = `translateX(${-slideWidth * index}px)`;
  wrapperSlide.style.transition = `1s`;
  if (index > 0) resetBullets(index - 1);
}

function resetBullets(i) {
  bullets.forEach((bullet) => bullet.classList.remove("active"));
  bullets[i].classList.add("active");
}

// startSlide();

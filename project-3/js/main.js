/* HEADER FUNCTIONS */
const iconBars = document.getElementById("icon-bars"),
  navbar = document.getElementById("navbar");

iconBars.addEventListener("click", () => {
  iconBars.classList.toggle("fa-times");
  navbar.classList.toggle("active");
});

window.addEventListener("load", () => {
  iconBars.classList.remove("fa-times");
  navbar.classList.remove("active");
});

/* SCROLL PAGE FUNCTION */
const menuItem = document.querySelectorAll(".navbar a");

menuItem.forEach((item) => {
  item.addEventListener("click", () => {
    let target = item.dataset.target;
    let section = document.getElementById(target);
    let offsetSection = section.offsetTop - 50; // section-padding: 50px

    document.documentElement.scrollTop = offsetSection;
  });
});

/* PREVIEW DISHES FUNCTIONS */
const dishes = document.querySelectorAll(".dishes .content"),
  preview = document.querySelectorAll(".preview-dishes .dishe"),
  containerPreview = document.querySelector(".preview-dishes"),
  closePreview = document.getElementById("close-preview");

dishes.forEach((element) => {
  element.addEventListener("click", () => {
    let name = element.dataset.name;

    preview.forEach((previewElement) => {
      let target = previewElement.dataset.target;

      if (name == target) {
        containerPreview.style.display = `flex`;
        previewElement.style.display = `block`;
      }
    });
  });
});

closePreview.addEventListener("click", () => {
  preview.forEach((previewElement) => (previewElement.style.display = `none`));
  containerPreview.style.display = `none`;
});

/* LIGHT GALLERY */
const gallery = document.querySelector(".gallery .box-container");
lightGallery(gallery);

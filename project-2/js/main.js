/* HEADER FUNCTIONS */
const menuBars = document.getElementById("menu-bars"),
  navbar = document.getElementById("navbar"),
  siteInfo = document.getElementById("site-info"),
  searchIcon = document.getElementById("search-icon"),
  formSearch = document.getElementById("form-search"),
  formLogin = document.getElementById("form-login");

menuBars.addEventListener("click", () => {
  menuBars.classList.toggle("fa-times");
  navbar.classList.toggle("active");
  searchIcon.classList.remove("fa-times");
  formSearch.classList.remove("active");
  formLogin.classList.remove("active");
});

document.getElementById("info-icon").addEventListener("click", () => {
  siteInfo.classList.toggle("active");
  navbar.classList.remove("active");
  menuBars.classList.remove("fa-times");
  searchIcon.classList.remove("fa-times");
  formSearch.classList.remove("active");
  formLogin.classList.remove("active");
});

document.getElementById("close-info").addEventListener("click", () => siteInfo.classList.remove("active"));

searchIcon.addEventListener("click", () => {
  searchIcon.classList.toggle("fa-times");
  formSearch.classList.toggle("active");
  menuBars.classList.remove("fa-times");
  navbar.classList.remove("active");
  formLogin.classList.remove("active");
});

document.getElementById("user-icon").addEventListener("click", () => {
  formLogin.classList.toggle("active");
  menuBars.classList.remove("fa-times");
  navbar.classList.remove("active");
  searchIcon.classList.remove("fa-times");
  formSearch.classList.remove("active");
});

window.onscroll = () => {
  document.getElementById("header").classList.toggle("active", scrollY > 0);
  menuBars.classList.remove("fa-times");
  navbar.classList.remove("active");
  siteInfo.classList.remove("active");
  searchIcon.classList.remove("fa-times");
  formSearch.classList.remove("active");
  formLogin.classList.remove("active");
};

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

/* PROJECTS FUNCTIONS */
const projetcs = document.querySelectorAll(".projetcs .box-container .box"),
  previewProjects = document.querySelectorAll(".preview-projects-container .preview-project"),
  previewProjectsContainer = document.querySelector(".preview-projects-container");

projetcs.forEach((project) => {
  project.addEventListener("click", () => {
    let name = project.dataset.name;

    previewProjects.forEach((preview) => {
      let target = preview.dataset.target;

      if (name === target) {
        previewProjectsContainer.classList.add("active");
        preview.classList.add("active");
      }
    });
  });
});

document.querySelector(".preview-projects-container .fa-times").addEventListener("click", () => {
  previewProjectsContainer.classList.remove("active");
  previewProjects.forEach((preview) => {
    preview.classList.remove("active");
  });
});

/* HEADER FUNCTIONS*/
const menuBars = document.getElementById("menu-bars"),
  navbar = document.getElementById("navbar");

menuBars.addEventListener("click", () => {
  menuBars.classList.toggle("fa-times");
  navbar.classList.toggle("active");
});

window.onscroll = () => {
  menuBars.classList.remove("fa-times");
  navbar.classList.remove("active");
};

document.getElementById("search-icon").addEventListener("click", (e) => {
  document.getElementById("search-form").classList.toggle("active");
  e.target.classList.toggle("fa-times");
});

/* SCROLL PAGE FUNCTION */
const menuItem = document.querySelectorAll(".navbar a");

menuItem.forEach((item) => {
  item.addEventListener("click", () => {
    let target = item.dataset.target;
    let section = document.getElementById(target);
    let offsetSection = section.offsetTop;

    document.documentElement.scrollTop = offsetSection;
  });
});

/* LOADER FUNCTION */
setTimeout(() => {
  document.getElementById("loader").classList.add("fade-out");
  startSlide();
}, 3000);

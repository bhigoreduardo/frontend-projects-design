/* HEADER FUNCTION */
const navbar = document.getElementById("navbar"),
  menuBars = document.getElementById("menu-bars");

menuBars.addEventListener("click", (e) => {
  e.target.classList.toggle("fa-times");
  navbar.classList.toggle("active");
});

window.onscroll = () => {
  navbar.classList.remove("active");
  menuBars.classList.remove("fa-times");
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

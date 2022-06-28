const header = document.getElementById("header");
const iconBars = document.getElementById("icon-bars");
const navbar = document.getElementById("navbar");

iconBars.addEventListener("click", () => {
  iconBars.classList.toggle("fa-times");
  navbar.classList.toggle("active");
});

window.addEventListener("scroll", () => {
  header.classList.toggle("active", scrollY > 0);
});

/* HEADER FUNCTIONS */
const iconMenu = document.getElementById("icon-menu"),
  navbar = document.getElementById("navbar");

iconMenu.onclick = () => {
  iconMenu.classList.toggle("active");
  navbar.classList.toggle("active");
};

window.onscroll = () => {
  iconMenu.classList.remove("active");
  navbar.classList.remove("active");
  document.getElementById("header").classList.toggle("active", scrollY > 0);
};

/* SCROLL PAGE FUNCTION */
const menuItem = document.querySelectorAll(".navbar a");
console.log(menuItem);

menuItem.forEach((item) => {
  item.onclick = () => {
    let target = item.dataset.target;
    let section = document.getElementById(target);
    let offsetSection = section.offsetTop - 50; // section-padding: 50px

    document.documentElement.scrollTop = offsetSection;
  };
});

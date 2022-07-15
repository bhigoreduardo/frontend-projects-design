/* HEADER FUNCTION */
const navbar = document.getElementById("navbar"),
  iconsSearch = document.getElementById("icons-search"),
  searchForm = document.getElementById("search-form");

document.getElementById("icons-bars").onclick = () => {
  navbar.classList.toggle("active");
  iconsSearch.classList.remove("fa-times");
  searchForm.classList.remove("active");
};

document.getElementById("navbar-close").onclick = () => {
  navbar.classList.toggle("active");
};

iconsSearch.onclick = () => {
  iconsSearch.classList.toggle("fa-times");
  searchForm.classList.toggle("active");
};

window.onscroll = () => {
  navbar.classList.remove("active");
  iconsSearch.classList.remove("fa-times");
  searchForm.classList.remove("active");
  document.getElementById("header").classList.toggle("active", scrollY > 0);
};

/* SCROOL PAGE FUNCTION */
const menuItem = document.querySelectorAll(".navbar a");

menuItem.forEach((item) => {
  item.onclick = () => {
    let target = item.dataset.target;
    let section = document.getElementById(target);
    let offsetSection = section.offsetTop - 50; // section-padding: 50px

    document.documentElement.scrollTop = offsetSection;
  };
});

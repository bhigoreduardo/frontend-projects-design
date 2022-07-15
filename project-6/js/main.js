/* HEADER FUNCTIONS */
const iconBars = document.getElementById("icon-bars"),
  navbar = document.getElementById("navbar");

iconBars.onclick = () => {
  iconBars.classList.toggle("fa-times");
  navbar.classList.toggle("active");
};

window.onscroll = () => {
  iconBars.classList.remove("fa-times");
  navbar.classList.remove("active");
};

/* LOAD FUNCTION */
const loadButton = document.getElementById("load"),
  cards = document.querySelectorAll(".packages .card-container .card");

let currentCards = 6;

if (loadButton !== null) {
  loadButton.onclick = () => {
    for (let i = currentCards; i < currentCards + 3; i++) {
      cards[i].style.display = `block`;
    }

    currentCards += 3;

    if (currentCards >= cards.length) {
      loadButton.style.display = `none`;
    }
  };
}

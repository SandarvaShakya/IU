const burger = document.querySelector(".hamburger");
const nav = document.querySelector(".nav");

burger.addEventListener("click", () => {
  nav.classList.toggle("nav--toggle");
  burger.classList.toggle("hamburger--rotate");
});

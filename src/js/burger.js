const burger = document.querySelector(".burger");
const menu = document.querySelector(".nav");

burger.addEventListener("click", function () {
  menu.classList.toggle("active");
  this.classList.toggle("active");
  document.querySelector(".logo__img").classList.toggle("active");
});

// document.getElementById("menu-toggle").addEventListener("click", function () {
//   var menu = document.getElementById("dropdown-menu");
//   if (menu.style.display === "flex") {
//     menu.style.display = "none";
//   } else {
//     menu.style.display = "flex";
//   }
// });

"use strict";

const menu = document.querySelector(".dropdown-menu");
const bgMenu = document.querySelector(".menu-container");

document.querySelector(".menu-toggle").addEventListener("click", function () {
  this.classList.toggle("active");
  bgMenu.classList.toggle("active");
  menu.classList.toggle("open");
  if (menu.style.display === "flex") {
    menu.style.display = "none";
  } else {
    menu.style.display = "flex";
  }
});

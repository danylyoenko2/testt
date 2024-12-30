const darkMode = document.querySelector("[data-darkMode]");
const bg = document.querySelector(".container-grid-all");
const nav = document.querySelector(".theme__circle");

darkMode.addEventListener("input", function () {
  if (this.checked) {
    bg.style.backgroundColor = "rgb(30, 30, 30)";
    bg.style.color = "#dbdbdb";
    document.querySelector(".burger").classList.add("dark");
    document.querySelector(".logo__img").classList.add("dark");
    document.querySelector(".buld__base").classList.add("dark");
    document.querySelector(".buld__light").classList.add("dark");
  } else {
    bg.style.backgroundColor = "#fff";
    bg.style.color = "inherit";
    document.querySelector(".burger").classList.remove("dark");
    document.querySelector(".logo__img").classList.remove("dark");
    document.querySelector(".buld__base").classList.remove("dark");
    document.querySelector(".buld__light").classList.remove("dark");
  }
});

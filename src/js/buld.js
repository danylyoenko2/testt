const btn = document.querySelector("[data-switch]");
const light = document.querySelector("[data-light]");
const brightnessSlider = document.querySelector("[data-brightness]");
const colorChooser = document.querySelector("[data-color]");
const darkMode = document.querySelector("[data-darkMode]");
const bg = document.querySelector(".container-grid-all");

btn.addEventListener("click", function () {
  light.classList.toggle("on");
});

brightnessSlider.addEventListener("input", function () {
  const brightness = brightnessSlider.value / 100;
  light.style.opacity = brightness;
});

colorChooser.addEventListener("input", function () {
  const color = colorChooser.value;
  if (document.querySelector(".light.on")) {
    light.style.backgroundColor = color;
    light.style.boxShadow = `10px 10px 50px 30px ${color}`;
  }
});

darkMode.addEventListener("input", function () {
  if (this.checked) {
    bg.style.backgroundColor = "#000";
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

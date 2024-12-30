const btn = document.querySelector("[data-switch]");
const light = document.querySelector("[data-light]");
const brightnessSlider = document.querySelector("[data-brightness]");
const colorChooser = document.querySelector("[data-color]");

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

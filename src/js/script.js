const box = document.getElementById("box");
const heart = document.getElementById("heart");

box.addEventListener("click", function () {
  box.classList.add("hidden");
  heart.style.display = "flex";
});

heart.addEventListener("click", function () {
  heart.style.display = "none";
  box.classList.remove("hidden");
});

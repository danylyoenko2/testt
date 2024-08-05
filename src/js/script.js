const box = document.getElementById("box");
const heart = document.getElementById("heart");
const title = document.getElementById("title");

box.addEventListener("click", function () {
  box.classList.add("hidden");
  title.style.display = "none";
  heart.style.display = "flex";
});

heart.addEventListener("click", function () {
  heart.style.display = "none";
  box.classList.remove("hidden");
  title.style.display = "block";
});

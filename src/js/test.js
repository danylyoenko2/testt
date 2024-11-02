"use strict";

const content = document.querySelector(".dropped-content");
const btn = document.querySelector(".dropped-btn");

content.style.display = "none";

btn.addEventListener("click", function () {
  btn.classList.toggle("rotate");

  if (content.style.display === "none") {
    content.style.display = "block";
  } else {
    content.style.display = "none";
  }
  content.innerHTML =
    "<p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eveniet neque sequi earum nemo vel dignissimos libero explicabo sed exercitationem </p>";
});

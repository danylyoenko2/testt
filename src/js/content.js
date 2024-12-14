"use strict";

document.querySelectorAll(".more-link").forEach((link) => {
  link.addEventListener("click", function (event) {
    event.preventDefault();

    const contentId = this.getAttribute("data-content");
    const contentDiv = document.getElementById(contentId);

    document.querySelectorAll(".extra-content").forEach((content) => {
      if (content !== contentDiv) {
        content.style.display = "none";
      }
    });

    contentDiv.style.display =
      contentDiv.style.display === "none" || contentDiv.style.display === ""
        ? "block"
        : "none";
  });
});

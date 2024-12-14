const btn = document.querySelector(".extend__btn");
const box = document.querySelector(".smocontainer");
const numberFill = document.querySelector(".extend__number");
const fill = document.querySelector(".extend__text");

// number.addEventListener("input", (e) => (box.innerHTML = e.target.value));

btn.addEventListener("click", function () {
  const text = fill.value;
  let count = parseInt(numberFill.value, 10);
  const includeNumbers = document.querySelector(".extend__checkbox:checked");

  count = count > 5000 ? 5000 : count;

  let result = "";
  for (let i = 1; i <= count; i++) {
    if (includeNumbers) {
      result += `${i}. ${text}\n`;
    } else {
      result += `${text}\n`;
    }
  }

  box.textContent = result;
});

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

// Напиши скрипт, який змінює кольори фону елемента <body> \
// через інлайн-стиль по кліку на button.change-color і виводить
// значення кольору в span.color.
// Для генерування випадкового кольору використовуй функцію
// getRandomHexColor.
const body = document.body;

const colorName = document.querySelector(".color");

const button = document.querySelector(".change-color");

button.addEventListener("click", onClick);
function onClick() {
  body.style.backgroundColor = getRandomHexColor();
  colorName.textContent = getRandomHexColor();
}

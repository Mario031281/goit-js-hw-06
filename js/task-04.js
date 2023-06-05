// Створи змінну counterValue, в якій буде зберігатися поточне значення лічильника та ініціалізуй її значенням 0.
// Додай слухачів кліків до кнопок, всередині яких збільшуй або зменшуй значення лічильника.
// Оновлюй інтерфейс новим значенням змінної counterValue.

let value = document.querySelector("#value");

const buttonDecrement = document.querySelector(
  'button[data-action="decrement"]'
);
const buttonIncrement = document.querySelector(
  'button[data-action="increment"]'
);
let counterValue = 0;
buttonDecrement.addEventListener("click", onClickDecrement);
function onClickDecrement(evt) {
  counterValue -= 1;
  value.textContent = `${counterValue}`;
}
buttonIncrement.addEventListener("click", onClickIncrement);
function onClickIncrement(evt) {
  counterValue += 1;
  value.textContent = `${counterValue}`;
}

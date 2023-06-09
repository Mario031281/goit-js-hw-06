function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

// Напиши скрипт створення і очищення колекції елементів.
// Користувач вводить кількість елементів в input і натискає
// кнопку Створити, після чого рендериться колекція.
// Натисненням на кнопку Очистити, колекція елементів
// очищається.

// Створи функцію createBoxes(amount), яка приймає один
// параметр - число. Функція створює стільки <div>, скільки
// вказано в amount і додає їх у div#boxes.

// 1. Розміри найпершого <div> - 30px на 30px.
// 2. Кожен елемент після першого повинен бути ширшим і вищим
// від попереднього на 10px.
// 3. Всі елементи повинні мати випадковий колір фону у
// форматі HEX. Використовуй готову функцію getRandomHexColor
// для отримання кольору.
// Створи функцію destroyBoxes(), яка очищає вміст
// div#boxes, у такий спосіб видаляючи всі створені елементи.

const data = document.querySelector("#controls");
console.log(data);
// const btnCreate = document("button[data-create]");
// console.log(btnCreate);
// const btnDestroy = document("button[data-destroy]");
// console.log(btnDestroy);

// [...data.children].forEach((item) => item.addEventListener("click", onClick));
// function onClick(evt) {
//   console.log(evt.currentTarget);
// }
const boxes = document.querySelector("#boxes");
console.log(boxes);

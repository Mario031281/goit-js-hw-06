const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

// Напиши скрипт, який для кожного елемента масиву ingredients:

// 1.Створить окремий елемент <li>. Обов'язково використовуй метод document.createElement().

// 2.Додасть назву інгредієнта як його текстовий вміст.
// 3.Додасть елементу клас item.
// 4.Після чого, вставить усі <li> за одну операцію у список ul#ingredients.
const list = document.querySelector("#ingredients");
console.log(list);

const listItems = ingredients.map((ingredient) => {
  const li = document.createElement("li");
  li.classList.add("item");
  li.insertAdjacentHTML("beforeend", ingredient);
  return li;
  console.log(listItems);
});

list.append(...listItems);

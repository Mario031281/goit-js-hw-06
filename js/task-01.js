// 1.Порахує і виведе в консоль кількість категорій в ul#categories, тобто елементів li.item.
const categories = document.querySelectorAll(".item");

const amountCategories = categories.forEach((item, index) =>
  console.dir(`Number of categories: ${categories.length}`)
);

// 2.Для кожного элемента li.item у списку ul#categories, знайде і виведе в консоль текст заголовку елемента (тегу <h2>) і кількість елементів в категорії (усіх <li>, вкладених в нього).

const list = document.querySelector("#categories");
[...list.children].forEach((item) => {
  console.log(`Categories: ${item.firstElementChild.textContent}`);
  console.log(`Elements: ${item.lastElementChild.children.length}`);
});

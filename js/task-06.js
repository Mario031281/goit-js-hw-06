// Напиши скрипт, який під час втрати фокусу на інпуті (подія blur),
// перевіряє його вміст щодо правильної кількості введених символів.

// Яка кількість символів повинна бути в інпуті, зазначається в його
// атрибуті data-length.
// Якщо введена правильна кількість символів, то border інпуту
// стає зеленим, якщо неправильна кількість - червоним.

const input = document.querySelector("#validation-input");
console.dir(input);

input.addEventListener("blur", checkValue);

function checkValue(evt) {
  input.classList.remove("invalid", "valid");
  if (input.value.length !== 6) {
    input.classList.add("invalid");
  } else {
    input.classList.add("valid");
  }
}

// Напиши скрипт управління формою логіна.

// 1. Обробка відправлення форми form.login-form повинна відбуватися
// відповідно до події submit.
// 2. Під час відправлення форми сторінка не повинна
// перезавантажуватися.
// 3. Якщо у формі є незаповнені поля, виводь alert з
// попередженням про те, що всі поля повинні бути заповнені.
// 4. Якщо користувач заповнив усі поля і відправив форму,
// збери значення полів в об'єкт, де ім'я поля буде ім'ям
// властивості, а значення поля - значенням властивості.
// Для доступу до елементів форми використовуй властивість elements.
// 5. Виведи об'єкт із введеними даними в консоль і очисти
// значення полів форми методом reset.
const loginForm = document.querySelector(".login-form");

loginForm.addEventListener("submit", onSubmit);
function onSubmit(e) {
  e.preventDefault();

  const { email, password } = e.currentTarget.elements;

  if (email.value.length === 0 || password.value.length === 0) {
    alert("всі поля повинні бути заповнені");
  }

  const info = {
    email: email.value,
    password: password.value,
  };
  console.log(info);
  loginForm.reset();
}

// Задание 8 Напиши скрипт управления формой логина.

// <form class="login-form">
//   <label>
//     Email
//     <input type="email" name="email" />
//   </label>
//   <label>
//     Password
//     <input type="password" name="password" />
//   </label>
//   <button type="submit">Login</button>
// </form>
// Обработка отправки формы form.login-form должна быть по событию submit.
// При отправке формы страница не должна перезагружаться.
// Если в форме есть незаполненные поля, выводи alert с предупреждением о том, что все поля должны быть заполнены.
// Если пользователь заполнил все поля и отправил форму, собери значения полей в обьект, где имя поля будет именем свойства, а значение поля - значением свойства. Для доступа к элементам формы используй свойство elements.
// Выведи обьект с введенными данными в консоль и очисти значения полей формы методом reset.

// const formEl = document.querySelector(".login-form")

// formEl.addEventListener('submit', handleFormSubmit);

// function handleFormSubmit(event){
//     event.preventDefault();
//     // const formElements = event.currentTarget.elements;

//     // const {email, password} = formElements;

//     // const {email, password} = event.currentTarget.elements;

//     // console.log(`it ${email.value}`);
//     if (event.currentTarget.elements.email.value === '' || event.currentTarget.elements.password.value === '') {
//         return alert(`Все поля должны быть заполнены!`)
//     }

//     const formData = {
//         email: event.currentTarget.elements.email.value,
//         password: event.currentTarget.elements.password.value,
//     }
//     console.log(formData);
//     formEl.reset();





// const form = document.querySelector(".form");

// form.addEventListener("submit", handleSubmit);

// function handleSubmit(event) {
//   event.preventDefault();
//   const {
//     elements: { login, password }
//   } = event.currentTarget;

//   if (login.value === "" || password.value === "") {
//     return console.log("Please fill in all the fields!");
//   }

//   console.log(`Login: ${login.value}, Password: ${password.value}`);
//   event.currentTarget.reset();
// }

// const title = document.querySelector(".article .title");
// title.innerHTML = 'New and <span class="accent">improved</span> title';

// const article = document.querySelector(".article");
// const htmlString = `<p class="article-text">Nullam quis ante. Vestibulum dapibus nunc ac augue. In consectetuer turpis ut velit.</p>
//    <a class="link" href="#">Read more...</a>`;

// // Replace += with = operator. See the difference? 
// // Article title is lost because we overwrite element content.
// article.innerHTML += htmlString;
// const user = {
//     email: "mango@gmail.com",
//     age: 20,
// };

// const {username} = user;

// console.log(username);

// =============================

// =====================================
// Это мне для примера как работает


// const book = {
//     title: "The Last Kingdom",
//     author: "Bernard Cornwell",
//     genres: ["historical prose", "adventure"],
//     isPublic: true,
//     rating: 8.38,
//   };

//   console.log(book.title);
  
//   // Деструктуризируем
//   const { title, author, isPublic, rating, coverImage } = book;
//   console.log(coverImage); // undefined
//   console.log(title);
  
//   const accessType = isPublic ? "публичном" : "закрытом";
//   const message = `Книга ${title} автора ${author} с рейтингом ${rating} находится в ${accessType} доступе.`;

//   =========================================


// ================================

// const user = {
//     email: "mango@gmail.com",
//     age: 20,
// };

// const {username = "User"} = user;

// console.log(username);

// console.log(user);

// =============================

// ======================================
// Мне для примера

// const book = {
//     title: "The Last Kingdom",
//     author: "Bernard Cornwell",
//   };
  
//   // Добавим картинку обложки если её нет в объекте книги
//   const {
//     title,
//     coverImage = "https://via.placeholder.com/640/480",
//     author,
//   } = book;
  
//   console.log(title); // The Last Kingdom
//   console.log(author); // Bernard Cornwell
//   console.log(coverImage); // https://via.placeholder.com/640/480

//   console.log(book)

//   ===================================

// ==============================

// const user = {
//     email: "mango@gmail.com",
//     age: 20,
// };

// const {email = userEmail} = user;

// console.log(email);

// =================================

// ==========================
// Example

// const firstBook = {
//     title: "The Last Kingdom",
//     coverImage:
//       "https://images-na.ssl-images-amazon.com/images/I/51b5YG6Y1rL.jpg",
//   };
  
//   const {
//     title: firstTitle,
//     coverImage: firstCoverImage = "https://via.placeholder.com/640/480",
//   } = firstBook;
  
//   console.log(firstTitle); 
//   console.log(firstCoverImage); 

//   console.log(firstBook)

  
//   const secondBook = {
//     title: "Сон смешного человека",
//   };
  
//   const {
//     title: secondTitle,
//     coverImage: secondCoverImage = "https://via.placeholder.com/640/480",
//   } = secondBook;
  
//   console.log(secondTitle); 
//   console.log(secondCoverImage); 

//   ====================================

// function foo({username} = {}) {
//   console.log(username)
// }

// foo();
// ====================================================

// greet()

// const greet = function() {
//   console.log("Welcom")
// }

// ====================================================

// greet()

// function greet() {
//   console.log("Welcom")
// }
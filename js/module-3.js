// const products = [
//     { name: "Radar", price: 1300, quantity: 4 },
//     { name: "Scanner", price: 2700, quantity: 3 },
//     { name: "Droid", price: 400, quantity: 7 },
//     { name: "Grip", price: 1200, quantity: 9 },
//   ];

// function getAllPropValues(propName) {
//     // Change code below this line
//     let array = [];
  
//     for (let product of products) {
//         if (product[propName])
//         array.push(product[propName])
//     }
  
//   return array
  
//     // Change code above this line
//   }
//   console.log(getAllPropValues("name"))

//   ============================================

// Напиши функцию calculateTotalPrice(productName) которая принимает один параметр productName - название товара. Функция должна вернуть общую стоимость (цена * количество) товара с таким именем из массива products.


// const products = [
//     { name: "Radar", price: 1300, quantity: 4 },
//     { name: "Scanner", price: 2700, quantity: 3 },
//     { name: "Droid", price: 400, quantity: 7 },
//     { name: "Grip", price: 1200, quantity: 9 },
//   ];
  
//   function calculateTotalPrice(productName) {
//     // Пиши код ниже этой строки
//     let totalPrice = 0;

//     for (let product of products) {
//         if (product.name === productName) {
//             totalPrice = product.price*product.quantity
//         }
        
//     }
  
//     return totalPrice
  
//     // Пиши код выше этой строки
//   }

//   console.log(calculateTotalPrice("Blaster"));
//   console.log(calculateTotalPrice("Radar"));
//   console.log(calculateTotalPrice("Droid"));
//   console.log(calculateTotalPrice("Grip"));
//   console.log(calculateTotalPrice("Scanner"));
  
//   Объявлена функция calculateTotalPrice(productName)
// Вызов calculateTotalPrice("Blaster") возвращает 0
// Вызов calculateTotalPrice("Radar") возвращает 5200
// Вызов calculateTotalPrice("Droid") возвращает 2800
// Вызов calculateTotalPrice("Grip") возвращает 10800
// Вызов calculateTotalPrice("Scanner") возвращает 8100

// ===================================================
// Пришел трёхдневный прогноз максимальных температур и мы считаем среднюю температуру за три дня (meanTemperature). Замени объявления переменных yesterday, today и tomorrow одной операцией деструктуризации свойств объекта highTemperatures.

// const highTemperatures = {
//     yesterday: 28,
//     today: 26,
//     tomorrow: 33,
//   };
//   // Change code below this line
  
// //   const yesterday = highTemperatures.yesterday;
// //   const today = highTemperatures.today;
// //   const tomorrow = highTemperatures.tomorrow;

// // заменяем то, что написано выше

// const {yesterday, today, tomorrow} = highTemperatures;
  
//   // Change code above this line
//   const meanTemperature = (yesterday + today + tomorrow) / 3;

// =============================================
// В прогнозе максимальных температур также может быть необязательное свойство icon - иконка погоды. Замени объявления переменных yesterday, today, tomorrow и icon одной операцией деструктуризации свойств объекта highTemperatures. Задай значение по умолчанию для icon - строку "https://www.flaticon.com/svg/static/icons/svg/2204/2204346.svg".
// const highTemperatures = {
//     yesterday: 28,
//     today: 26,
//     tomorrow: 33,
//   };
//   // Change code below this line
  
// //   const yesterday = highTemperatures.yesterday;
// //   const today = highTemperatures.today;
// //   const tomorrow = highTemperatures.tomorrow;
// //   const icon = highTemperatures.icon;

// // Change code

// const {yesterday, today, tomorrow, icon = "https://www.flaticon.com/svg/static/icons/svg/2204/2204346.svg"} = highTemperatures;
  
//   // Change code above this line
//   const meanTemperature = (yesterday + today + tomorrow) / 3;

// ==================================================
// Замени объявления переменных highYesterday, highToday, highTomorrow и highIcon одной операцией деструктуризации свойств объекта highTemperatures. Задай значение по умолчанию для highIcon - строку "https://www.flaticon.com/svg/static/icons/svg/2204/2204346.svg".

// const highTemperatures = {
//     yesterday: 28,
//     today: 26,
//     tomorrow: 33,
//   };
//   // Change code below this line
  
// //   const highYesterday = highTemperatures.yesterday;
// //   const highToday = highTemperatures.today;
// //   const highTomorrow = highTemperatures.tomorrow;
// //   const highIcon = highTemperatures.icon;

// //   Change code

// const { yesterday: highYesterday, today: highToday, tomorrow: highTomorrow, highIcon = "https://www.flaticon.com/svg/static/icons/svg/2204/2204346.svg"} = highTemperatures;
  
//   // Change code above this line
//   const meanTemperature = (highYesterday + highToday + highTomorrow) / 3;

// =================================================
// Выполни рефакторинг цикла for...of так, чтобы в нём использовалась деструктуризация объекта..

// const colors = [
//     { hex: "#f44336", rgb: "244,67,54" },
//     { hex: "#2196f3", rgb: "33,150,243" },
//     { hex: "#4caf50", rgb: "76,175,80" },
//     { hex: "#ffeb3b", rgb: "255,235,59" },
//   ];
  
//   const hexColors = [];
//   const rgbColors = [];
//   // Change code below this line
  
//   for (const color of colors) {
//     const { hex, rgb } = color;
//     hexColors.push(hex);
//     rgbColors.push(rgb);
//   }

//   console.log(hexColors);
//   console.log(rgbColors);

// ==========================================================
// Мы получили прогноз погоды на два дня, с минимальными и максимальными температурами, а также необязательными иконками. Замени объявления всех переменных одной операцией деструктуризации свойств объекта forecast. Задай значение по умолчанию для иконок, переменных todayIcon и tomorrowIcon - строку "https://www.flaticon.com/svg/static/icons/svg/2204/2204346.svg".

// const forecast = {
//     today: {
//       low: 28,
//       high: 32,
//       icon: "https://www.flaticon.com/svg/static/icons/svg/861/861059.svg",
//     },
//     tomorrow: {
//       low: 27,
//       high: 31,
//     },
//   };
//   // Change code below this line
  
// //   const highToday = forecast.today.high;
// //   const lowToday = forecast.today.low;
// //   const todayIcon = forecast.today.icon;
  
// //   const highTomorrow = forecast.tomorrow.high;
// //   const lowTomorrow = forecast.tomorrow.low;
// //   const tomorrowIcon = forecast.tomorrow.icon;

// // Change code 

// const { today: {low: lowToday, high: highToday, icon: todayIcon = "https://www.flaticon.com/svg/static/icons/svg/2204/2204346.svg"}, tomorrow: {low: lowTomorrow, high: highTomorrow, icon: tomorrowIcon = "https://www.flaticon.com/svg/static/icons/svg/2204/2204346.svg"}} = forecast;

// ===================================================
//Функция calculateMeanTemperature(forecast) принимает один параметр forecast - объект температур на два дня следующего формата.

// {
//     today: { low: 10, high: 20 },
//     tomorrow: { low: 20, high: 30 }
//   }
//   Замени объявления переменных todayLow, todayHigh, tomorrowLow и tomorrowHigh одной операцией деструктуризации свойств объекта forecast.


// function calculateMeanTemperature(forecast) {

//     // Change code below this line
//     // const todayLow = forecast.today.low;
//     // const todayHigh = forecast.today.high;
//     // const tomorrowLow = forecast.tomorrow.low;
//     // const tomorrowHigh = forecast.tomorrow.high;

//     const {today: {low: todayLow, high: todayHigh}, tomorrow: {low: tomorrowLow, high: tomorrowHigh}} = forecast;
  
//     // Change code above this line
//     // return (todayLow + todayHigh + tomorrowLow + tomorrowHigh) / 4;
//     return forecast;
//   }

//   console.log(calculateMeanTemperature({ today: {low: 28, high: 32}, tomorrow: {low: 25, high: 29} }))
  
  
// ======================================
// В переменной scores хранится массив результатов тестирования. Используя распыление и методы Math.max() и Math.min() дополни код так, чтобы в переменной bestScore был самый высокий балл, а в worstScore самый низкий.

// const scores = [89, 64, 42, 17, 93, 51, 26];
// // Change code below this line
// const bestScore = Math.max(...scores);
// const worstScore = Math.min(...scores);

// =================================================
// В переменных firstGroupScores, secondGroupScores и thirdGroupScores хранятся результаты тестирования отдельных групп. Используя распыление дополни код так, чтобы:

// В переменной allScores хранился массив всех результатов от первой до третьей группы.
// В переменной bestScore был самый высокий общий балл.
// В переменной worstScore был самый низкий общий балл.

// const firstGroupScores = [64, 42, 93];
// const secondGroupScores = [89, 14, 51, 26];
// const thirdGroupScores = [29, 47, 18, 97, 81];
// // Change code below this line
// const allScores = [...firstGroupScores, ...secondGroupScores, ...thirdGroupScores];
// const bestScore = Math.max(...allScores);
// const worstScore = Math.min(...allScores);

// =============================================
// В конструкторе можно создавать новые тесты, для которых есть настройки по умолчанию, которые хранятся в переменной defaultSettings. Во время создания теста, все или часть настроек можно переопределить, они хранятся в переменной overrideSettings.

// Для того чтобы получить финальные настройки теста, необходимо взять настройки по умолчанию и поверх них применить переопределённые настройки. Дополни код так, чтобы в переменной finalSettings получился объект финальных настроек теста.

// const defaultSettings = {
//     theme: "light",
//     public: true,
//     withPassword: false,
//     minNumberOfQuestions: 10,
//     timePerQuestion: 60,
//   };
//   const overrideSettings = {
//     public: false,
//     withPassword: true,
//     timePerQuestion: 30,
//   };
//   // Change code below this line
//   const finalSettings = {...defaultSettings, ...overrideSettings};

// =========================================================
// Напиши функцию makeTask(data) которая принимает один параметр data - объект со следующими свойствами.

// text - текст задачи.
// category - категория задачи.
// priority - приоритет задачи.
// Функция должна составить и вернуть новый объект задачи, не изменяя напрямую параметр data. В новом объекте должно быть свойство completed, значение которого хранится в одноимённой локальной переменной.

// В параметре data гарантированно будет только свойство text, а остальные два, category и priority, могут отсутствовать. Тогда, в новом объекте задачи, в свойствах category и priority должны быть значения по умолчанию, хранящиеся в одноимённых локальных переменных.

// function makeTask(data) {
//     return { category: "General", priority: "Normal", completed: false, ...data }
//     }
    

//   console.log(makeTask({}));
//   console.log (makeTask({ category: "Homemade", priority: "Low", text: "Take out the trash" }));
//   console.log(makeTask({ category: "Finance", text: "Take interest" }));
//   console.log(makeTask({ priority: "Low", text: "Choose shampoo" }));
//   console.log(makeTask({ text: "Buy bread" }));

// ========================================
// Используя операцию rest дополни код функции add() так, чтобы она принимала любое количество аргументов, считала и возвращала их сумму.

// // Change code below this line
// function add(...args) {
//     // Change code above this line
//     let total = 0;

//     for (let arg of args){
//         total += arg;
//     }
//     return total;
//   }

//   console.log(add(15, 27));
//   console.log(add(74, 11, 62, 46, 12, 36));

// ====================================================
// Функция addOverNum() считает сумму всех аргументов. Измени параметры и тело функции addOverNum() так, чтобы она считала сумму только тех аргументов, которые больше чем заданное число. Это число должно быть первым параметром функции.

// Change code below this line
// function addOverNum(firstNumber, ...args) {
//     let total = 0;
  
//     for (const arg of args) {
//         if (arg > firstNumber) {
//             total += arg;
//         }
//     }
//     return total;
//     // Change code above this line
//   }

//   console.log(addOverNum(50, 15, 27));
//   console.log(addOverNum(20, 74, 11, 62, 46, 12, 36));

// =========================================================================
// Функция findMatches() принимает произвольное количество аргументов. Первым аргументом всегда будет массив чисел, а остальные аргументы будут просто числами.

// Дополни код функции так, чтобы она возвращала новый массив matches, в котором будут только те аргументы, начиная со второго, которые есть в массиве первого аргумента.

// Например, findMatches([1, 2, 3, 4, 5], 1, 8, 2, 7) должна вернуть массив [1, 2], потому что только они есть в массиве первого аргумента.

// Change code below this line
// function findMatches(firstNumber, ...args) {
//     const matches = []; // Don't change this line
  
//     // Change code above this line
// for (let arg of args) {
//     if (firstNumber.includes(arg))
// matches.push(arg)
// }

//     return matches;
//   }

//   console.log(findMatches([1, 2, 3, 4, 5], 1, 8, 2, 7));
//   console.log(findMatches([63, 11, 8, 29], 4, 7, 16));

// EXAMPL

// function multiply(firstNumber, secondNumber, ...otherArgs) {
//     console.log(firstNumber); // Значение первого аргумента
//     console.log(secondNumber); // Значение второго аргумента
//     console.log(otherArgs); // Массив остальных аргументов
//   }
  
// //   multiply(1, 2);
// //   multiply(1, 2, 3);
//   multiply(1, 2, 3, 4);

// =============================================
// Добавь объекту bookShelf ещё два метода, которые пока что будут возвращать просто строки по аналогии с getBooks() и addBook(bookName).

// Метод removeBook(bookName) будет удалять книгу по имени. Возвращает строку "Deleting book <имя книги>", где <имя книги> это значение параметра bookName.

// Метод updateBook(oldName, newName) будет обновлять название книги на новое. Возвращает строку "Updating book <старое имя> to <новое имя>", где <старое имя> и <новое имя>это значения параметров oldName и newName соотвественно.

// const bookShelf = {
//     // Change code below this line
//     books: ["The last kingdom", "The guardian of dreams"],
//     getBooks() {
//       return "Returning all books";
//     },
//     addBook(bookName) {
//       return `Adding book ${bookName}`;
//     },

//     removeBook(bookName) {
//         return `Deleting book ${bookName}`;
//     },

//     updateBook(oldName, newName) {
//         return `Updating book ${oldName} to ${newName}`;
//     },
//     // Change code above this line
//   };

//   console.log(bookShelf.getBooks());
//   console.log(bookShelf.updateBook("Sands of dune", "Dune"));

// =============================================
// Дополни метод updateBook(oldName, newName) так, чтобы он изменял название книги с oldName на newName в свойстве books. Используй indexOf() для того, чтобы найти нужный элемент массива, и splice() для того чтобы заменить этот элемент

// const bookShelf = {
//     books: ["The last kingdom", "Haze", "The guardian of dreams"],
//     updateBook(oldName, newName) {
//       // Change code below this line
//   const bookIndex = this.books.indexOf(oldName);
//   this.books.splice(bookIndex, 1, newName);
  
  
//       // Change code above this line
//     },
//   };
//   bookShelf.updateBook("Haze", "Dungeon chronicles");
//   console.log(bookShelf.books);

// =================================================================================================
// Дополни метод addPotion(potionName) так, чтобы он добавлял зелье potionName в конец массива зелий в свойстве potions.
// const atTheOldToad = {
//     potions: ["Speed potion", "Dragon breath", "Stone skin"],
//     addPotion(potionName) {
//       // Change code below this line
//       this.potions.push(potionName)
  
//       // Change code above this line
//     },
//   };

//   console.log(atTheOldToad.potions);

//   atTheOldToad.addPotion("Invisibility");
//   console.log(atTheOldToad.potions);

// ======================================================================
// Дополни метод removePotion(potionName) так, чтобы он удалял зелье potionName из массива зелий в свойстве potions.

// const atTheOldToad = {
//     potions: ["Speed potion", "Dragon breath", "Stone skin"],
//     removePotion(potionName) {
//       // Change code below this line
//   this.potions.splice(this.potions.indexOf(potionName), 1);
  
  
//       // Change code above this line
//     },
//   };

//   console.log(atTheOldToad.potions);

//   atTheOldToad.removePotion("Dragon breath");
//   console.log(atTheOldToad.potions);

//   atTheOldToad.removePotion("Speed potion");
//   console.log(atTheOldToad.potions);

// ===========================================================================
// Дополни метод updatePotionName(oldName, newName) так, чтобы он обновлял название зелья с oldName на newName, в массиве зелий в свойстве potions.

// const atTheOldToad = {
//     potions: ["Speed potion", "Dragon breath", "Stone skin"],
//     updatePotionName(oldName, newName) {
//       // Change code below this line
//       this.potions.splice(this.potions.indexOf(oldName), 1, newName);
  
  
//       // Change code above this line
//     },
//   };

//   console.log(atTheOldToad.potions);

//   atTheOldToad.updatePotionName("Dragon breath", "Polymorth");
//   console.log(atTheOldToad.potions);

//   atTheOldToad.updatePotionName("Stone skin", "Invisibility");
//   console.log(atTheOldToad.potions);

// ============================================================================
// Заказчица хочет чтобы каждое зелье было представлено не только именем, но и ценой, а в будущем может быть и другими характеристиками. Поэтому теперь в свойстве potions будет храниться массив объектов со следующими свойствами.

// {
//   name: "Dragon breath",
//   price: 700
// }
// Выполни рефакторинг методов объекта atTheOldToad так, чтобы они работали не с массивом строк, а с массивом объектов.

// getPotions() - метод для получения всех зелий. Возвращает значение свойства potions.
// addPotion(newPotion) - добавляет зелье newPotion (уже объект) в массив в свойстве potions, но только если такого зелья еще нет в инвентаре. В противном случае возвращается строка.
// removePotion(potionName) - удаляет объект зелья с именем potionName из массива в свойстве potions.
// updatePotionName(oldName, newName) - обновляет свойство name объекта-зелья с названием oldName на newName в массиве potions.

// const atTheOldToad = {
//     potions: [
//       { name: "Speed potion", price: 460 },
//       { name: "Dragon breath", price: 780 },
//       { name: "Stone skin", price: 520 },
//     ],
//     // Change code below this line
//     getPotions() {
//       return this.potions;
//     },
//     addPotion(newPotion) {
//         for (let potion of this.potions){
//             if (potion.name === newPotion.name) {
//                 return `Error! Potion ${newPotion.name} is already in your inventory!`;
//               } 
//         }
//         this.potions.push(newPotion);
//     },
//     removePotion(potionName) {
//         for (let potion of this.potions) {
//             if (potion.name === potionName) {
//                 this.potions.splice(this.potions.indexOf(potion), 1)
//             } 
//         }
       
//         return `Potion ${potionName} is not in inventory!`;
//     },



//     updatePotionName(oldName, newName) {
//         for (let potion of this.potions) {
//             if (potion.name === oldName) {
//                 potion.name = newName
//             }
//         }
//         return `Potion ${oldName} is not in inventory!`;
//     },
//     // Change code above this line
//   };

//   console.log(atTheOldToad.getPotions());

//   atTheOldToad.addPotion({ name: "Invisibility", price: 620 });
//   console.log(atTheOldToad.potions);

//   atTheOldToad.addPotion({ name: "Power potion", price: 270 });
//   console.log(atTheOldToad.potions);

//   atTheOldToad.addPotion({ name: "Stone skin", price: 240 });
//   console.log(atTheOldToad.potions);

// atTheOldToad.removePotion("Draon breath");
// console.log(atTheOldToad.potions);

// atTheOldToad.updatePotionName("Dragon breath", "Polymorth");
// console.log(atTheOldToad.potions);

// atTheOldToad.updatePotionName("Stone skin", "Invulnerability potion");
// console.log(atTheOldToad.potions);

// // function foo() {
// //     console.log(arguments)
// // }

// // const foo2 = (...arguments) => {
// //     console.log(arguments)
// // } 

// // const foo3 = () => {
// //     console.log(arguments)
// // }
// // const book = {
// //     title: "The Last Kingdom",
// //     author: "Bernard Cornwell",
// //     genres: ["historical prose", "adventure"],
// //     isPublic: true,
// //     rating: 8.38,
// //   };
  
// //   book.pageCount = 836;
// //   book.originalLanguage = "en";
// //   book.translations = ["ua", "ru"];
  
// //   console.log(book.pageCount); // 836
// //   console.log(book.originalLanguage); // 'en'
// //   console.log(book.translations); // ['ua', 'ru']
// //   console.table(book)

// //   console.log(book['title'])
// //   book['title'] = "bnnmmj";
// //   console.table(book)

// const cars = [
//     { make: 'Honda', model: 'CR-V', type: 'suv', amount: 14, price: 24045, onSale: true },
//     { make: 'Honda', model: 'Accord', type: 'sedan', amount: 2, price: 22455, onSale: true },
//     { make: 'Mazda', model: 'Mazda 6', type: 'sedan', amount: 8, price: 24195, onSale: false },
//     { make: 'Mazda', model: 'CX-9', type: 'suv', amount: 7, price: 31520, onSale: true },
//     { make: 'Toyota', model: '4Runner', type: 'suv', amount: 19, price: 34210, onSale: false },
//     { make: 'Toyota', model: 'Sequoia', type: 'suv', amount: 16, price: 45560, onSale: false },
//     { make: 'Toyota', model: 'Tacoma', type: 'truck', amount: 4, price: 24320, onSale: true },
//     { make: 'Ford', model: 'F-150', type: 'truck', amount: 11, price: 27110, onSale: true },
//     { make: 'Ford', model: 'Fusion', type: 'sedan', amount: 13, price: 22120, onSale: true },
//     { make: 'Ford', model: 'Explorer', type: 'suv', amount: 6, price: 31660, onSale: false }
//   ];
//   // { 'suv': [{...}, {...}], 'sedan': [...], 'truck': [...] } 

//   // Task #11
// // { 'CR-V': { ... }, 'Accord': {...} }
// // { 'suv': [{...}, {...}], 'sedan': [...], 'truck': [...] } 

// const carsObj = cars.reduce((acc, car) => {
//     // acc[car.model] = { ...car }
//     return { ...acc, [car.model]: { ...car } }
// }, {})

// console.log(carsObj)
// console.log(carsObj['Accord'])
// const obj = {}
// 1
// obj['CR-V'] = {}



// const obj1 = cars.reduce((acc, car) => {
//     console.log({[car.model]:{...car}})

 
// }, {})


// Расставь отсутствующие this в методах объекта account.

// const account = {
//   owner: 'Mango',
//   balance: 24000,
//   discount: 0.1,
//   orders: ['order-1', 'order-2', 'order-3'],
//   changeDiscount(value) {
//     this.discount = value;
//   },
//   showOrders() {
//     return this.orders;
//   },
//   addOrder(cost, order) {
//     this.balance -= cost;
//     this.orders.push(order);
//   },
// };

// account.changeDiscount(0.15);
// console.log(account.discount); // 0.15

// console.table(account.showOrders()); // ['order-1', 'order-2', 'order-3']

// account.addOrder(5000, 'order-4');
// console.log(account.balance); // 19000
// console.table(account.showOrders()); // ['order-1', 'order-2', 'order-3', 'order-4']

// Исправь ошибки которые будут в консоли, чтобы скрипт заработал.

const inventory = {
  items: ['Knife', 'Gas mask'],
  add(itemName) {
    console.log(`Adding ${itemName} to inventory`);
console.log(this.items)
    this.items.push(itemName);
  },
  remove(itemName) {
    console.log(`Removing ${itemName} from inventory`);

    this.items = this.items.filter(item => item !== itemName);
  },
};

const invokeInventoryAction = function(itemName, action) {
  console.log(`Invoking action on ${itemName}`);
  action.call(inventory, itemName);
};

invokeInventoryAction('Medkit', inventory.add);
// Invoking action on Medkit
// Adding Medkit to inventory

console.log(inventory.items); // ['Knife', 'Gas mask', 'Medkit']

invokeInventoryAction('Gas mask', inventory.remove);
// Invoking action on Gas mask
// Removing Gas mask from inventory

console.log(inventory.items); // ['Knife', 'Medkit']


// const arr = [{ name: 'test', value: 1, children: [{ name: 'test2', value: 2, children: [{ name: 'test3', value: 3 }] }] }];
// // {test: 1, test2: 2, test3: 3}







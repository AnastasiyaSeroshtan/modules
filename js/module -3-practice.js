// напиши функцию которая будет суммировать соседние числа и пушить их в новый массив

// const someArr = [22, 11, 34, 5, 12, 13, 14, 15];

// function sum (array) {
//     const newArray = [];

//     for (let i = 0; i < array.length; i +=2) {
//         newArray.push(array[i] + array[i+1])  
//     }

//     return newArray
// }

// console.log(sum (someArr))

// ========================================

// Напишите решение, которое вычисляет сумму
// квадратных корней для всех чисел у которых квадратный корень будет целым числом и пушить числа в новый массив.

// const arr = [4, 3, 5, 16, 16, 33, 4, 9]

// console.log(4%Math.sqrt(4) === 0)

// function sum (array) {

//     let newArray = 0;

//     for (let elem of array) {
//         if (elem%Math.sqrt(elem) === 0) {
//             newArray += Math.sqrt(elem)
//         }
//     }
//     return newArray
// }

// console.log(sum (arr))

// =======================================

// Task 3
// Нужно перебрать объекты и вывести имя лучшего сотрудника

/*
 * Вызовы функции для проверки работоспособности твоей реализации.
 */
// console.log(
//   findBestEmployee({
//     ann: 29,
//     david: 35,
//     helen: 1,
//     lorence: 99,
//   })
// ); // lorence
// console.log(
//     findBestEmployee({
//         poly: 12,
//         mango: 17,
//         ajax: 4,
//     }),
// ); // mango
// console.log(
//     findBestEmployee({
//         lux: 147,
//         david: 21,
//         kiwi: 19,
//         chelsy: 38,
//     }),
// ); // lux

// function findBestEmployee (employees) {
//     const keys = Object.keys(employees)

//     console.log(keys)

//     const values = Object.values(employees)

//     console.log(values)

//     const a = Math.min(...values)

//     console.log("a=", a)

//     const b = values.indexOf(a)
// console.log('b=', b)

//     const maxValueInd = values.indexOf(Math.max(...values))

//     console.log("maxValueInd", maxValueInd)

//     return keys[maxValueInd]
// }

// Task 6
// У нас есть объект, в котором хранятся зарплаты нашей команды:

// let salaries = {
//   John: 100,
//   Ann: 160,
//   Pete: 130,
// };

let salaries = {}

console.log(getTotalSalariesValue(salaries))

// Напишите код для суммирования всех зарплат и сохраните результат в переменной sum. Должно получиться 390.
// Если объект salaries пуст, то результат должен быть 0.

function getTotalSalariesValue(salaries) {
    const values = Object.values(salaries)

    console.log(values)

    let sum = 0;

    for (let value of values) {
        sum += value;
    }

    return sum;

}




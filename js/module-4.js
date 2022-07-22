// const numbers = [5, 10, 15, 20, 25];

// const logMessage = (number, index) => {
//   console.log(`Индекс ${index}, значение ${number}`);
// };

// numbers.forEach(logMessage);

// function greet(name) {
//     return `Добро пожаловать ${name}.`;
//   }
  
//   // Вызываем функцию greet и выводим результат в консоль
//   console.log(greet("Манго")); // Добро пожаловать Манго.
  
//   // Выводим функцию greet в консоль не вызывая её
//   console.log(greet); // ƒ greet() { return `Добро пожаловать ${name}.`; }


// const students = [
//     { name: "Манго", score: 83, courses: ["математика", "физика"] },
//     { name: "Поли", score: 59, courses: ["информатика", "математика"] },
//     { name: "Аякс", score: 37, courses: ["физика", "биология"] },
//     { name: "Киви", score: 94, courses: ["литература", "информатика"] },
//   ];


//   const first = students.flatMap(student => student.courses);
//   console.log(first);

//   const second = first.filter((course, index, array) => array.indexOf(course) === index);
//   console.log(second);

//   const third = second.sort((a, b) => a.localeCompare(b));
//   console.log(third);

//   const uniqueSortedCourses = students
//   .flatMap(student => student.courses)
//   .filter((course, index, array) => array.indexOf(course) === index)
//   .sort((a, b) => a.localeCompare(b));

// console.log(uniqueSortedCourses); // ['биология', 'информатика', 'литература', 'математика', 'физика']





// const students = [
//     { name: "Манго", score: 83 },
//     { name: "Поли", score: 59 },
//     { name: "Аякс", score: 37 },
//     { name: "Киви", score: 94 },
//     { name: "Хьюстон", score: 64 },
//   ];

// const names = [...students].sort((a, b) => a.score - b.score).map(student => student.name);

// console.log(names); // ['Аякс', 'Поли', 'Манго', 'Киви']


// //   let array = [];

// //   for (let student of students) {
// //     array.push(student.name);
// //   }
// //   console.log(array);
  
//   const names = students.map(student => student.name);
//   console.log(names); // ['Манго', 'Поли', 'Аякс', 'Киви', 'Хьюстон']



// const students = [
//     { name: "Манго", score: 83, courses: ["математика", "физика"] },
//     { name: "Поли", score: 59, courses: ["информатика", "математика"] },
//     { name: "Аякс", score: 37, courses: ["физика", "биология"] },
//     { name: "Киви", score: 94, courses: ["литература", "информатика"] },
//   ];

// const sortedByAscendingScore = [...students].sort((a, b) => a.score - b.score);
// console.log(sortedByAscendingScore);


// const names = sortedByAscendingScore.map(student => student.name);

// console.log(names); // ['Аякс', 'Поли', 'Манго', 'Киви']



// const students = [
//     { name: "Манго", score: 83 },
//     { name: "Поли", score: 59 },
//     { name: "Аякс", score: 37 },
//     { name: "Киви", score: 94 },
//   ];
  
//   const inAscendingScoreOrder = students.sort(
//     (firstStudent, secondStudent) => firstStudent.score - secondStudent.score
//   );
//   console.log(inAscendingScoreOrder);
  
//   const inDescendingScoreOrder = students.sort(
//     (firstStudent, secondStudent) => secondStudent.score - firstStudent.score
//   );
//   console.log(inDescendingScoreOrder);
  
//   const inAlphabeticalOrder = students.sort((firstStudent, secondStudent) =>
//     firstStudent.name.localeCompare(secondStudent.name)
//   );
//   console.log(inAlphabeticalOrder);



// const temps = [14, -4, 25, 8, 11];

// // В консоли будет массив
// console.log(temps);
// // ❌ Так не сработает, потому что передаём целый массив
// console.log(Math.max(temps)); // NaN

// // В консоли будет набор отдельных чисел
// console.log(...temps);
// // ✅ Распылим коллекцию элементов как отдельные аргументы
// console.log(Math.max(...temps)); // 25

// console.log(...temps);

// const array = [...temps];
// console.log(array);


// const students = ["Вика", "Андрей", "Олег", "Юля", "Борис", "Катя"];

// console.log(students);
// console.log(...students);

// const inAlphabetOrder = [...students].sort((a, b) => a.localeCompare(b));
// console.log(inAlphabetOrder); // ['Андрей', 'Борис', 'Вика', 'Катя', 'Олег', 'Юля']

// const inReversedOrder = [...students].sort((a, b) => b.localeCompare(a));
// console.log(inReversedOrder); // ['Юля', 'Олег', 'Катя', 'Вика', 'Борис', 'Андрей']



// const scores = [61, 19, 74, 35, 92, 61, 56, 56];
// const descendingScores = [...scores].sort((a, b) => b - a);
// console.log(descendingScores); // [92, 74, 61, 56, 35, 19]



// const scores = [61, 19, 74, 35, 92, 56];
// const ascendingScores = [...scores].sort();

// console.log(scores); // [61, 19, 74, 35, 92, 56]
// console.log(ascendingScores); // [19, 35, 56, 61, 74, 92]



// const scores = [61, 19, 74, 35, 92, 56];
// const newArray = scores.sort();
// console.log(scores); // [19, 35, 56, 61, 74, 92]
// console.log(newArray);




// const tweets = [
//     { id: "000", likes: 5, tags: ["js", "nodejs"] },
//     { id: "001", likes: 2, tags: ["html", "css"] },
//     { id: "002", likes: 17, tags: ["html", "js", "nodejs"] },
//     { id: "003", likes: 8, tags: ["css", "react"] },
//     { id: "004", likes: 0, tags: ["js", "nodejs", "react"] },
//   ];
  
//   const getTags = tweets =>
//     tweets.reduce((allTags, tweet) => {
//       allTags.push(...tweet.tags);
  
//       return allTags;
//     }, []);
  
//   const tags = getTags(tweets);
  
//   // Вынесем callback-функцию отдельно, а в reducе передадим ссылку на нее.
//   // Это стандартная практика если callback-функция довольно большая.
  
//   // Если в объекте-аккумуляторе acc нету своего свойства с ключем tag,
//   // то создаем его и записывает ему значение 0.
//   // В противном случае увеличиваем значение на 1.
//   const getTagStats = (acc, tag) => {
//     if (!acc.hasOwnProperty(tag)) {
//       acc[tag] = 0;
//     }
  
//     acc[tag] += 1;
  
//     return acc;
//   };
  
//   // Начальное значение аккумулятора это пустой объект {}
//   const countTags = tags => tags.reduce(getTagStats, {});
  
//   const tagCount = countTags(tags);
//   console.log(tagCount);











// const students = [
//     { name: "Манго", score: {one: 1, two: 2} },
//     { name: "Поли", score: {one: 1, two: 2} },
//     { name: "Аякс", score: {one: 1, two: 2} },
//     { name: "Киви", score: {one: 1, two: 3} },

//   ];
  
//   // Название аккумулятора может быть произвольным, это просто параметр функции
// //   const totalScore = students.reduce((total, student) => {
// //     return total + student.score;
// //   }, 0);
  
// //   const averageScore = totalScore / students.length;

// //   console.log(averageScore);

// function totalScore(array) {
//     let total = 0;
//     for (let student of students) {
//         total +=student.score.two;
//     }
//     return total/students.length
// }

// console.log(totalScore(students))









// const students = [
//     { name: "Манго", courses: ["математика", "физика"] },
//     { name: "Поли", courses: ["информатика", "математика"] },
//     { name: "Киви", courses: ["физика", "биология"] },
//   ];
  
// //   students.map(student => student.courses);
// //   // [['математика', 'физика'], ['информатика', 'математика'], ['физика', 'биология']]
  
// //   students.flatMap(student => student.courses);
// //   // ['математика', 'физика', 'информатика', 'математика', 'физика', 'биология'];

// console.log(students[name])
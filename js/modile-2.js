// console.log(Number.isNaN('string'));
// console.log(isNaN('string'))



// function findProductOfNumber(number) {
//   let maxNumber = number[0];
//   let max1 = 0;
//   let max2 = 0;

//   for (i = 0; i <= number.length; i += 1){
//     if (number[i] > maxNumber) {
//       maxNumber = number[i];
//     }
   
//   }
 
//   max1 = maxNumber;
//   console.log("max1::", max1);

//   const number1 = number.splice(number.indexOf(max1), 1)

//   maxNumber = 0;

//   for (i = 0; i <= number.length; i += 1){
//     if (number[i] > maxNumber) {
//       maxNumber = number[i];
//     }
//   }
//   max2 = maxNumber;
//   console.log("max2::", max2);

//   return max1*max2;
// }



// findProductOfNumber([1, 3, 2, 2, 5, 0])

// console.log(findProductOfNumber([1, 3, 2, 2, 5, 0]))

function includes(array, value) {
  for (let i=0; i <= array.length; i+=1) {
    if(array[i] === value) {
      return true;
    }
  }
  return false
}

const array1 = includes(["Earth", "Mars", "Venus", "Jupiter", "Saturn"], "Jupiter");
console.log(array1);
// The following code returns a boolean representing whether or not num is even:
// const isEven = function (num) {
//   return num %2 === 0;
// }

// Testing num by returning values in new variables, then logging the outcome:
// const tenIsEven = isEven(10);
// const elevenIsEven = isEven(11);

// console.log(tenIsEven);
// console.log(elevenIsEven);



// The following code is a simplification of the above code, it doesn't plug the return values in new variables before logging the outcome:
const isEven  = function (num) {
  return num % 2 === 0;
}

console.log(isEven(10));
console.log(isEven(11));
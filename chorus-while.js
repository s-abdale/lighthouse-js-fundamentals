// While loop

// Exercise 1 - Print the chorus out 10 times:
// const chorus = "Let's dance!";
// let repeat = 0;
// while (repeat < 10) {
//   console.log(chorus);
//   repeat++;
// }
// console.log("Until the sun comes up!");


// Exercise 2 - Change key after 5 repetitions:
const chorus = "Let's dance!";
let repeat = 0;
while (repeat < 10) {
  if (repeat === 5) {
    console.log("*change key*");
  }
  console.log(chorus);
  repeat++;
}
console.log("Until the sun comes up!");
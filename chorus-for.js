// Exercise 1 - convert while loop to for loop
// This is the while loop:
/*
const chorus = "Let's dance!";
let repeat = 0;
while (repeat < 10) {
  console.log(chorus);
  repeat++;
}
console.log("Until the sun comes up!");
*/

// This is the for loop:
const chorus = "Let's dance!";
for (let repeat = 0; repeat < 10; repeat++) {
  console.log(chorus);
}
console.log("Until the sun comes up!");
// Format: for (variableDeclaration initializingPoint; endingPoint/whileCondition; iteration){action}
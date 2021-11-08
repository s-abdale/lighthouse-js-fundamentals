// Exercise 1
const raining = false;
const cold = false;
const temperature = 12;

// Method 1:
// if (raining) {
//   console.log("Don't forget your umbrella!");
// }

// if (cold) {
//   console.log("Make sure you pick out a scarf!");
// }

// console.log("Now you're ready to go outside!");



// Method 2:
// if (cold) {
//   console.log("Make sure you pick out a scarf!");
// }
// else {
//   console.log("Short sleeves are fine.");
// }



// Method 3:
if (temperature < 0) {
  console.log("Make sure you pick out a scarf!");
}
else if (temperature < 15) {
  console.log("Short sleeves won't cut it!");
}
else {
  console.log("Short sleeves are fine.");
}

console.log("Now you're ready to go outside!")



// Exercise 2
const isCitizen = true;
const age = 26;

if (isCitizen && age > 18) {
  console.log("You are eligible to vote.");
}



// Exercise 3
if (temperature < -40 || temperature > 40) {
  console.l0g("Maybe going outside isn't such a great idea...");
}



// Exercise 4
if (!raining) {
  console.log("Leave your umbrella at home!");
}
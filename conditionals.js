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

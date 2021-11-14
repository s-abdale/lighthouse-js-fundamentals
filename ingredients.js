const ingredients = ["eggs", "milk", "flour", "sugar", "baking soda", "baking powder", "chocolate chips", "bananas"];

// Write a while loop that prints out the contents of ingredients:
console.log("While loop of ingredients: ");
let o = 0;
while (o < ingredients.length) {
  console.log(ingredients[o]);
  o++;
}
// Write a for loop that prints out the contents of ingredients:
console.log("For loop of ingredients: ");
for (let i = 0; i < ingredients.length; i++) {
  console.log(ingredients[i]);
}
// Write any loop (while or for) that prints out the contents of ingredients backwards (that is, the first should be "bananas" and the last "eggs"):
console.log("Reversed for loop of ingredients: ");
for (let i = ingredients.length - 1; i >= 0; i--){
  console.log(ingredients[i]);
}
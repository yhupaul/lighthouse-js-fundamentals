const ingredients = ["eggs", "milk", "flour", "sugar", "baking soda", "baking powder", "chocolate chips", "bananas"];

let i = 0;
while (i < ingredients.length) {
  console.log(ingredients);
  i++;
}

for (let i = 0; i < ingredients.length; i++) {
  console.log(ingredients);
}

for (let i = 0; i < ingredients.length; i++) {
  let reversed = ingredients.reverse();
  console.log(reversed);
}
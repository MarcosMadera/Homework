const pizzaPlace = "That's amore!";
const numberOfToppings = 12;

console.log(pizzaPlace, typeof pizzaPlace);
console.log(numberOfToppings, typeof numberOfToppings);
// console.log("Pizza Place Name", pizzaPlace, "- Type", typeof pizzaPlace);
// console.log(
//   "Number of Toppings:",
//   numberOfToppings,
//   "- Type",
//   typeof numberOfToppings
// );

console.log(
  `Welcome to ${pizzaPlace}, where we are proud to offer ${numberOfToppings} mouth-watering toppings to choose from!`
);

if (numberOfToppings < 10) {
  console.log("Quality, not quantity.");
} else {
  console.log("A Whole lot of pizza.");
}

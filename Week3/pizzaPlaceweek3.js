let pizzaToppings = ["pepperoni", "bacon", "mushrooms", "onions"];

let index = 0;

function greetCustomer() {
  let greet = ("Welcome to Pizza House, our toppings are:");
  for (let topping of pizzaToppings) {
    greet += topping + ", ";
  }
}

function getPizzaOrder(size, crust, toppings) {
  let order = `One ${size} ${crust} crust pizza with ${toppings(", ")} coming up!`;
console.log(order);
let orderArray =  [size, crust, toppings];
return orderArray;
}

function preparePizza(order) {
  console.log("Cooking pizza");
}
  let pizza = {
    size: order[0],
    crust: order[1],
    toppings: order[2]
  };
  console.log(order);

  return pizza;

function servePizza(pizza) {
  console.log(`Order up! Here's your ${pizza.size} ${pizza.crust}crust pizza with ${pizza.toppings(", ")}. Enjoy!`
  );
}


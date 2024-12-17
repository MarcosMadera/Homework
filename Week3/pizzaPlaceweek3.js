let pizzaToppings = ["pepperoni", "bacon", "mushrooms", "onions"];

function greetCustomer() {
  let greet = "Welcome to Pizza House, our toppings are: ";
  for (let topping of pizzaToppings) {
    greet += `${topping}, `;
  }
  console.log(greet);
}
greetCustomer();

function getPizzaOrder(size, crust, ...toppings) {
  let order = `One ${size} ${crust} crust pizza with `;
  for (let topping of toppings) {
    order += `${topping}`;
  }
  order += ", ... coming up!";
  console.log(order);

  return [size, crust, toppings];
}

function preparePizza([size, crust, toppings]) {
  console.log("Cooking pizza");
  return {
    size: size,
    crust: crust,
    toppings: toppings
  };
}

function servePizza(pizza) {
  let message = `Order up! Here's your ${pizza.size}  ${pizza.crust} crust pizza with `;
  for (let topping of pizza.toppings) {
    message += `${topping}`;
  }
  message += "... Enjoy!";
  console.log(message);
  return pizza;
}
servePizza(preparePizza(getPizzaOrder("large", "thin", "pepperoni")));

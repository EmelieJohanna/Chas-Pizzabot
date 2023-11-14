const vegetarian = "Vegetarian Pizza";
const hawaiian = "Hawaiian Pizza";
const pepperoni = "Pepperoni Pizza";

const pizzaPrice = 80;

//Put your Javscript code here:

// FUNCTION 1!
// Check if input orderName matches any of the pizza variables. three if-statements
function checkOrderName(orderName) {
  orderName = orderName.toLowerCase();
  if (
    orderName == "vego" ||
    orderName == "vegetarian" ||
    orderName == "vegetarian pizza"
  ) {
    return vegetarian;
  } else if (
    orderName == "hawaiian" ||
    orderName == "hawaii" ||
    orderName == "hawaiian pizza"
  ) {
    return hawaiian;
  } else if (
    orderName == "pepperoni" ||
    orderName == "pepper" ||
    orderName == "pepperoni pizza"
  ) {
    return pepperoni;
  } else {
    alert("Sorry, we don't have that pizza. Please pick one from our menu.");
  }
}

// FUNCTION 2 !
// Calculation for total order price.
function totalCost(pizzaPrice, orderQuantity) {
  const numberOrderQuantity = parseFloat(orderQuantity);

  if (isNaN(numberOrderQuantity)) {
    console.log("Invalid answer, please try again!");
  } else {
    return pizzaPrice * numberOrderQuantity;
  }
}

// FUNCTION 3
// Calculate cooking time.
//1-2 pizzas: The pizzas will take 10 minutes.
//3-5 pizzas: The pizzas will take 15 minutes.
//6+ pizzas: The pizzas will take 20 minutes.

function cookingTime(orderQuantity) {
  let time;
  if (orderQuantity <= 3) {
    time = 10;
  } else if (orderQuantity >= 6) {
    time = 15;
  } else {
    time = 20;
  }
  return time;
}

//singular or plural value?
function sinOrPlu(orderQuantity) {
  if (orderQuantity > 1) {
    noun = "pizzas";
  } else {
    noun = "pizza";
  }
  return noun;
}

// KALLA PÅ DOM

// Adress the user, tell them the menu.
alert(
  "Hey! Happy to serve your pizza. On our menu we have " +
    vegetarian +
    ", " +
    hawaiian +
    ", and " +
    pepperoni
);

// Ask what pizza they want.
let orderName = prompt("Enter the name of the pizza you want to order today.");
console.log("OrderName: ", orderName);
let orderType = checkOrderName(orderName);

// Ask user how many pizzas.
let orderQuantity = prompt("How many of " + orderType + " do you want?");

let total = totalCost(pizzaPrice, orderQuantity);
let time = cookingTime(orderQuantity);
console.log(cookingTime);
let singularOrPlural = sinOrPlu(orderQuantity);

let finalMessage =
  "Great, I'll get started on your " +
  orderType +
  " right away, it will cost " +
  total +
  " kr. The " +
  singularOrPlural +
  " will take " +
  time +
  "minutes.";

alert(finalMessage);

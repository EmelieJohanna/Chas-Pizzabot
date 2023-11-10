const vegetarian = "Vegetarian Pizza";
const hawaiian = "Hawaiian Pizza";
const pepperoni = "Pepperoni Pizza";

const pizzaPrice = 80;

//Put your Javscript code here:

// Adress the user, tell them the menu.
alert(
  "Hey! Happy to serve your pizza. On our menu we have " +
    vegetarian +
    ", " +
    hawaiian +
    " , and " +
    pepperoni
);

// Ask what pizza they want.
// const orderName = prompt(
//   "Enter the name of the pizza you want to order today."
// );

// Ask user how many pizzas.
// const orderQuantity = prompt("How many of", orderName, "do you want?");

// Check if input orderName matches any of the pizza variables. three if-statements

// FUNCTION 1!

let orderName = prompt("Enter the name of the pizza you want to order today.");

function checkOrderName(orderName) {
  if (
    orderName.toLowerCase() === "vego" ||
    orderName.toLowerCase() === "vegetarian" ||
    orderName.toLowerCase() === "vegetarian pizza"
  ) {
    return vegetarian;
  } else if (
    orderName.toLowerCase() === "hawaiian" ||
    orderName.toLowerCase() === "hawaii" ||
    orderName.toLowerCase() === "hawaiian pizza"
  ) {
    return hawaiian;
  } else if (
    orderName.toLowerCase() === "pepperoni" ||
    orderName.toLowerCase() === "pepper" ||
    orderName.toLowerCase() === "pepperoni pizza"
  ) {
    return pepperoni;
  } else {
    return checkOrderName(
      console.log(
        "Sorry, we don't have that pizza. Please pick one from our menu."
      )
    );
  }
}

// FUNCTION 2 !
// Calculation for total order price.

let orderQuantity = prompt("How many of " + orderName + " do you want?");

function totalCost() {
  const numberOrderQuantity = parseFloat(orderQuantity);

  if (isNaN(numberOrderQuantity)) {
    console.log("Invalid answer, please try again!");
  } else {
    return pizzaPrice * numberOrderQuantity;
  }
}

// Calculate cooking time.
//1-2 pizzas: The pizzas will take 10 minutes.
//3-5 pizzas: The pizzas will take 15 minutes.
//6+ pizzas: The pizzas will take 20 minutes.

// FUNCTION 3

function cookingTime(orderQuantity) {
  if (orderQuantity <= 3) {
    time = 10;
  } else if (orderQuantity >= 6) {
    time = 15;
  } else {
    time = 20;
  }
  return time;
}

//singular or plural?

function sinOrPlu(orderQuantity) {
  if (orderQuantity > 1) {
    noun = "pizzas";
  } else {
    noun = "pizza";
  }
  return noun;
}

// KALLA PÅ DOM

let orderType = checkOrderName(orderName);
let total = totalCost();
let time = cookingTime(orderQuantity);
let sinOrPlu = sinOrPlu(orderQuantity);

let finalMessage =
  "Great, I'll get started on your " +
  orderName +
  " right away, it will cost " +
  totalCost +
  " kr. The " +
  noun +
  " will take " +
  time +
  "minutes.";
alert(finalMessage);

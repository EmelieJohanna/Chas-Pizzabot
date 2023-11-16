const vegetarian = "Vegetarian Pizza";
const hawaiian = "Hawaiian Pizza";
const pepperoni = "Pepperoni Pizza";

const pizzaPrice = 80;

//Put your Javscript code here:

// DOM
// Ready to order button
const btnReady = document.querySelector("#btnReady");
// Form div
const form = document.querySelector("#con1");
// Question elements
const quest1 = document.getElementById("quest1");
const quest2 = document.getElementById("quest2");
// Input elements
const inputEl1 = document.getElementById("input1");
const inputEl2 = document.getElementById("input2");
// Submit button
const buttonEl = document.getElementById("btn");
// Result element
const resultEl = document.getElementById("result");

// Adress the user, tell them the menu.
alert(
  "Hey! Happy to serve your pizza. On our menu we have " +
    vegetarian +
    ", " +
    hawaiian +
    ", and " +
    pepperoni
);

// Click function "Ready to order?"
btnReady.addEventListener("click", (e) => {
  form.classList.add("visible");
  form.classList.remove("hidden");
});

// Click function "Submit button"
buttonEl.addEventListener("click", () => {
  // Call on all functions
  let orderType = checkOrderName(inputEl1.value);
  let total = totalCost(pizzaPrice, inputEl2.value);
  let time = cookingTime(inputEl2.value);
  let singularOrPlural = sinOrPlu(inputEl2.value);

  let finalMessage =
    "Great, I'll get started on your " +
    orderType +
    " right away, it will cost " +
    total +
    " kr. The " +
    singularOrPlural +
    " will take " +
    time +
    " minutes.";
  if (orderType) resultEl.textContent = finalMessage;
});

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

// FUNCTION 2!
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
  } else if (orderQuantity <= 6) {
    time = 15;
  } else {
    time = 20;
  }
  return time;
}

// singular or plural value?
function sinOrPlu(orderQuantity) {
  if (orderQuantity > 1) {
    noun = "pizzas";
  } else {
    noun = "pizza";
  }
  return noun;
}

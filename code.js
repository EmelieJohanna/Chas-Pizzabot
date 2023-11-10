const vegetarian = "Vegetarian Pizza";
const hawaiian = "Hawaiian Pizza";
const pepperoni = "Pepperoni Pizza";

//opening
const menu =
  "Hey! Happy to serve your pizza. On our menu we have " +
  vegetarian +
  ", " +
  hawaiian +
  " , and " +
  pepperoni;

alert(menu);

//part 1 what pizza?

debugger;
function checkOrderName(orderName) {
  const userInput = prompt(
    "Enter the name of the pizza you want to order today."
  );
  if (userInput === "hawaiian" || "hawaii" || "hawaiian pizza") {
    return (checkOrderName = hawaiian);
  } else {
    return checkOrderName(
      console.log("Sorry, we don't pizza. Please pick one from our menu.")
    );
  }
}

console.log(checkOrderName());

//part 2 how many pizza? How much cost?

//part 3 how long cooking time

while ((orderQuantity = false)) {
  if (orderQuantity >= 1) {
    cookingTime = 10;
  } else if (orderQuantity >= 3) {
    cookingTime = 15;
  } else if (orderQuantity >= 6) {
    cookingTime = 20;
  } else {
    return orderQuantity;
  }
}

//part 4

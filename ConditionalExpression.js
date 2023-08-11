// if else

"<repl>";
const prompt = require("prompt-sync")();
let a = prompt("Hey What is your age?: ");
a = Number.parseInt(a); // Converting the string to a number
if (a > 0) {
  alert("This is a valid age");
} else {
  alert("This is an invalid age");
}
// Primitive Type
// Number,String,undefined,null

//if else if

let a = prompt("Hey What is your age?: ");
a = Number.parseInt(a);
if (a < 0) {
  alert("This is an invalid age");
} else if (a < 9) {
  alert("You are a kid and you can not even think of driving");
} else if (a < 18 && a >= 9) {
  alert("You are a kid and you can  even think of driving after 18");
} else {
  alert("You can now drive as you are above 18");
}
console.log("Done");

// Homework - Explore Switch Statement and write a basic program in the comments

const expr = "papayas";
switch (expr) {
  case "oranges":
    console.log("Oranges are 5rs.");
    break;
  case "Mangoes":
  case "Papayas":
    console.log("Mangoes and papayas are 100rs.");
    break;
  default:
    console.log('Sorry we are out of {expr}.');
}


// Ternary Operator

//condition? exp1 : exp2


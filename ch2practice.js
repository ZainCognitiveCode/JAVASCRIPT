// Ch2 Practice set
// Problem 1

/*
"<repl>";
const prompt = require("prompt-sync")();
let age = prompt("What is your age?");
age = Number.parseInt(age);
if(age>10 && age<20){
    console.log("Your age lies between 10 and 20");

}
else{
    console.log("Your age doe not lies between 10 and 20");
}
*/

// Problem 2
/*
"<repl>";
const prompt = require("prompt-sync")();
let age = prompt("What is your age?: ");
age = Number.parseInt(age);
 switch(age){
    case 12:
        console.log("Your age is 12")
        break;
        case 13:
        console.log("Your age is 13")
        break;
        case 14:
        console.log("Your age is 14")
        break;
        case 15:
        console.log("Your age is 15")
        break;
        default:
            console.log("Your age is not special")
 }

*/

// Problem 3
/*
"<repl>";
const prompt = require("prompt-sync")();
let num = prompt("What is your number?: ");
num = Number.parseInt(num);
if(num%2==0 && num%3==0){
    console.log("Your number is divisible by 2 and 3")
}
else{
    console.log("Your number is not divisible by 2 and 3")
}
*/

// Problem 5
//Ternary Operator

let age= 15
let a= age>18? "You can drive": "You can't drive."
console.log(a)
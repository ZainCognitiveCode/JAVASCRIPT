// Ch3
// For Loops
// Program to add first n natural numbers


"<repl>";
const prompt = require("prompt-sync")();
let sum=0
let n= prompt("Enter the value of n: ")
n = Number.parseInt(n)
for(let i=0; i<n; i++){
    sum +=(i+1)
    console.log((i+1), "+")
}
console.log("Sum of first " + n + " Natural number is " + sum)

// use if (let i=0; than it will be i<n-1; i++), where n is any number

"<repl>";
const prompt = require("prompt-sync")();
let Factorial=0
let n= prompt("Enter the value of n: ")
n = Number.parseInt(n)
for(let i=0; i<n; i++){
    Factorial +=(i*2)
    console.log((i*2), "+")
}
console.log("Product of first " + n + " Natural number is " + Factorial)


// For-in Loops


let obj ={
    harry: 90,
    Zain: 45,
    Subhan: 56,
    Bilal: 23,
}
for(let a in obj){
    console.log("Marks of " + a + " are " + obj[a])
}
// where obj[a] is used to accessthe keys of string a.




//for-off Loop
for(let b of "Harry"){
    console.log(b)
}







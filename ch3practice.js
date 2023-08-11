// CH3 Practice

// Problem 1
let marks = {
    harry : 90,
    zain : 45,
    Bilal : 56,
    Monica : 4

}
for(let i=0; i<Object.keys(marks).length; i++){
    console.log("The marks of " + Object.keys(marks)[i] + " are " + marks[Object.keys(marks)[i]])
}

// Problem 2
for(let key in marks){
    //console.log("The marks of " + key + "are" + marks[key])
    console.log("The marks of " + Object.keys(marks)[i] + " are " + marks[Object.keys(marks)[i]])
}

 //Problem 3
"<repl>";
const prompt = require("prompt-sync")();
let correct = 43
let i
while(i!=correct){
i = prompt("Enter a number: ")

}
console.log("You have entered a correct number")

// Problem 4

const mean = (a,b,c,d)=>{
    return (a+b+c+d)/4
}
console.log(mean(4,5,6,7))

// Ch4 Practice
// Q1

let str = "Har\""
console.log(str.length)

// Q2
const sentence = 'The quick brown fox jumps over the lazy dog.';
const word= 'fox';
console.log(sentence.includes(word))
console.log(`The word "${word}" ${sentence.includes(word)? 'is' : 'is not'} in the sentence`);
// ye aisay kaam karay ga kay agar word includ hota h to is warna is not print karay ga.

// Q3
let string = "I am your friend";
console.log(string.startsWith("I"))
console.log(string.endsWith("friend"))

// Q4
let str1= "Please give Rs 1000"
let amount = str1.slice("Please give Rs".length)
console.log(amount)
console.log(typeof amount)

// Q5
let fr2 = "Harish"
fr2[3] = "R"
console.log(fr2)
// fr2 is not changed because Strings are immutable.






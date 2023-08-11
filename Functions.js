// Functions

let a= 1;
let b =2;
let c =3;
function onePlusAvg(x,y){
    console.log("Done")
    return (1 + (x+y)/2)  
}
console.log("One Plus Average of a and b is ",onePlusAvg(a,b))
console.log("One Plus Average of c and b is ",onePlusAvg(b,c))
console.log("One Plus Average of a and c is ",onePlusAvg(a,c))
// Hum jo value x and y ki use krna chahtay han,wo hum denote kr dein gay bracket mein(a,b),(b,c)
// It is not compulsory to write parameters
// Functions can be made without arguments

const sum =(p,q) =>{
    return p+q
}
console.log(sum(9,7))
// it is another way to use function.


const hello= ()=>{
    console.log("How are you? ")
    
}
hello();
// is function mein hello kuch return nhi kr raha to hum isko aledha sy bi return kr skty han jaisy hello(); outside the paramter.


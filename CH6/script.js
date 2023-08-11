console.log("Log")
console.info("This is an important")
console.warn("Zain!")
console.error("error")
console.assert("err" !=false)
console.assert("err" ==false)
console.time("starting")
console.timeEnd("starting")

console.time("forLoop")
for(let i=0; i<500; i++){
    console.log(233)
}
console.timeEnd("forLoop")

console.time("WhileLoop")
let i=0;
while(i<500){
    console.log(233)
    i++;
}
console.timeEnd("WhileLoop")


// Advantages of using separate script file using src attribute of script tag
//1. Separation of concerns
//2. Browser Caching
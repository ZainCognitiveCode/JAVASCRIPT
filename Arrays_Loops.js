let num  = [3,54,1,2,4]
for(let i=0; i<num.length; i++){
    console.log(num[i])
}


// For each Loop
num.forEach((Element)=>{
    console.log(Element*Element)
})


//  Array.from
let name = "Harry"
let arr = Array.from(name)
console.log(arr)


// For of Loop  it will return every element of num
for(let i of num){
   console.log(i)
}

// For in Loop  // In array,it will return keys as 0,1,2,3,4

for(let i in num){
    console.log(num[i])
}

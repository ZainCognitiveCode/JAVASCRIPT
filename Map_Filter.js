// Array map Method

// map creates a new array by performing some operation on each array element.
// map has three things, one is value, seconfd index and third is array
let arr= [45,23,21]
let a = arr.map((value, index, array)=>{
    console.log(value, index, array)
    return value + index
})
//console.log(a)
//console.log(arr)

// Filter Method
let arr2 = [45,23,21,0,3,5] 
let a2 = arr2.filter((a)=>{      // where a is the name of the function
    return a<10         // the values less than 10 will be printed
})
//console.log(a2, arr2)

// These functions do not modify our original arrays

// Array Reduce Methods

let arr3 = [1,2,3,5,2,1]
let newarr3 = arr3.reduce((h1, h2)=>{      // where we have designed a function of name h1, h2
        return h1 + h2
})
console.log(newarr3) // This function will add first two values as we have assigned and add their reuslt to the next value and so on. just like 1+2=3 and now 3+3=6 and so on. Reduce the array by adding values and giving 1 value only.


//we can also do like this
const reduce_func = (h1,h2)=>{
    return h1 + h2
}
let newarr3  = arr3.reduce(reduce_func)
console.log(newarr3)


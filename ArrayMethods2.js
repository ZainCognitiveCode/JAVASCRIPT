//let num = [1, 2, 3, 4, 5, 6, 7, 8, 9];
//let num_more = [11, 12, 13, 14, 15, 16, 17, 18, 19];
//delete num[0]
//console.log(num.length)

//let newArray = num.concat(num_more)
//console.log(newArray)
//console.log(num, num_more)

// Sort Method
let compare = (a, b)=>{
    return a - b        // for Descending, reverse the b - a
}
//let num = [21, 32, 53, 74, 15, 26, 77, 58, 99];
//num.sort(compare)
//num.reverse()   // reverse the array
//console.log(num) //It will work as alphabetically. Mean ky pehly 1 wali values, phir 2 wali values aur phr so on

// Splice and Slice
let num = [1, 2, 3, 4, 5, 6, 7, 8, 9]
//let deletedValues = num.splice(2,3,1034,1045,1024,1046)
//console.log(typeof deletedValues)

//let newNum = num.slice(3)
let newNum = num.slice(3,6)
console.log(newNum ) //it does not modify the array,rather we have to create an array for our own sake.








// Array is a collection of items.
// We can access them by indexing.
// We can also print other things in array
/*
let marks_class_12 =[91,92,83,84, null]

marks_class_12[5]=77 // Adding a new value to the array
marks_class_12[1]=77 // Changing a value of existing array
console.log(marks_class_12[0])
console.log(marks_class_12[1])
console.log(marks_class_12[2])
console.log(marks_class_12[3])
console.log(marks_class_12[4])
console.log(marks_class_12[5]) 
console.log(marks_class_12)
console.log(typeof marks_class_12 )

// Length of array
console.log("The length of marks_class_12 is", marks_class_12.length)

*/
// Use of For Loop

let marks_class_12 =[91,92,83,84, null]
for(let a in marks_class_12 ) {
console.log("Marks ", + marks_class_12[a]    )
}




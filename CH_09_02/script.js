// fullfilled ka matlab ky usny apna kaam pora kr dia ha
// resolve value de ge ur reject jb ho ge to error de ge.
let p1 = new Promise((resolve, reject) => {
    console.log("Promise is pending")
    setTimeout(() => {
        //console.log("I am promised and I am resolved")
        resolve(true)
        
    },5000)
})
let p2 = new Promise((resolve, reject) => {
    console.log("Promise is pending")
    setTimeout(() => {
        //console.log("I am promised and I am rejected")
        reject(new Error(" I am an error"))
    },5000)
})

// To get the value
p1.then((value) => {
    console.log(value)
})

// To catch the error
// p2.catch((error) => {
//     console.log("Some error occurred in p2")
// })

p2.then((value) => {
    console.log(value)
}, (error) => {
    console.log(error)
})

// promise agar 50 han to wo parallely execute ho jain gay.
// hum then sy value hasil krty han, ur catch sy error catch krty han.

// fullfilled ur rejected 2 states han.



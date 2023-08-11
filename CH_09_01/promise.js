// The soultion to callback hell is promises.
// A promise is a promise of code execution.

// resolve(value) if the job is finished successfully.
// reject(error) if the job fails

let promise = new Promise(function (resolve,reject) {
  alert("Hello")
  resolve(56)
})

console.log("Hello One")
setTimeout(function () {
   console.log("Hello in 2sec")
}, 2000)

console.log("My name is " + "Hello Three")
console.log(promise)

// Fetch google.com homepage ==> console.log("google.com homepage done")
// Fetch data from the data api
// Fetch pictures from the server
// print downloading
// Rest of the script

// promise ka mtlab ye ha ky humain isky poray honay ka wait nakrna paray,balkay hum apnay baki kaam krty rahain ur ye apna kaam kr ky humain output de de.


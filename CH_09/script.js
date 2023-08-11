// asynchronus actions are the actions that we initiate now and they finsih later
// set time synchronus actions are the actions that initate and finish one by one


// Synchronus Programming
// let a = prompt("What is your name?");
// let b = prompt("What is your age?");
// let c = prompt("What is your favorite color?");
// console.log(a + " is " + b + " years old and has " + c + " favorite color.");

// Asynchronus Programming

// console.log("Start")
// setTimeout(function()  {
//     console.log("Hey I am Good");
// },3000
// )
// console.log("End")

// Callbacks Functions

function loadScript(src, callback) {
    var script = document.createElement("script");
    script.src = src;
    script.onload = function () {
        console.log("Loaded script with SRC: " + src);
        callback(null, src);
    }
    script.onerror = function () {
        console.log("Error loading script with SRC: " + src);
        callback(new Error("Src got some error"))
    }
    document.body.appendChild(script);
}

function hello(error, src) {
    if (error) {
        console.log(error)
        return
    }
    alert("Hello world" + src);
}
function goodmorning(error, src) {
    if (error) {
        console.log(error)
        return
    }
    alert("Good morning" + src);
}

loadScript("https://cdn.jsdelivr.nets/npm/bootstrap@5.3.1/dist/js/bootstrap.bundle.min.js", goodmorning)
 
// Pyramid of Doom: mean bootstrap 1 load ho jaye to agay walay bootstrap ko load krna. ye pyramid of doom ha.
// ye reading ky liye acha nhi

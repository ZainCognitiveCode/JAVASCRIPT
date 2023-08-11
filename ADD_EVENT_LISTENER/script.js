
let x = function(event){
     console.log(event.target)
    console.log(event.type, event.clientX, event.clientY)
     alert("Hello World!")
}

// let y = function(e){
//     console.log(e)
//     alert("Hello World 2!")
// }
btn.addEventListener('click', x )
// btn.addEventListener('click', y)
// let a = prompt("What is your favorite no?");

// if(a=="2"){
//     btn.removeEventListener('click',x)}
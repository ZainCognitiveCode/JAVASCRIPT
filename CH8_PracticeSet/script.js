// document.getElementsById("google").addEventListener("click", function(){
//     window.location = "https://www.google.com";
//     window.focus();
// })

// setInterval( async function(){
//      let url = "https://jsonplaceholder.typicode.com/todos/1"
//      console.log(await fetchContent(url))
// },300)

setInterval(async function(){
    document.querySelector("#bulb").classList.toggle("bulb")
},300)
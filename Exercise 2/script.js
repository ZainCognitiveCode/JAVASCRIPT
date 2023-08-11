// Create Snake, water & Gun game in js
// The game should ask you to enter S,W or G. The computer should be able to randomly generate S,W or G and declare win or loss using alert.
// Use alert, prompt and confirm where ever required!


let user = prompt("Enter S,W or G")
let cpu1 = Math.floor(Math.random() *3);
let cpu = ["S", "W", "G"][cpu1]

const match=(cpu,user)=>{
    if(cpu===user){
        return "Nobody is winner"
    }
    else if(cpu==="S" && user==="W"){
        return "cpu"
    }
    else if(cpu==="S" && user==="G"){
        return "user"
    }
    else if(cpu==="G" && user==="W"){
        return "user"
    }
    else if(cpu==="G" && user==="S"){
        return "cpu"
    }
    else if(cpu==="W" && user==="S"){
        return "user"
    }
    else if(cpu==="W" && user==="S"){
        return "cpu"
    }
}
let result= match(cpu,user)
document.write(`Cpu:${cpu} <br> User:${user} <br> The winner is:  ${result.toUpperCase}`)


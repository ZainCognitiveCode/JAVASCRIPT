
// First Case
"<repl>";
const prompt = require("prompt-sync")();
let day = prompt("What is today's Date? : ");
day = Number.parseInt(day);
switch (day){
    case 0:
        console.log("Today is Monday");
        break;
        case 1:
        console.log("Today is Tuesday");
        break;
        case 2:
        console.log("Today is Wednesday");
        break;
        case 3:
        console.log("Today is Thursday");
        break;
        case 4:
        console.log("Today is Friday");
        break;
        case 5:
        console.log("Today is Saturday");
        break;
        case 6:
        console.log("Today is Sunday");
        break;
        default:
        console.log("Enter the Valid Week Day");
        break;
}



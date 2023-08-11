
let runAgain = true;

const canDrive = (age) => {
    return age >= 18 ? true : false;
  };
while (runAgain) {
    let age = prompt("Enter your age");
age = Number.parseInt(age);
if(age<0){
    console.error("Please enter a valid age");
    break;
}
  
  if (canDrive(age)) {
    alert("Yes You can drive");
  } else {
    alert(" You can't drive");
  }
  runAgain = confirm("Do you want to play again?")
}

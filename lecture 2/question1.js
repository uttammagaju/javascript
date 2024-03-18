//Get user to input a number using promot("enter a number"). Check if the number is a multiple of 5 or not.
let number = prompt("Enter the number")
if (number%5==0){
    console.log("The given number is", number +" multiple of 5");
}
else {
    console.log("The given number is not multiple of 5");
}
// WAP to check if a number is 3 digit number or not.

let num = parseInt(prompt("Enter a number"));
if (num >= 100 && num < 1000){
    console.log(num  + "is a 3 digit number");
}
else {
    console.log(num + "is not a 3 digit number");
}
// WAP to check if a number is divisible by 7 or not.

let num = 2;
if (num % 7 == 0 ){
    console.log('Number is divisible by 7');
}
else{
    console.log('Number is not divisible by 7');
}   



// WAP to check if a number is divisible by 7 or not from users input

let nu = parseInt(prompt("Enter a positive number")); // Input from the user.

if (nu % 7 == 0){
    console.log(nu + "is divisible by 7");    
}
else{
    console.log(nu + "is not divisible by 7");
}
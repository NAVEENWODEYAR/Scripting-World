// WAP to check if a numbers is having 4 at the unit's place or not.

let num = prompt("Enter a number");

if (num % 10 === 0){
    console.log(num  + "ends with 4");
}
else{
    console.log(num + "does not end with 4");
}
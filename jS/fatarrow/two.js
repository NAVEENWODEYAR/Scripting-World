// Basic function with return statemwnt.,

function add(a,b) {
    console.log("Function with return statement!");
    // return a+b;
    return (a+b);
}
let r = add(1,1);
console.log(r);

// Same function with fatarrow function., 

let a = (a,b) => {
    console.log("Fatarrow function with return statement!");
    return a+b;
}
let ra = a(2,2);
console.log(ra);


// Fatarrow function with single statement .,
let s = () => console.log("Good Luck");
s();

// Fatarrow function witout () in the case of single parameter., 
const msg = name => {
    console.log("Hello");
    console.log(name);
}
msg("bob");
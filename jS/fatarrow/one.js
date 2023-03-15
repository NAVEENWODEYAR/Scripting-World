// Fatarrow Creation.,

// Basic function declaration and calling it .,

function add(a,b) {
    console.log("Addition of two numbers");
    console.log(a+b);
}
add(1,1);

// Same function with fatarrow.,
let a = (a,b) => {
    console.log("Addition of two numbers!");
    console.log(a+b);
}
a(2,2);
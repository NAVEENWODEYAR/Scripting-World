// Function with single statement and single return.
function add(a,b) {
    console.log("addition of numbers");
    return a+b;
}
let r = add(2,2);
console.log(r);

// Function with single statement and statement return.,


function add(a,b){
    return a+b;
}
add(1,1);

// using the same function in fatarrow in 2 line of ConvolverNode.apply, 
let adda = (a,b) => (a+b);

console.log(adda(2,3));
// Function overriding conflicts are resolved using fartarrow., 

function one () {
    console.log("Good Morning");
}
one();

function one () {
    console.log("Good Night");
}
one();


// Using the same function with fatarrow., 

var one = () => {
    console.log("Good Morning");
}
one();

var one = () => {
    console.log("Good Night");
}
one();


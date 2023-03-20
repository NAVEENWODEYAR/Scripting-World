// Javascript program to check weather a given object is empty or not empty.. 

let ab = { id:100, name:'Bhas', id:102, name:'Monu',id:105, name:'A'};        // Creating a new object,

console.log("Printing the object");                     // We can't print the objects in the browser directly,

console.log(ab);

console.log(Object.values(ab).length);              // Checking the length of the object by converting it to array.

console.log(Object.keys(ab).length);
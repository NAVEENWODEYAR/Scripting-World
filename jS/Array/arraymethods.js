// Array methods or functions. 

let aa = [1,2,3,4,5,6,7,8,9,10];
let ab = ['one','two','three','four','five','six','seven','eight'];

// Sorting elements of the array 
console.log(ab.sort());

// Reverese order of array Element. 
console.log(ab.reverse());

// Joining array element. 
console.log(ab.join("-"));

//  Adding the elements at the end of the array. 
console.log(aa.push(5));
console.log(aa);

// Adding elements at  the begining of the array.
console.log(aa.unshift(0));
console.log(aa);

// Removing elements at the end of the array.
console.log(aa.pop);
console.log(aa);

// Removing elements at the begining of the array.
console.log(aa.shift(1));
console.log(aa);

// Joining arrays. 
console.log(aa.concat(ab))

// Removing at a particulau position and inserting elements.
let q = [0,1,2,3,4];
console.log(q.splice(1,2,100));
console.log(q);

console.log(q.slice(1,2));
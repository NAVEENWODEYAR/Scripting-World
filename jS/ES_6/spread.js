
let arr1 = [1,3,5,7,9];
let arr2 = [2,4,6,8];

 let arr = [...arr1,...arr2];
console.log(arr);

// [...] acts as spread & rest operator

export let arr3 = [...arr2,'one',...arr1];
console.log(arr3);

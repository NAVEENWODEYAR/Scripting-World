//  method allows you to run a function on each item in the array, returning a new array as the result.

let arr = [1,2,3,4,5,6,7,8,9];
 let new_Arr =   arr.map((a)=> a*a);

 // for in    
 for (let a  in arr) 
    {
        console.log(a);
        console.log(arr[a]);
            
        }
    
// // map()
//  console.log("*******");
//  new_Arr.forEach(element => {
//     console.log(element);
//  });
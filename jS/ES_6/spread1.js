// [...] in objects

import { arr3 } from "./spread.js";

let a = {cname:"Mustang",model:2024};
let b = {company:"Ford",type:"XUV",price:{base:"60L",mid:"80L",top:"1Cr"}};

// let car = {...a, ...b}
console.log({...a,...b})

// imported from the spread
console.log(arr3);
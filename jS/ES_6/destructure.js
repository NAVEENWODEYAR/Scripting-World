// Destructuring makes it easy to extract only what is needed.
var a,b;
function calculate(a,b) 
{
    const add = a+b;
    const sub = a-b;
    const mul = a*b;
    const div = a/b;
    const mod = a%b;

    return [add,sub,mul,div,mod];
}
let [add,sub,mul,div,mod] = calculate(2,4);
console.log([add,sub,mul,div,mod]);
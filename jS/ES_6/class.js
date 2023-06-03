
class Test 
{
    constructor(reg_No)
    {
        this.id = reg_No;
    }

     add_No = (a,b) =>  a+b
}
let obj = new Test(12345);
console.log(obj.id);
console.log("Sum of the numbers-s",obj.add_No(4,5));
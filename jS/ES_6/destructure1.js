// Destructuring makes it easy to extract only what is needed.
let emp = {ename:"Bhaskar",id:1646,designation:"Manager",sal:98645, address:{no:67,building:"RadhaKrishna Nilaya",state:"KA"}};
let{ename,id,designation,sal,address} = emp;
let{no,building,state} = address;
    console.log(ename);
    console.log(building);
    console.log(state);
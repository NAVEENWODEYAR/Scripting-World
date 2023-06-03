// ES_6 variables can be declared using let, var, const

    // var has global scope
    let n = 10
    for (var i=0; i<=n; i++)
    {
        console.log(i);
        // return i;
    }
    console.log(i);

    // let has global scope
    for (let a=0; a<5; a++)
    {
        console.log(a);
    }
    // console.log(a);
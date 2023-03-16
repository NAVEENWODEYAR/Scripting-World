// this in fatarrow function.,

// function wish() {
//     console.log(this);
// }
// wish();


 // Object with this.,

 let ob = {
    name : "Bhas",
    role : "Executive",
    sal : 100000,       
    show : function() {

        console.log(`The name is ${this.name} \n The Role is ${this.role} \nSalary is ${this.sal} `);
    //     console.log(this.name);
    //     console.log(this.role);
    //     console.log(this.sal);
    }

 }
 ob.show();
 //console.log(ob);
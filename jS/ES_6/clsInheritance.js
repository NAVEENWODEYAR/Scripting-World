
class Car
{
    constructor(carBrand)
    {
        this.name = carBrand;
    }

    about_Car = () => "SUV";
}

class Model extends Car
{
    constructor(carBrand,modelName)
    {
        super(carBrand)
        this.name = modelName;
    }
    
}
    let obj = new Model("Ford","Mustang");
    console.log("Inheritance enables cosde re-usability!");
    // console.log(super.name);
    console.log(obj.name);
    console.log(obj.name);
    console.log(obj.about_Car());
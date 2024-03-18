 // Prototypes in js
// A javaScrit object is an entity having state and behaviour(Proporties and method) 
//-----direct view of object

console.log("test");
const student = {
    fullname : "uttam Magaju",
    marks: 80,
    printMarks : function (){
        console.log("marks =", this.marks);
    }
}

//Js object have a special property called prototype.

//-----To create own prototype
const employee = {
    calcTax() {
        console.log("tax rate is 10%")
    },
    calcTax2 : function () {
        console.log("tax rate is 5%"); 
    }
}

const karanArjun = {
    salary : 50000,
};
const karanArjun2 = {
    salary : 50000,
};
//We can set prototype using __proto__
karanArjun.__proto__ = employee
karanArjun2.__proto__ = employee

//-----note
//if object and prototype have same method, object's method will be used.
const KaranArjun3 = {
    salary: 50000,
    calcTax(){//this method is run
    console.log("Tax rate is 20% ");
    }
}
//If we want to add new methods or properties in the existing object then use proto.
employee.proto = {
    fullName : "Karan Arjun" ,
    printFullName(){                
        console.log(`My name is ${this.fullName}`);
    }
}

employee.printFullName();
karanArjun.printFullName();
karanArjun2.printFullName();

//Classes in JS
// Class is a program-code template for creating objects.
// Those objects will have some state (variables) & some behaviour (function) inside it.

//example
class ToyotaCar{
    constructor(brand){
        this.brand = brand; //state of an object
        console.log("creating new object");
    }
    start(){
        console.log("start");
    }
    stop(){
        console.log("stop");
    }
}

let fortuner = new ToyotaCar("fortuner");
let lexus = new ToyotaCar("lexus");
fortuner.start

//con
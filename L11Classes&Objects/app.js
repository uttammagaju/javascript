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

// employee.printFullName();
// karanArjun.printFullName();
// karanArjun2.printFullName();

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


//constructor 

//inheritance
class Parent{
    hello(){
        console.log("hello");
    }
}

class Child extends Parent{

}

let obj = new Child();
obj.hello();

// example
// class Person{
//     eat(){
//         console.log("eat");
//     }
    
//     sleep(){
//         console.log("sleep");
//     }
//     work(){
//         console.log("do nothing ");
//     }
// }

// class Engineer extends Person{
//     work(){
//         console.log("solve problems, build something");
//     }
// }

// class Doctor extends Person{
//     work(){
//         console.log("treat patients");
//     }
// }

//Note: if parent class and child class have a same mehtod name it always pariotize  to the child class method  not parent's one.
//this concept is called method overriding
// let uttamObj = new Engineer();

//super keyword
class Person{
    constructor(name){
        this.name = name;
    }
    eat(){
        console.log("eat");
    }
    
    sleep(){
        console.log("sleep");
    }
    work(){
        console.log("do nothing ");
    }
}

class Engineer extends Person{
    constructor(name){
        super(name); //to invoke parent class constructor
    }
    work(){
        super.eat();
        console.log("solve problems, build something");
    }
}

class Doctor extends Person{
    work(){
        console.log("treat patients");
    }
}

let uttamObj = new Engineer("Uttam Magaju");

//question
// you are creating a website for your college. Create a class User with 2 properties, name and email. It also has a method called viewDate() that 
// allow user to view website data.

let data = "secret information";
class User{
    constructor(name, email){
        this.name = name;
        this.email = email;
    }

    viewData = function(){
        console.log("data = ", data);
    }
}

let userobj = new User("Uttam Magaju","uttammagaju0000@gmail.com");
console.log(userobj.viewData());

//crate a new class called Admin which inherits from User. Add a new method called editData to Admin that allows it to edit website data.

class Admin extends  User {
    constructor (name, email) {
       super(name, email);  
    }
    editData(){
        Data = "some new value";
    }
}

let admin = new Admin("admin", "admin@gmail.com");

//error handling
let a = 5;
let b =5;
try{
    console.log(a+c);
}
catch(err){
    console.log(err);
}
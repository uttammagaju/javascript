 //Arithmetic Operators
 let a = 5;
 let b = 6 ;
 console.log("a = ",a , "and b = ",b)
 console.log("a + b = ",a + b);
 console.log("a - b = ", a - b);
 console.log("a * b = ", a * b);
 console.log("a / b = ", a / b);
 console.log("a % b = ", a % b);
console.log("a ** b = ", a ** b);

// Unary Operator
console.log("a++ = ", a++)//post
console.log("++a = ", ++a)//pre
console.log("b-- = ", b--)//post
console.log("--b = ", --b)//pre

//Assignment operator
let x = 5;
let y = 2;

x += 4 
console.log(" x = ", x);

//comparision operator
 console.log("x == y", x==y)
 
 let c = 4;
 let d = 5;
 //Equal to
 console.log("c == d", c == d);
 // Not equal to
 console.log("c !+ d", c!=d);
 // Equal to and type
 console.log("c === d", c === d);
 // Not equal to and type
 console.log("c !== d", c !== d);
 // greater than 
 console.log(" 5 > 2", 5 > 2);
 //greater than equal to 
 console.log(" 5 >=2 ", 5>=2);
 
 //logical operators
 //And operator
 let cond1 = d > c;
 let cond2 = c === 4;
 console.log(" cond1 && cond2 ", cond1 && cond2);

 //Conditional operation 
 //If Statement 
 let age = 25;
 if (age >= 18){
    console.log(" you can vote");
 }

 // if else statement
 let num = 6;
 if ( num % 2=== 0){
    console.log("the given number is even");
 }
 else {
    console.log("the given number is odd");
 }

 //else if statement
 if(typeof num === "number"){ 
    console.log("number");
 }
 else if(typeof num === "string"){
    console.log("String");
 }
 else{
    console.log("other");
 }

 //ternary operator
 let result = 45%2==0?"true":"false";
 console.log("the given result is: ",result);

 //switch 
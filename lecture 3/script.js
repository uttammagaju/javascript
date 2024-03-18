// Loops in js
// Loops are used to perform a task repeatedly
//For loop
let i;
for(i=1;i<=5;i++){
    console.log("I love JavaScript.");
}
//While looop
let a=1;
while(a<=5){
    console.log("I love JavaScript.");
    a++;
}
//do while
let b =1;
do{
    console.log("count: ", b);
    b++;
}while(b<=5);
//for of loop
let str= "uttam";
for(let e of str){
    console.log("e = ", e)
}
//for in looop
let student = {
    name:"uttam",age:25,city:"Delhi"};

    for (let key in student ){
        console.log("key = ",key,"value = ",student[key]);
    }
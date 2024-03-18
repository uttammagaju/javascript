 //simple function example: function can be called anywhere and anytime and  many time
 function myFunction(){
    console.log("This is function in javaScript.");
 }
//  myFunction(); // calling the function

// //user input function
// function printMessage(msg){
//     console.log(msg);
// }
// input=prompt("Please enter your message here....");
// printMessage(input);
//functin to calculate sum
function sum(a,b){
    console.log(a + b);
}
sum(1,2);

//moder java arrow function
let arrowmul = (a,b)=>{
    console.log(a*b);        
}
arrowmul(3,4);//when we call arrowmul then only it return the a*b 


//Q. Create a function using the "function" keyword that takes a String as an
// arguments and returns the number of vowles in the String
function countVowel(str){
    let count = 0;
    for(const char of str){
        if( char === 'a'|| char === 'e' || char === 'i' || char === 'o' || char === 'u'){
            count++;
        }
    }
    console.log(count);
}
countVowel("uttammagaju")

//Q. create an arrow function to perform the same task
const arrowCountVowel = (str)=>{
    let count = 0;
    for(const char of str){
        if(char==='a'|| char==='e' || char==='i' || char ==='o' || char==='u'){
            count++
        }
    }
    console.log(count);
};
arrowCountVowel("uttam")

// foreach function
let arr =[1,2,3,4,5];
arr.forEach(function PrintVal(val){
    console.log(val);
});

arr.forEach((val) => {
    console.log(`The value is ${val}`);
});

//Q. For a give array of number, Print the square of each value using the forEach loop.
let num =[1,2,3,4,5];
num.forEach((val)=>{
    console.log(`The ${val} of square is ${val*val}` );
});

//another way to write call back function
let calSquare = (val)=>{
    console.log(val*val);
};
num.forEach(calSquare);

//Map
num.map((val)=>{
    console.log(val);
});

//filter
let evenArray= num.filter((val)=>{
    return val>3;
})
console.log(evenArray);

//Reduce
console.log("Reduce");
const output = num.reduce((prev,curr)=>{
    return prev+curr;
});
console.log(output);

//to print the greatest number;
 let a = [5,6,3,7,2,1];
 const outpu = a.reduce((prev, current)=>{
    return prev > current ? prev : current;
 }
 );
 console.log(outpu);

 //Q. We are given array of marks of students. Filter out of teh marks of students that scored 90+.
 let mark = [45,92,4,91,95];
 let markFilter = mark.filter((val)=>{
    return val>=90;
 })
 console.log(markFilter);

 let n = prompt("Enter a Number");
 let ar = [];
 for(let i = 0;i<n;i++){
    ar[i] = i+1;
 }
 const sumArray = ar.reduce((pre,cur)=>{
    return pre + cur;
 });
 console.log(`The sum of the array is ${sumArray}`);
 
 const mul = ar.reduce((pre,cur)=>{
    return pre * cur;
 });
 console.log(`The factorial of array is ${mul}`);

//Array
let heroes =["ironman","Thor","Antman","Hulk"];
console.log(heroes);

str = "Hello";
str[0]= "U";
console.log(str);

//For a given array with marks of student -> [ 85, 97, 44, 37, 76, 60]. Find the average marks of the entire class. 
let student =[85, 97, 44, 37, 76, 60];
let sum = 0;
for(let i = 0; i<student.length; i++){
    sum = sum + student[i];
}
let avg = sum/student.length;
console.log(" The Average is: ", avg);

// For a given array with prices of 5 items -> [250, 645, 300, 900, 50]. All items have an offer of 10% off on them. Change the array 
// to store final price after applying offer.
let prices = [250, 645, 300, 900, 50];
for(let i = 0; i<prices.length; i++){
    let dis = 0;
    dis = prices[i]*0.10 ;
    prices[i] = prices[i]-dis;
}
for(let price of prices){
    console.log(`The Final Price Is : ${price}`);
}

//push()
let foodItems = ["apple" , "Potato", "litchi", "tomato"];
// foodItems.push("chips");
foodItems.push("banana","Chicken","MOMO");
console.log(foodItems);

//pop()
let deleteItem =foodItems.pop();
console.log(deleteItem);
//toString()
console.log(foodItems.toString());

//concat()
let mark = [11,12,13,14];
let concat = foodItems.concat(mark); 
console.log(concat);

//slice()
let superHero=["antman","superman","thor"];
console.log(superHero.slice(0,2));

//splice()
//superHero.splice(1,1,"superman");
//Add Element
//superHero.splice(1,0,"Iron man");
//Delete Element
//superHero.splice(1,0);
//Replace Element
superHero.splice(2,1,"Spiderman");

//Q) Create an array to store companies-> "Bloomberg","Microsoft","Uber","Google","IBM","Netflix"
//a. Remove the first company from the array
//b. Remove Uber and ADD Ola in its place
//c. Add Amazon at the end
let companies =["Bloomberg","Microsoft","Uber","Google","IBM","Netflix"];
companies.shift();
companies.splice(0,1,"Ola");
companies.push("Amazon");
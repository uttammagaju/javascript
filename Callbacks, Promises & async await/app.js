// sychronous Programming

console.log("one");
console.log("two")
console.log("three")

//aschronous Programming
console.log("one");
console.log("two");

setTimeout(() => {
    console.log("hello")
}, 4000);

console.log("three");
console.log("four");

// callback
function sum(a,b){
    console.log(a+b);
}

function calculate(a, b, sumCallback){
    sumCallback(a,b)
}

calculate(2,3,sum);

 //callback hell
 function getData(dataID, getNextData){
    setTimeout(()=>{console.log("data", dataID);
    if(getNextData){
        getNextData();
    }
},2000);
 }

 //this down below code is called callback hell
 getData(1, () =>{
    getData(2,()=>{
        getData(3, ()=>{
            getData(4)
        });
    });
 });

 //Promises
 //Example 1
 let promises = new Promise((resolve, reject) => {
    console.group("I am a promises.");
    resolve("complete");
    // reject("error");
 });

 //Example 2
 function getData(dataId, getNextData){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("data", dataId);
            resolve("success");
            if (getNextData) {
                getNextData();
            }  
        },5000);
    });
}

//How to use Promises
// example 1
const getPromise = () =>{
    return new Promise((resolve, reject) => {
        console.log("I am a promises");
        
    });
};

let promise = getPromise();
promise.then((res) =>{
    console.log("Promise fulfilled", res);
});

promise.catch((err) => {
    console.log("rejected", err);
});

//Promises chaining
function asyncFunction1(){
    return new Promise((resolve, reject) => {
        setTimeout(()=>{console.log("data1");
    resolve()},4000);
    });
}
function asycnFunction2(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            console.log("data2");
            resolve("success");
        },4000);
    })
}

console.log("Fetching data 1 ......");
asyncFunction1().then((res) => {
    console.log("Fetching data 2...... ")
    asycnFunction2().then((res)=>{});
});

//async await 
//example
function api(){
    return new Promise((resolve, reject) => {
        setTimeout(()=>{
            console.log("weather data");
            resolve(200);
        },2000)
    })
}

async function getWeatherData(){
    await api();
    await api();
}

// Example 2
function getData(dataID){
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            console.log("data", dataID);
            resolve("success");
        },2000)
    })
}

async function getAllData(){
    await getData(1);
    await getData(2);
    await getData(3);
}

//IIFE
 (async function (){
    await getData(1);
    await getData(2);
    await getData(3);
 })();
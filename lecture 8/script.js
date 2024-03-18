let btn1 = document.querySelector("#btn1");

btn1.onclick = () =>{
    console.log("The button is clicked.");
};

let div =document.querySelector(".box");
div.onmouseover = () =>{
    console.log("You are inside div.");
};

//event object
btn1.onclick = (evt) => {
    console.log(evt);
    console.log(evt.type);
    console.log(evt.target);
    console.log(evt.clientX, evt.clientY);
};

// event listener
//add listener
btn1.addEventListener("click",()=>{
    console.log("button handler was clicked -- handler 1");
});
btn1.addEventListener("click" , () =>{
    console.log("button handler was clicked -- handler 2");
});

const handler3 = ()=>{
    console.log("button handler was clicked -- handler 3");
}

btn1.addEventListener("click", handler3);

btn1.addEventListener("click" , () =>{
    console.log("button handler was clicked -- handler 4");
});

//remove Listener
btn1.removeEventListener("click", handler3);

div.addEventListener("onmouseover", (evt) => {
    console.log("mouse is hover ");
    console.log(evt);
    console.log(evt.type);
})


//Q Create a toggle button that changes the screen to dark-mode when clicked and light-mode when clicked again.
let modeBtn = document.querySelector("#mode");
let currMode = "light";
let body = document.querySelector("body");

// modeBtn.addEventListener("click",() => {
//     if(currMode === "light"){
//         currMode = "dark";
//         body.style.backgroundColor ="black";
//     }
//     else{
//         currMode = "light";
//         body.style.backgroundColor = "white";
//     }
// });



modeBtn.addEventListener("click",() => {
    if(currMode === 'light'){
        currMode = "dark";
        body.classList.add("dark");
        body.classList.remove("light");
    }
    else{
        currMode = "light";
        body.classList.add("light");
    }
    console.log(currMode);
})
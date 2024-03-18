let div = document.querySelector("div");
console.log(div);
div.style.backgroundColor ="tomato";
//insert element
// node.append(el)
let newBtn = document.createElement("button");
newBtn.innerText="Click me!"
console.log(newBtn);
let addButton  = document.querySelector("div");
addButton .append(newBtn);
//node.prepend(el)
let newHeading = document.createElement("h1");
newHeading.innerHTML="<i> This is new. </i>";
document.querySelector("body").prepend(newHeading);
//node.before(el)
let newp  = document.createElement("p");
newp.innerText="This is a new paragraph.";
document.querySelector("div").before(newp);
//node.after(el)
let newdiv = document.createElement("div");
newdiv.innerHTML ="<button> I am after</button>";
document.querySelector("div").after(newdiv);

let qbtn = document.createElement("button");
qbtn.innerText = "click me! qbtn";
qbtn.style.backgroundColor="red";
qbtn.style.color="white";
document.querySelector("body").prepend(qbtn);

let qpara = document.querySelector(".testQuestion");
qpara.classList.add("newClass");//to add 
qpara.classList.remove("newClass");// to remove form classList


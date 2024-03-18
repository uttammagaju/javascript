//Selecting with id
let heading = document.getElementById("heading");
 console.dir(heading.tagName)
//Selecting with Class
 let SWithClass = document.getElementsByClassName("headingClass");
 console.log(SWithClass);
 console.dir(SWithClass);

 //Selectiong with Tagname
 let sWithTagName = document.getElementsByTagName("p")
 console.dir(sWithTagName);

 //Selecting with querySelector
 let sWithQuery = document.querySelector(".headingClass")
 console.dir(sWithQuery)// return first element

 let sWithQueryAll = document.querySelectorAll("p");
 console.dir(sWithQueryAll);//return a Nodelist

 //Properties
 //tagName
 console.log(sWithQuery.tagName);
 //innerText can be used to set the value dynamically 
 // for example div.innerText ="hello";
 let div = document.querySelector("div");
 console.log(div.innerText);
 //innerHtml can be use to set the value dynamically in website
 console.log(div.innerHTML)

//   Q Create a H2 heading element with text - "Hello UttamMagaju". Append "from Bhaktapur " to this text using JS.
let str = document.querySelector(".question");
console.log(str.innerText);
str.innerText += " from Bhaktapur.";
console.log(str.innerText);

//Q Create 3 divs with common class name -"box".Access them and add some unique text to each of them.
 let divs = document.querySelectorAll(".box");
console.dir(divs);
for(let i = 0;i<3;i++){
    divs[i].innerText=`this is div ${i + 1}`;
}


//Attribute
//getAttribute
let att = document.querySelector("h1");
console.log(div);

let id = att.getAttribute("id");
console.log(id);

//setAttribute
console.log(att.setAttribute("id","bhada"));//change to h1 id
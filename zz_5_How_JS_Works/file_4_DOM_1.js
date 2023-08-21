// DOM 
// Document Object Model



//console.log(document);   (it gives html page structure)
// console.dir(document);   ()


//------------------------------------------------------//-------------------------------------------//

//  1--> Select Element by id

console.dir(document.getElementById("sub"));
console.log(typeof document.getElementById("sub"));

//  2--> Select Element by query selecter 

// using query selecter we can select any element with id or class or other identifier

const new1 = document.querySelector("#sub");   // (when identifier is id)

console.log(new1)
const new2 = document.querySelector(".btn1"); // (when identifier is class );
console.log(new2)


// if an multiple elements has same class name in that case only the first element will get printed
// but if we want all elements then we use querySelecterAll 

const formItem = document.querySelector(".form-item1");
console.log(formItem);

const formItems = document.querySelectorAll(".form-item1");

console.log(formItems)  // we get in the form of node list it looks like array but its not




//-----------------------------------------------------------------------------------

const element = document.getElementById("div");

console.log(element); // it will print first element with div tag ; 
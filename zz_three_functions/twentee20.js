// Hoisting

// only possible with declarative functions
// we can call or invoke function before declaring it 



myFunction2();   // here we are calling function before declaring it
                // it works only if function is declarative function
                // doesnt work with arrow function or function expression 


function myFunction2(){

    console.log("hello world");
}

//----------------------------------------------------------------------------------------------//


console.log(hello);  // it will print undefined
                     // but if we declare variable using let or const it will give an error
                     // let hello = "hello there !!";
                     // const  hello = "hello there !!";


var hello = "hello there !!";

console.log(hello);  // normal output

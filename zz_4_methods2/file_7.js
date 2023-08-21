// functions ====>  function + object


// note : functions can be treated as functions as well as methods

function hello (){

    console.log("inside hello function")
}


console.log(hello.name); // it gives the name of function 
          

hello.firstName = "sachin"; // we can add properties (const) in function like we do in case of objects

console.log(hello.firstName);
console.log(hello.prototype);

// only function provides prototype property

// prototype is the free space inside function 
// where we can add anything




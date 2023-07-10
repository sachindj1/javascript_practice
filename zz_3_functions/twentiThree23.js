// block scope vs function scope

// let and const variables are block scope
// var variable is function scope


{

let var1 = "sachin";
console.log(var1);    // we can access this variable inside this block , outside not avialable

}

// console.log(var1);   print as var1 is not defined 

{

const var2 = "mahesh";
console.log(var2);

}


//--------------------------------------------------------------------------------------------//


// in case of var the value of variable declared inside is available outside also

{
var num = 777;

}

console.log(num)   // here we are able to access the value of num outside the block
                   // because var is function scop , the whole file as function
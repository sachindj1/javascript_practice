//   arrow functions 

// remove function name from function expression and arrow after parnthesis

// creating function using arrow function

const myFunction = ()=>{

    console.log("my new arrow function")
}

myFunction();


// see comparison with function expression


const myFunction2 = function (){

    console.log("my function expression type function ")
}

myFunction2();



//  CREATE A FUNCTION TO CHECK WEATHER THE GIVEN NUMBER IS EVEN OR ODD

let checkNum = (number)=>{    // let checkNum = number =>{} , we can write like this if function takes only one parameter

    return number % 2 === 0 ;
}

console.log(checkNum(4));


let myNum = number => {console.log("my number",number)}

myNum(567);


// we can write it another way too


let myNewNum = number => console.log("my new number", number);

myNewNum(777);
// Functions inside function


function myFunction(){                         // declarative function (you can create any kind of function)

      const myFirstInsideFunc = function(){  // creating function inside function (function expression)

        console.log("first inside function");
      }


      const addNumber = (num1 , num2) =>{       // creating arrow function inside function

        return num1 + num2 ;
      }


      const multiply = (num1 , num2) => num1 * num2 ;     // another arrow function




    console.log("inside my Function")

    myFirstInsideFunc();    // we need to invoke inside function to work

    console.log(addNumber(4,5))
    console.log(multiply(2,3));
}

myFunction();
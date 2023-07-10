//   function returning function



function myFunction(){
       
    function hello(){
        console.log("hello world")
    }
     
   // return {name: "sachin" , age:34}  // here we can return anything (number, array, string , object )
    return hello;                            // likewise we can return function declared inside that function

}

let ans = myFunction();    // myFuntion returning function so the ans becomes a function
ans()                       // we can invoke that function



///  note if we are taking function as input (callbackfunction) or retuning function  ,,  such type of functions are called as
      // higher order function
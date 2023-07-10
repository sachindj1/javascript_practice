// functions

//declarative function
// expression function
// arrow function


// 1---->    

function myFunction(){

    console.log("inside my function");
} 

myFunction();   // invoking function


// passing and recieving an argument

function addNum(x , y){
     
    console.log(x+y);
   // return x+y ;
}

addNum(3,5);


// passing an array 

let array1 = [1,2,3,45,]

function printArray1(array1){

    console.log(array1);
}

printArray1(array1);


// function inside function and returning function

function newFunc(){

   return function insideFunc(){

        console.log("hello from inside func")
    }
   
   
}

const myFunc = newFunc();

console.log(myFunc);

  myFunc();


  // Expression function

const myNewFunc = function(){

    console.log("hello fron myNewFunc");
}

myNewFunc();

//  Arrow function

let newArrowFunc = () =>{

    console.log("hello from arrow function")

}

newArrowFunc();



// Lxicon Environment

let one = 9999
function newApp (){

   const hello = function(){
    //let one = 8888
   // console.log("variable in lexicon environment", )

   const arrow1 =()=>{
      
   // let one = 7777
    console.log("variable in lexicon environment",one )
   }

   arrow1();

   }

  // console.log("variable in lexicon environment", )
   hello();


}


newApp();




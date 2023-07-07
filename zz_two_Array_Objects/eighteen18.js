// functions

// 1----> this is also reference data type
// we can define functions in two ways

// A--->   function myFunction (){};
// B--->   const myFunction = function (){}   , it is also called as function expression

// functions are like slaves whenever we call them they will perform there work
// we use functions for reusability , so we can call them any number of times , and give required parameters


// 1> create a function to do sum of two numbers

function addTwoNumbers(number1 , number2){


    console.log(number1 + number2);
   // return number1 + number2;


}


         // we need to call the function to work, called invoking the function

addTwoNumbers(4 ,6);

           // the function returns the value and we can store it in new variable and can print it or use it as required


function addThreeNumbers (num1, num2 , num3){

return num1 + num2 + num3 ;
}

let total = addThreeNumbers(4,5,6);   //  storing returned value in new variable

console.log("addition of three numbers", total);


// we can declare the function in another way too

const addTwoNum = function(num1,num2){

return num1 + num2 ;
}

console.log("another way to declare function  ",addTwoNum(10 ,10));


// create a function to find check weather the given array consist target value

let array1 = [1,3,4,5,6]

function findElement (array, target){
   
    for(let i=0 ; i<array.length ; i++){

        if(array[i]=== target){
            return true ;
        }
    }

    return false ;

}

console.log(findElement(array1 ,3))


// create a function to check weather given to array contains same value


function checkSameArray(array1, array2){


   for(let i=0 ; i<array1.length ; i++){
          
        if(!array2.includes(array1[i])){
            return false
        }
}

return true ;

} 

console.log("check weather arrays are same or not ",checkSameArray([1,2,3], [1,2,3]))
//  important array methods

// 1--> For Each
// 2--> Map
// 3--> Filtr
// 4--> Reduce


// For Each

const numbers = [2,4,3,5,7,6];

function myFunc(number , index){

    console.log(`number is ${number} and index is ${index}`);
}


// using for loop
// for(let i=0; i< numbers.length ; i++ ){

// myFunc(numbers[i] , i);

// }


// instead of for loop we can do the same using forEach() method


numbers.forEach(myFunc);      // passing function as argument and invoking it is called callBack function
                              // it will take and pass each number and relative index


  // we can do the same using annonymous function
  // annonymous functions are those who dont have names , like below
  
  numbers.forEach(function(number, index){     //for each will pass each number and index to that function
    
    console.log("number is " ,number)
    console.log("index is " ,index)

  })


  // example , using arrow function 

  const users = [
    {firstName : "sachin" , age :27},
    {firstName : "mahesh" , age :22},
    {firstName : "Ashwini" , age :27},

]

users.forEach((user)=>{            // instead of annonymous function we can use arrow function as well

console.log(user.firstName);


})


let newNumbers = [1,2,3,4,5];


let newNUM = newNumbers.forEach((number)=>{       // using forEach the returned output from function is undefined
                                                  // but in map function we can store it in array 
    return number*2 ;
})

console.log(newNUM);

let newA = newNumbers.map((number)=>{

    return number*2 ;
})

console.log(newA);
//  reference data types 

// 1--> array
// 2--> objects
// 3--> functions

//  Array

let array1 = [1,2,3,4,5,6]

console.log("array of numbers", array1);
console.log(typeof array1);
console.log("is it array",Array.isArray(array1));
console.log("to check length of array", array1.length);
console.log("to get last element of array ", array1.length-1);
console.log("to get any element of array ",array1[3] );
console.log("index of element ", array1.indexOf(4));  // this only gives index no of first occurence of that number
                                                      // if you have [1,2,3,4,5,3,4] then in this case the index of 
                                                      // first 3 or 4 will be displayed not of next 3 or 4
 
/// some methods used to add new elements in array

// 1>  push() and pop() method

console.log(array1);

array1.push(7,8,9);  // this method adds elements at the end of array
console.log("array after adding new elements ",array1);

array1.pop()  // this method removes last element of an array;  no need to pass element , removes one element at a time

console.log("array after removing element ",array1);


// 2> shift() and unshift()  methods

// this methods used to add or remove starting elments of an array

console.log("initial array1 ", array1);

array1.unshift(11,10,9);

console.log("array after adding elements at the start ", array1);

array1.shift();

console.log("array after removing starting element ", array1);

// copying an array

let array2 = array1 ;

console.log("copied array ",array2);

console.log(array1 === array2)   // to check weather they are same , true

array2.shift();               // here we are making changes in second array 
console.log(array2);          // but both arrays are geting changed ;
                              // this is happenig because memory allocation, pointer in stack memory pointing at same address
console.log(array1);          // to avoid happening like this , we have to copy array differently
                              
                              
let newArray = [9, 1, 2, 3, 4, 5, 6, 7, 8] ;  // we can copy array itself 
console.log(newArray);
console.log(newArray === array1);            

let newArray2 = [].concat(array1);            // using concat method
console.log(newArray2);                       
console.log(newArray2 === array1);            // now these two arrays are different , now if we make changes
                                              // in one array it will not affect the other array

let newArray3 = array1.slice(0);              // using slice method
console.log(newArray3);

let newArray4 = [...array1]                   // using spread operator
console.log(newArray4);



// spread operator in array

let myArray = [1,2,3,4,5,6];

let myNewArray = [...myArray];
console.log(myNewArray);

let myArray3 = [...myNewArray , 7,8,9,10];
console.log(myArray3);


// ----------------------loops in array ----------------------------------------//

// 1---> for loop

let numbers = [1,2,3,4,5,6,7];

for (let i=0 ; i< numbers.length ; i++){                    // we cannot access this i outside for loop
   // console.log(numbers[i]);   // each number from array
   // console.log(i);            // each index of an array

    if(numbers[i]===3){
      //  break ;           // break the look rest numbers will not be iterate

       continue ;           // only 3 number will be skipped
    }
    console.log(numbers[i]);    
}


// 2---> while loop

let i=0;                 // this i is accessible otside for loop

while(i < numbers.length){

console.log(numbers[i]);
i++;


}


// 3---  do while loop

let j=0
do{

    console.log(numbers[j])
    j++;
}while(j<numbers.length);


// 4---> for of loop

let fruites = ["Apple", "Mango", "Banana"];

for(let fruit of fruites){

    console.log(fruit.toUpperCase())
}

// 5---> for in loop

let hobbies = ["cricket" , "music", "painting"];

for(let hobbi in hobbies){
     
    console.log(hobbi)     // it will print only index number
    console.log(hobbies[hobbi]);
}




// array destructuring

let newFruites = ["Apple" , "Banana"]

let [fruitOne , fruitTwo] = newFruites;

console.log(fruitOne);
console.log(fruitTwo);










// 1----->>>iterables

// string and arrays are iterables

// objects are not iterables


// 2------>>> array like objects

// those who have lengths
// and can be accessible trough there index





// ----------------------------------------------------------------------------------//

// ---------- sets (it is iterable)--------------------//

// 1- store data 
// 2- sets also have its own methods
// 3- no index based access
// 4 - order is not guaranteed
// 5- no duplicates allowed


const numbers = new Set([1,2,3,4]);   // we can pass only iterables that is array or string

console.log(numbers);

//or 

const nums = new Set() ;

nums.add(4);
nums.add(5);
nums.add("item")    // can add mixed data type
  nums.add("item")   // duplicate will not be added

  nums.add([1,2]);
  nums.add([1,2]);  // this will get added because both array addresses are different

console.log(nums);


if(nums.has(4)){                  // to check weather any element present in given array
    console.log("4 is present")
}



// when you want to create new array of unique numbers

let num = [1,2,3,2,4,1,5,7,6,5,];
console.log(num);

// dont want duplicates

let newNum = new Set(num);

console.log(newNum);





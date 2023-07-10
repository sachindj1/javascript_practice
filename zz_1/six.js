//         ARRAYS

let fruits = ["mango", "apple", "banana"];

console.log(fruits);
console.log(typeof fruits);// object 
console.log(Array.isArray(fruits)); // to check more specifiaclly weather it is array 

// we can replace particular element of array 
fruits[1]= "APPLE";
console.log(fruits);

// to add element at the end of array we use arry.push() method

fruits.push("grapse");
console.log("array after push method", fruits);

// to remove the last element of an array we use pop() method

fruits.pop();
console.log("changed array", fruits);

//////////////////////////////////////////////////////////////////

// to add new elemet at start  unshift();

fruits.unshift("jambhul");
console.log(fruits);

// to remove first element of an array  shift();

let removedElement = fruits.shift();
console.log(removedElement);

console.log("array after removing first element", fruits);



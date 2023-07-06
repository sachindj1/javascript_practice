// Array Destructuring 


let names = ["sachin", "ganesh" ,"ramesh", "suresh"];

let myName = names[0];
let nickName = names[1];

console.log("my name is ", myName);
console.log("my nick name is ", nickName);


// we can do this by destructuring array (alternative way);

let [myName1 , nickName1 , ...newArray3] = names;

console.log("my name1 is ", myName1);
console.log("my nickname1 is ", nickName1);


// if we want elments from particular index

let newArray = names.slice(2);
console.log(newArray);
console.log("array using spread operator", newArray3);



console.log("primitive non-primitive data type");

// values of primitive datatype variables stored in stack

let num1 = 1;
let num2 = num1;

console.log(num1);
console.log(num2);
num1++;

console.log("values after changing value of num1");
console.log(num1);
console.log(num2);

//here only value of num1 will change as in stack both have different space where tere values has been stored
// so that is why it will not affect on num2 variable 
// it is because of memeory allocation 
// 1--> stack area
// 2--> heap area








// while the data of reference datatype variables stoered in heap area 


let fruites1 = ["apple" , "banana"]


let fruites2 = fruites1;
console.log(fruites1);
console.log(fruites2);

fruites1.push("grapse");

// point to be noted generally only the value of fruites1 should have been changed but both arrays gets changed
// it is because of memory allocation,
// all reference type of variable are stored in heap area ;
// pointer in stack for both fruites1 and fruites2 points at same sstored address of array

// and in case if you want copy the array but they should not get changed when one gets changed than ,


let fruit1 = ["banana" , "apple"];
// instead of doing fruit1 = fruite2 we do

let fruite2 = ["banana", "apple"];

console.log(fruit1=== fruite2); // false

// another way to clone array is using slice method

let fru = fruit1.slice(0);

// another way using concatinate

let nee = [].concat(fruit1);

// another way using spread operator

let hello = [...fruit1];
console.log("value of array using spread operator", hello);


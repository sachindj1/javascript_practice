let numbers = [1,2,3,4,5,6];
console.log(numbers[2]);

for (let i=0 ; i<numbers.length ; i++){

    console.log(numbers[i]);
}

for (number of numbers){
    console.log(number)
}


const ans =numbers.map((number)=>{
    console.log("number in map ", number);
    return number;
})

console.log("number in map ", ans);   // creates a new array 

numbers.filter((number)=>{
    console.log(number);
})



const num = numbers.reduce((number , currentNumber)=>{
      //console.log(number)

    return number +  currentNumber;

})

console.log(num)


let names = ["sachin", "ganesh", "ramesh", "rani"];

const name1 = new Set(["sachin", "rani"])
console.log(name1)
name1.add("ashwini");
console.log(name1)



const newArray = new Array(5).fill("sachin");

console.log(newArray);



newArray.splice(3 , 1);
console.log(newArray);

newArray.splice(3,0,"MAHESH");
console.log(newArray);

let nums1 = [2,5,4,6,3,4,5,6,7,2,3];
console.log(nums1);
let newNum = new Set(nums1);
console.log(newNum);

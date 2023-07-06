// print only even numbers from given array

let numbers = [1,2,3,4,5,6,3,2,5,6];

for(let i=0 ; i<numbers.length ; i++){

    if(numbers[i]%2===0){
        console.log(numbers[i])
    }
}

console.log("numbers on even index")
// print only  numbers on even index from given array

let numbers2 = [1,2,3,4,5,6,3,2,5,6];

for(let i=0 ; i<numbers.length ; i++){

    if(i%2===0){
        console.log(numbers[i])
    }
}


// remove duplicate numbers from given array

let originalNum = [1,2,3,4,3,2,1,5,6,7,5,6,7];

let newNum = [];

for(let i=0 ; i<originalNum.length ; i++){
   
    if(newNum.indexOf(originalNum[i])=== -1){

        newNum.push(originalNum[i])
    }


}

console.log(newNum)


// to check weather the given array is sorted or not

let sortArray = [1,2,3,4,5,6,7,8,9];

let isArraySorted = false;

for(let i=0; i<sortArray.length-1 ; i++){

if(sortArray[i]>sortArray[i+1]){

    isArraySorted = false;
}else{
    isArraySorted= true ;
}

}

if(isArraySorted=== true){
    console.log("given array is   sorted ")
}else{

    console.log("given array is not sorted");
}



// second way to check weather the given array is sorted or not

let sortArray2 = [1,2,3,4,5,6,7,8,9];

let isArraySorted2 = true;

for(let i=0; i<sortArray.length-1 ; i++){

if(sortArray[i]>sortArray[i+1]){

    isArraySorted = false;
}else{
    isArraySorted= true ;
}

}

if(isArraySorted=== true){
    console.log("given array is   sorted ")
}else{

    console.log("given array is not sorted");
}


// sum of all array element 

let sumArray = [1,2,3,4,5,6,7,8,9,10];
let sum= 0 ;

for(let i=0 ; i< sumArray.length ; i++){

sum = sum + sumArray[i];



}


console.log("total sum is", sum);



// sum of all odd numbers in given array

let oddSum = [1,2,3,4,5,6,7,8,9,10];

let sum1 = 0;

for(let i=0 ; i<oddSum.length ; i++){

if(oddSum[i]%2===1){

    sum1 = sum1 + oddSum[i];
}
}

console.log("total addition of odd numbers in given array", sum1);



//  objects in js

let obj1 = {name: "sachin", age:27, address: "pune"};

console.log(obj1);
console.log(typeof obj1);

// to access particular key from object 

console.log("usin dot notation",obj1.name)
console.log("using bracket notation", obj1["age"])

//  object can include array

let person = {name:"ganesh", age:27, "more hobbies":["cricket", "reading"]};

console.log(person);

console.log(person["more hobbies"])

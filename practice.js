
// looops   for loop


// print numbers from one to ten

let array1 = ["man" , "woman", "girl", "boy", null , undefined , 2.3, true , {name : "sachin"}];

console.log(array1[array1.length-1].name);

console.log(Array.isArray(array1)
)

console.log(typeof array1)


// to copy array

let array2 = array1;

console.log("this is array 2",array2);

// the issue

array1.push("myname", "hello");

console.log(array1);
console.log(array2);

// we did changes in one array but both arrays got updated 
// this is because in stack pointer of these two variables pointing at same address;

// to do changes in one array and not to reflect it in other one we can copy array using other ways

// 1---->   assigning content as it is to another array

// let array3 = ["man" , "woman", "girl", "boy", null , undefined , 2.3, true , {name : "sachin"}];

// console.log(array1===array3);

// 2---->

// let array3 = [].concat(array1);
// console.log("new array", array3);

// console.log(array1===array3);

// 3-----> 

// let array3 = array1.slice(0);
// console.log("---->",array3);


// 4----->

// let array3 = [...array1, "new", "element"];
// console.log("------> spread",array3)

// let gender = ["male", "female", "other", "transgender"];

// console.log(gender.length)

// for(let i = gender.length-1 ; i>=0 ; i--){

//    if((i%2)===0){
//     console.log(gender[i]);
    
//    }
  
// }


//find the maximum element in array

let numbers = [5,3,5,2,8,2];

let max = numbers[0];

for(let i = 0 ; i<numbers.length ; i++){

if(numbers[i]>max){

    max = numbers[i]
}

}

console.log("the maximum number in array is ", max);


// to find lowest element in array

let numberLow = [2,4,6,7,1,8];

let low = numberLow[0];

for(let i=0; i<numberLow.length ; i++){

    if(numberLow[i]< low){

        low= numberLow[i];
    }
}

console.log("the new low number is ", low);

// to calculate sum of all elements of array

let add = [1,2,3,4,5,6,7,8,9,10];

let addition =0 ;

for(let i =0 ; i<add.length ; i++){

    addition = addition + add[i]
}

console.log("the total addition of numbers is", addition);


// to find specific element in array

let arr = [2,4,5,6,3,9,7,8];

let findNum = 6;

let found = false;

for(let i=0; i<arr.length ; i++){

   if(findNum===arr[i]){

    found = true ;
    break;
   }

}

if(found===true){

    console.log("the number exist in array")
}else{

    console.log("the number does not exist in array")

}

// to count the number of even elements in array

let evenArr = [1,2,3,4,5,6,7,6,5];

let count = 0;

for(let i=0; i< evenArr.length ; i++){

    if(i%2 ===0){
        count++;
    }
}

console.log("the number of even elements", count)


// to check if array is sorted

let sortedA = [1,2,3,4,5,6];

let isSorted = true;

for(i=0 ; i<sortedA.length-1 ; i++){

    if(sortedA[i]>sortedA[i+1]){

        isSorted = false;
        break;

    }
}

if(isSorted=== true){

    console.log("given array is sorted")
}else{
    console.log("not sorted")

}

// to remove duplicate elements from an array

let dupElement = [2,3,4,5,3,2,67,5,2,4];
let uniqArray =[];

for(let i=0; i<dupElement.length ;i++){

   

    // indexof() this method gives index of first occurence of element in array  
    // like [1,2,3,1,2]; indexof(2) will be 1 , it will not show index of second 2 only that number which occures for first time


if(uniqArray.indexOf(dupElement[i]) === -1){  // here -1 means element not found

    uniqArray.push(dupElement[i]);
}


}
console.log(dupElement)
console.log("array after removing duplicates", uniqArray);


let display = document.getElementById("display");

// uniqArray.map(function(element){

// return element

// })


dupElement.forEach(function(element){

let para = document.createElement('h1');

para.textContent = element;

display.appendChild(para);


})
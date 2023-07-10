// spread operator in objects

let array1= [1,2,3];
let array2 = [4,5,6];

let newArray = [...array1 , ...array2 , ..."12345"]; // we  can spread a string , see output  numbers are not spreadable here


console.log(newArray);


let obj1 = {

    key1: "value1",
    key2: "value2"

}

let obj2 = {
    key1: "value69",  // in combine array this key1 will override the first key1
    key3: "value3",
    key4: "value4"

}


let newObj = {...obj1 , ...obj2};
console.log(newObj)
// objects

// arrays are good but not sufficent for real world data
//objects stores key value pairs
// it is reference type like array
// stored in heap area of memory
// in js key is bydefault is a string 

//objects dont have index



let person = {name : "sachin", age : 27 };
console.log(person);

console.log(person.name);

// we can add array inside object 

let person2 = {name: "ganesh", age: 27 , hobbies: ["music", "cricket", "reading"]}
console.log(person2);

console.log(person2.hobbies);

// we can iterate each element from this array 

for( hobbi of person2.hobbies){

    console.log( hobbi)
}



// to add element in array directly 

person2.address = "PUNE";
console.log(person2);


person2.address;

//  we can also access object data in alternative way like

console.log(person2["address"]);
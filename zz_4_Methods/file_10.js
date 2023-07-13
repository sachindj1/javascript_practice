//  difference between maps and objects


// objects can only have string or symaball as key

// in maps you can use anything as key like array, number , string

const person= { key1 : "sachin" , 1 : "age"}

console.log(person.key1);
console.log(typeof person.age);  // string




////  Map()


const fruites = new Map();

fruites.set("fruite1" , "mango");

fruites.set(1, "number")   // here key type is number
fruites.set([2,3,4], "the new fruite");   // the array as key
fruites.set({key1 : "hello"}, "new value with object as key")   // object as key

console.log(fruites);

for(key of fruites.keys()){
    console.log(key , "type of key ",typeof key);

}


// if we want to clone the object we can do using spread operator 
// the alternative way for this is Object.assign()

let person1 = {key1 : "sachin" , key2: "email"}

// let person3 = {...person1};

let person3 = Object.assign({},person1);

console.log(person3);



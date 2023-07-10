//     objects


let person = {firstName : "sachin" , age: 27 , gender : "male"}

console.log(person)

// accessing objects . notation

console.log(person.firstName);

// accessing objects other way

console.log(person["gender"]);


// another way to write object

let info = {"firstName":"ganesh" , "age": 27, "email": "ganesh@gmail.com" , "personal hobbies" : ["cricket" , "music", "reading"]}
console.log(info);
console.log(info.email);
console.log(info["email"]);
console.log(info["personal hobbies"]);

console.log(typeof info);


// iterating object

// for loop

for(let element in info){

   // console.log(element)
    console.log(` ${element}  : ${info[element]}`)
}


// object destructuring   , the variable name should be same as key name

let {firstName , email} = info ;

console.log(firstName);
console.log(email);



 















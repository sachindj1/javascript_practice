// Difference between dot and bracket notation 

// if we have key someting like this with spaces  ,  person hobbi 
// in that case it is difficult to access it using dot , 


let names = {name : "sachin", "person hobbies" : ["reading ", "music"]}

// names.person hobbies   (not possible)

names["person hobbies"];
console.log(names["person hobbies"])



// --------------------------------------------------------------------------------------


// iterating object

let person = {name : "sachin", age: 27, address : "pune"};


// we can iterate object two way
// 1----> for in    loop
// 2----> object.key


for(let key in person){

    // console.log(key);

    console.log(person[key])  // here we are accessing values of that particular key
                               // we have alternative using backticks

      console.log(`${key} : ${person[key]}`)                      

}







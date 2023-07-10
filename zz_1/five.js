console.log("file no five ");

// while loop

// let num = 10;

// let i =0
// while(i<=10){

// console.log(i)
// i++


// }

// for loop

// for(let m ; m<=10 ; m++){

// }
// constant defined inside for, will not be mentioned in main code ,let variable , we can do with var 
// we can define variable outside of for , then it will be accessible (let , var)

// let i = 0
// for(;i<=10; i++){

// }
// let i=1
// for( ; i<=10 ; i++){   // if write let inside it will not be avialabe outside

//     if(i===5){
//         break;
//     }

//     console.log(i);
// }

// console.log("the final value of i is >>",i);


// let i=1
// for( ; i<=10 ; i++){   // if write let inside it will not be avialabe outside

//     if(i===5){
//         continue;
//     }

//     console.log(i);
// }

// console.log("the final value of i is >>",i);






// break and continue statement inside for loop  

// do while loop

let num = 14

do{
    console.log(num)

    num++
}while(num<=10);

console.log("the current value of num is >>",num)

//arrays 
// def: ordered collection of items(referance types , non-primitive , object)

// arrays are mutable , 
// let fruites = ["mango", "apple", "orange"];

//  fruites[1]= "banana";

 //arrays are mutable unlike strings 

 // new array of fruites includes ["mango", "banana", "orange"]

 // obj and array have same datatype like in console it will print as, typeOf fruites >> object and  type of obj as object
 // to differentiat we have ,  Array.isArray(fruites) >> it will give true or false value


 let students = ["sachin", "mahesh", "ganesh", "ram"];
 console.log(students);
 console.log(typeof students);
 console.log(Array.isArray(students))

 students[1] = "Amol";
 console.log("new students arrray >>", students);
 // arrays are mutable

 let mixedA = ["sachin", 1, null , undefined, 3.5];
 console.log(mixedA);




 // object literal 

 let obj2 = {address: "pune", state: "maharastra", country: "india" };
  let obj = {name :"sachin" , age:27 , email : "sachin@gmail.com" , ...obj2 , student:{namee:"RAM"}};
  
  console.log(obj);
console.log(obj.email);

console.log(obj.student.namee);
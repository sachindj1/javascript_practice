console.log("practice ");

//  call 
function info(){

    console.log(`person name is ${this?.firstName} and age is ${this?.age}`)
}

const person1 = {firstName : "sachin", age:27 , about: info}
const person2 = {firstName : "Mahesh", age:30 , about: info}
const person3 = {firstName : "GANESH", age:25 , about: info}


person1.about();
person2.about();
person3.about();

////////////////////////////////////////////////////////////////////////

const fruite1 = {fName : "Apple" , country:"india" , about: function fruiteInfo(){

    console.log(`fruite name is ${this.fName} and country is ${this.country}`)
}}

const fruite2 = {fName : "Mango" , country:"Russia"}
const fruite3 = {fName : "Banana" , country:"Thailand"}

fruite1.about.call(fruite2);   
fruite1.about.call(fruite1);   
fruite1.about.call(fruite3);   















// methods

// method means function inside object

const person = {firstName : "sachin" , age : 27, about: function(){

    console.log(`person name is ${this.firstName} and age is ${this.age}`)  // here we can access these keys
                                                                            // firstName and age using this keyword
                                                                            // otherwise it will print firstName is not defined
                                                                            // and if in future name changes the changes name will get printed

     console.log(this) // it will print entire person object                                                                         
}}

person.about();  // to invoke function we need to use parenthesis


// this keyword is an object 
// here this.firstName === person.fristName


function personInfo(){

    console.log(`peron name is ${this.firstName} and age is ${this.age}`)  // defining function outside
}

const person2 = {firstName : "sachin" , age : 27, about: personInfo}  // calling that function inside object
                                                                    // we calling it not invoking it
const person3 = {firstName : "Mahesh" , age : 30, about: personInfo}

const person4 = {firstName : "Ganesh" , age : 25, about: personInfo}


person3.about();
person2.about();
person4.about();

//  arrow function behavous differently in case of this keyword



 const person = {
    firstName : "sachin",
    age: 27,
    about :  ()=>{
        console.log( `person name is ${this.firstName} and age is ${this.age}`)  // here the values of fristname
                                                                                // and age will be undefined
                                                                                // arrow function takes the value of upper block
                                                                                // no need to write this key word
    }    
}

person.about();



const person2 = {
    firstName : "sachin",
    age: 27,
    about :  ()=>{
        console.log( `person name is ${firstName} and age is ${age}`) 
    }    
}

person2.about();



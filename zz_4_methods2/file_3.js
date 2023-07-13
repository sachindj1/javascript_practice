//  functions 

// call
// apply
// bind

const person1 = {
    firstName : "sachin",
    age : 27,
    about : function myFunc(){
        console.log(this.firstName , this.age)
    }
}

const person2 = {
    firstName : "Ganesh",
    age : 17,
   
}

person1.about();


// person2 doesnt have about function but we can borrow it from person1
// we can use call function

person1.about.call(person2);   // we must need to pass person1 or person2 
person1.about.call();          // here the the firstName and age will be undefined 

person1.about.call(person1);   // if we need to print person1 info where the about function is written
                               // in that case too we need to pass it inside call function//




//------------------------------------------------------------------------

function info(country , price){
console.log(`name of the fruite is ${this.fruiteName}` , country , price)
    
}


const fruite1 = {
    fruiteName : "Mango"

}

const fruite2 = {
    fruiteName : "Banana"

}

const fruite3 = {
    fruiteName : "Apple"

}

info.call(fruite2 , "india", 55);
info.call(fruite1 , "Amarica", 100);
info.call(fruite3 , "Thailand", 88);


// in case of apply

info.apply(fruite2 , ["Russia", 777])   // in case of apply we pass argument in array

const newFunc = info.bind(fruite1 , "Japan", 5555);     // bind return a function

newFunc();


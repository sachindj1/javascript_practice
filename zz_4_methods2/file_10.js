// class in javascript


class createUser{

    constructor(firstName, age){         
        this.firstName = firstName;
        this.age = age;
    }

    about(){

        return `${this.firstName} and  ${this.age}`

    }
}

let user1 = new createUser("sachin", 27); // Class constructor createUser cannot be invoked without 'new'

console.log(user1);


// class and sub-class

class animal{

    constructor(name , age){
       this.name = name;
        this.age = age;

    }

    eat(){
        return `${this.name} is eating`;
    }

    isCute(){

       return this.age <=10 ;
    }
}


const animal1 = new animal("dog", 2);

console.log(animal1.isCute());

/// sub -class

class cat extends animal{

};

const tom = new cat("tom", 3);   // we can create object with only using new keyword

console.log(tom);
console.log(tom.isCute());




// getter and setter


class user{

    constructor(firstName , lastName , age){
this.firstName = firstName ;
this.lastName = lastName;
this.age = age;

 }

   get fullName(){                     // if we want to call this method without () and like parameters
                                 // in that case we write get word before that method

    return ` ${this.firstName}  ${this.lastName}`
 }

}


const user1 = new user("sachin", "jadhva", 27);


   //  console.log(user1.fullName())  without getter we call method like this

   console.log(user1.fullName);


///////////////////////////////////////////////////////////////////////////////////////


//setter


class person {

    constructor(firstName , lastName){
         this.firstName = firstName;
         this.lastName = lastName ;


    }

     fullName(){

        return ` ${this.firstName}  ${this.lastName}`
     }
    

     setName(firstName , lastName){
        this.firstName = firstName;
        this.lastName = lastName ;
       }


       set fullName2(fullName){      // this method accepts only one parameter
          
         const [firstName , lastName] = fullName.split(" ");

         this.firstName = firstName ;
         this.lastName = lastName ;



       }

}

const person1 = new person("Sachin" ,"Jadhav");

console.log(person1.firstName);
console.log(person1.lastName);

// in case you want to change the name of user

person1.setName("GANESH", "JADHAV");

// or withoud setName method we can directly change names

person1.firstName = "SACHIN";
person1.lastName = "JADHAV";
console.log("changed name ",person1.firstName);
console.log(person1.lastName);


// another way to set the firstName and lastName simultaniuosly is using setter method 

person1.fullName2 = "AMOL MORE";

console.log(person1.firstName);
console.log(person1.lastName);










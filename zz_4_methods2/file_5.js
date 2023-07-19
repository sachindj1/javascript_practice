

const person1 = {

    firstName : "Ganesh",
    age : 27,
    address : "pune",
    about : function info(){
        console.log(`persons first name is ${this.firstName} and his age is ${this.age}`)
    }
}

person1.about();





const userMethod ={
    about : function(){
        console.log(`persons first name is ${this.firstName} and his age is ${this.age}`)
    } ,

    is18 : function(){
        return this.age >=18 ;
    }

}



function createUser(firstName , age , address){

    const user ={}
    user.firstName= firstName ;
    user.age = age;
    user.address = address;
     user.about = userMethod.about ;
     user.is18 = userMethod.is18 ;
    return user ;
}

const person3 = createUser("Mahesh", 19, "latur");

person3.about();

console.log(person3.is18())

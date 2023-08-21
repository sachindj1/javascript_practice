//   static methods and properties


class person{

    constructor(name, age){
   this.name = name ;
   this.age = age;
 }
 

 personInfo(){

    return `${this.name} ${this.age}`;

 }

 static newInfo(){

    return `this is newInfo static method`
 }

    
}



const user1 = new person("sachin" , 27);

console.log(user1.personInfo());    // here we created object user1 and then called method

console.log(person.newInfo());  // here we can call static method directly without creating new object















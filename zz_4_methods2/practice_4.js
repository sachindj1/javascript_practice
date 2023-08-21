



class fruites{

constructor(name , area , age){
this.name = name , this.area = area;
this.age = age ;
console.log(age)

}

about(){
    return `fruite name is ${this.name} and it is found in ${this.area}` ;
}

isCute(){

    return this.age > 10 ;

}

}


const firstFruite = new fruites("APPLE", "India");

console.log(firstFruite)

console.log(firstFruite.about());



class animal extends fruites {

    constructor(name ,age){
        console.log(age)
        super(undefined,undefined,age)
      this.name = name ;
 }

 

}


const dog = new animal("Dog" , 20);

console.log(dog.isCute());

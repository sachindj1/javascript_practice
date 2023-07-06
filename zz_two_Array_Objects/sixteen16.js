// object Destructuring

let obj1 ={
    namee : "mahendra",
    age : 33,
    address : "pune",
    songs : "marathi"

}

const var1 = obj1.namee;
const var2 = obj1.age;

console.log(var1, var2);

// in object destructuring we can do the same simply

let {namee , age , ...restProps} = obj1;    // we have to write exact key name as variable name
                     // here new restProps object will get created

console.log(namee , age);
console.log(restProps);



let obj3 = {name : "", age : null , address: undefined}

console.log(obj3);
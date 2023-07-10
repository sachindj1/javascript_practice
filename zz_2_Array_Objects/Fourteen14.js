


const persons = {name:"sachin", age: 27, address : "pune"};

//console.log(persons.name);

// iterating object 

for (info in persons){

    console.log(`${info} : ${persons[info]}`);
}


console.log(Object.keys(persons));


for(key of Object.keys(persons)){

    console.log(key)
}


//----------------------------------------------------

// computed properties

const key1 = "value1";
const key2 = "value2";

const value1 = "myvalue1"
const value2 = "myvalue2"

let obj={

    [key1] : value1,
    [key2] : value2
}

console.log(obj);






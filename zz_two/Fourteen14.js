


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




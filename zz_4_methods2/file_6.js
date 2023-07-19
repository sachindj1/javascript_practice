const obj1 = {
    key1 : "value1",
    key2 : "value2",

}


const obj2 = {
    key3 : "value1"
 
}

console.log(obj2.key3);
console.log(obj2.key1); // key1 is not inside obj2 
                        // but if we want to get it from obj1 
                        // then we create connection between obj1 and obj2
 const obj3 = Object.create(obj1);   // only one other object not like (obj1 , obj2)
 
 console.log(obj3.key1);

 console.log(obj3)    // empty object , [[prototype]] , __proto_ _ are same
                      // prototype  this is different in javascript 


 // we can create empty object by two ways

 const obj4 = {}

 const obj5 = Object.create(obj1);
 console.log(obj5.__proto__);     // keys of obj1



 // we can add keys or values inside empty object like this

 obj4.key1 = "value1 in object 4";

 console.log(obj4.key1);









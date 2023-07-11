// splice() method

// start  ,   delete  , insert 


let array1 = ["item1", "item2", "item3", "item4"];
console.log(array1);

// delete item

array1.splice(2, 1)  // starting index and how many items i want to delete

console.log(array1);

// insert item 

array1.splice(3 ,0 ,"Added item") // starting index 3 , zero delete , add item

console.log(array1);


// insert and delete item

const newArray = ["value1", "value2", "value3", "value4"]
console.log(newArray);
newArray.splice(1 ,1, "item1", "item2");

console.log(newArray);
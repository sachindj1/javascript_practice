// map() method            (these are array methods)


// it takes callback function as a input , like in forEach method

// in map , function can return value and we can store it as array
// in case of forEach we can not do that



let numbers = [1,2,3,4,5];

let num = numbers.map((number)=>{
     
    //console.log(number*2);

    return number*2;
})

console.log(num);
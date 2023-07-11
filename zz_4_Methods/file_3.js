//  filter() and reduce() methods


// 1---> filter();


let numbers = [1,2,3,4,5,6];

const isEven = function(number){

    return number % 2===0;
}

let newArray = numbers.filter(isEven);   // call back function used should return boolean value

console.log(newArray);


let numbers1 = [1,2,3,4,5,6];

const isEven1 = function(number){

    return number*2;
}

let newArray1 = numbers.filter(isEven1);    // the callback function is not returning boolean value
                                            // output will be original array


//------------------------------Reduce()----------------------------------------------//


let numbers2 = [1,2,3,4,5,6,7];

// aim : sum of all numbers

const sum =numbers2.reduce((accumulator , currentValue)=>{

    return accumulator + currentValue ;
})
console.log(sum);


// we can pass the initial value of accumulator 

const sum1 =numbers2.reduce((accumulator , currentValue)=>{

    return accumulator + currentValue ;
} , 100);

console.log(sum1);

//  accumulator     accumulator     return

//1     1               2             3
//2     3               3             6
//3     6               4             10
//4     10              5             15
//5     15              6             21
//6     21              7             28



// note what reduce() method doing here is reducing all the numbers and giving sum of all numbers



let userCart = [{productId : 1 , productName : "mobile" , price : 10000},
                {productId : 1 , productName : "cycle" , price : 5000} ,
                {productId : 1 , productName : "laptop" , price : 25000} ]


              let totalBill =  userCart.reduce((totalPrice, currentProductPrice)=>{

                 return totalPrice + currentProductPrice.price ;     // price from each object

                } , 0)  // we set initial total price as zero
    
                console.log("total amount to pay", totalBill);


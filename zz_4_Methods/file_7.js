// some()  and fill()  method

let numbers = [2,4,6,8,10];

  const ans = numbers.some((number)=>{

    return number%2 ===0
})


console.log(ans)


// ---------------------------------------fill()--------------------------------------------//


// if we want to create array of length 10 and value 5 

const myArray = new Array(10).fill(5);     // constructor

console.log(myArray)


let nums = [1,2,3,4,5,6,7];
console.log(nums)
// if we want to change the values of particular index we can do that

nums.fill(   0,             2,             5) ;
        //  Value ,  starting index,  end index

        console.log(nums)












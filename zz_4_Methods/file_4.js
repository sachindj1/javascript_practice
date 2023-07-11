//  sort() method 



// ascii code or numbers
// numbers assigned to each alphabates (capitals, small , signs);

const numbers = [2200,50,12,1,457,1168];
numbers.sort();
console.log(numbers);    // [1, 1168, 12, 2200, 457, 50]
                         // it considers numbers as string 
                         // and sort it like we sort words based on alphabetical order


    let names = ["sachin", "ganesh" , "bablu", "SACHIN", "RANI"];
    names.sort();
    console.log(names);     // ['RANI', 'SACHIN', 'bablu', 'ganesh', 'sachin']
                            // here the preference is given to capital words
                            // that is how above numbers got sorted

  // to get the expected result we can use callback function

  let newArray = numbers.sort((a,b)=>{
 
      return a-b               // logic  ,  if a-b = positive(greater than 0) ----->  alters positons b to a
                                // if a-b = negative ------->  keep the position of a , b as it is.
  })    


  console.log("expected sorted array", newArray);




  let newArray2 = numbers.sort((a,b)=>{
 
    return b-a              // to sort numbers in descending order
})    


console.log(" sorted array in descending order", newArray2);



// real life example , sorting products according to there prices

const productes = [{
    productId :1 , productName:"mobile" , price: 30000},
{productId :2 , productName:"shirt" , price: 500},
{productId :3 , productName:"pen" , price: 100}]


// sort products lowToHigh

const lowToHigh = productes.sort((a, b)=>{            // need to create new array or both lowToHigh and highToLow
                                                      // sorted array give same array
                                                      // pointer addressing to same array address
                                                      // heap memory location
    return a.price - b.price


})
 

console.log("products low to high", lowToHigh);


// products high to low


const newArreay = productes.slice(0).sort((a, b)=>{
    return b.price - a.price


})
 

console.log("products High to Low >>", newArreay);






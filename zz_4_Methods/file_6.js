// every() method


const numbers = [2,4,6,8,10];

  const ans = numbers.every((number)=> number %2 ===0)   // if any numbers fails this condition every method returns false

  // calback function -----> true/false (boolean)

  // every method ---------> true/false (boolean)

  console.log(ans);



  // real life example


  
const useres = [{userId : 1 , userName: "sachin", price: 1500},
{userId : 2 , userName: "ramesh" , price: 2500},
{userId : 3 , userName: "suresh" , price: 1000},
{userId : 4 , userName: "mahesh" , price: 500}]


const anss = useres.every((user)=>{
    return user.price < 3000 ;
})

console.log(anss)


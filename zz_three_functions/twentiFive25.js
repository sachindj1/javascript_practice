// rest parameters

function numbers(a,b,c){

    console.log("value of a is ", a)
    console.log("value of a is ", b)
    console.log("value of a is ", c)
    

}

numbers(11,12,13,14,15,16,17)   // rest of the parameters will not get print



function numbers2(a,b,c,...d){

    console.log("value of a is ", a)
    console.log("value of b is ", b)
    console.log("value of c is ", c)
    console.log("value of d is ", d)    // here the rest parameters will be stored inside d as array

    

}

numbers2(11,12,13,14,15,16,17) 



function addAll(...numbers){

    console.log(numbers);
    let total = 0;
     for (number of numbers){

         total = total + number ;
     }

     return total;

}

let ans = addAll(1,2,3,4,5,6);
console.log(ans)

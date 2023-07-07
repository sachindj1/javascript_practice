// default parameters


function addTwoNum(a , b){
      if(typeof b === "undefined"){     // earlier metod
        b=1;
      }

return a+b ;
}

let sum = addTwoNum(3);  // if we give only one value
console.log(sum)



// new method to set default value

function addNum (a=1,b =0){        // if no value set for b , by default it take 0

    return a+b
}


let result = addNum(4,5);    // if we pass both the values it takes passed values 
console.log(result)
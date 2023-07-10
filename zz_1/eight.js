// for loop in array 

let fruites = ["apple", "banana", "grapes", "orange"];

console.log(fruites.length);

console.log("the fruite i love",fruites[2]);

//  using for loop


// for(let i=0 ; i<=fruites.length-1 ; i++){

//     console.log(fruites[i]);
// }




//using while loop

// let i = 0;

// while(i<= fruites.length-1){

//     console.log(fruites[i]);
//     i++
// }






// using do while loop
// let i= 0

// do {
//     console.log(fruites[i])
//     i++;
// }while(i<=fruites.length-1)




let num = 10;

 function counter(num){

    return [num +1, num+2 , num+3 , num+4] ;

}

let number = [].concat(counter(num));

console.log(number)
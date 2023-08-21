// we include script file into html file in 4 ways

// 1> <script path= '' >  inside header tag
// 2> <script path = "">   at the bottom of body tag
// 3> <script async path>   
// 4> <script defer   > 





// function myFunction(power){

//     return function(number){
   
//         return number ** power ;

//     }
// }

 myFunction=(power)=>  (number)=>  number ** power 
    
 


const square = myFunction(2);

const ans = square(3);

console.log(ans);



const cube = myFunction(3);
const ans1 = cube(3);

console.log(ans1)




/// calling function for once 

function myFunc(){
    let count =0 ;

return function(){
        if(count < 1){
        console.log("Hey , you called me !")
        count ++ ;
    }else{
        console.log("you already called me !!!");
    }

    }
}

const res = myFunc();

res();
res();













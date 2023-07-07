// Lexical scope

// if variable doesnt exist in child function it look into its lexican environment (parent function, within the function declared)
let var1 = "hello there from global lexical environment"

function myApp(){

      let var1 = "hello there from main function"

      const insideFunc = ()=>{
             
       // let var1 = "hello there , from inside function"; 


        console.log(var1);     // if he doesent find var1 in insideFunc it look in myApp (i.e. inside lexican environment)
                               // if there also var1 is not found he look into global environment whole file

}


insideFunc();


}



myApp();



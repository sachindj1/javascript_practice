// callback functions


 // if we take a function as input and calling it means callback function


function myApp(name){

    console.log("inside my app function")
    console.log(name)
}


function myNewApp(callback){
//console.log(callback)                  // it will print the complete myApp function
console.log("inside my new app function")


callback("sachin");                 // calling passed function inside function  
                            // this is called callback function
                           
}



myNewApp(myApp);       // passing function as parameter
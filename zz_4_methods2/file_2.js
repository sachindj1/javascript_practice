
//  console.log(this) // it will print js window object which is global object
//  console.log(window)






function myFunc(){                        // this function will be present in window object
    console.log("hello world ");
}

myFunc();

window.myFunc();  // give the same output

// if we use strict mode then in that case it will not print the window object 

function mySecondFunc(){
    "use strict" 
    console.log(this)          // output will be undefined
}


mySecondFunc();
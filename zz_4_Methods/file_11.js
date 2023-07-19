// optional chaining 

const user = {firstName : "sachin" , address : {homeAddress : 1234}}

console.log(user?.firstName);  //

console.log(user.address?.homeAddress)   // the ? mark checks weather there is address key present 
                                         // if it is there then print it else if it is not there 
                                         // it will print undefined (address key still not mention
                                         // if we do it without ? it will print an error saying
                                         // cannot access the property of undefined key, to avoid this
                                         // kind of error we use ?)















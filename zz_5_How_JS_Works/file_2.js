// closure

// when a function returns a functions 
// the return function comes with prameters present in its lexican environment


function outerFunction(firstName, lastName){


function innerFunction(){

    console.log(firstName , lastName);
}

return innerFunction ;

}

const ans = outerFunction("sachin" , "jadhav")   // here innerFunction returns with 
                                                 // parameters present in its lexican environment
                                                 // firstName and lastName

ans();


// example 1


function hello(x){
    const a = 12;
    const b = 22;

    return function hey(){
           console.log(x,a,b)
    }
}

const new1 = hello("sachin");

new1();
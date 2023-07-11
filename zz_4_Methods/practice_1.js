// map() and forEach();



let numbers = [1,2,3,3,6,8,3];



for (let i=0 ; i<numbers.length ; i++){

    console.log(numbers[i]);

}

numbers.forEach(function(number){   // in for each function does not return anything
                                     // but in case of map function it returns the number we can store them as new array
    console.log("for each ",number)
})


numbers.forEach((number,index)=>{
    console.log("number using arrow function", number , "and its index", index)  
})


//   --------------------------map()-------------------------//

     let names = ["sachin", "mahesh", "ramesh", "suresh"];

    let newNames = names.map((name)=>{

        console.log(name);
        return name.toLocaleUpperCase();
     })

    console.log(newNames);






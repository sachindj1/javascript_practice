// array

let names = ["sachin", "ganesh", "mahesh", "ramesh", '',["SACHIN", "RAMESH"], undefined, null , 34, 4.5 , true, {fruite:"apple"}];

console.log(names[5]);

console.log(names[(names.length-1)].fruite);

// we can iterate array 
// filter , map 

  const newNames = names.filter((name , index)=>{
    //console.log(name , index)
    return name;


}
)


console.log(Array.isArray(newNames))

const fruites = ["APPLE", "BANANA", "GRAPES"];

const fruites2 = fruites;

console.log(fruites);
console.log(fruites2);


fruites.push("ORANGE");
console.log(fruites2);
console.log(fruites);



// objects 

const players = {key1 :"sachin", key2: "Ganesh" , key3 : "Rama"};

console.log(players);


for(const player in players){
    console.log(players[player]);
}


console.log(players["key2"]);


// functions 

 function info(){

    console.log("inside function")
 } 

 info();


function hello(firstName, age){
 this.firstName = firstName;
 console.log(firstName)

}

hello( "sachin" , 18);

// find() method


let names =["snake", "dog", "tiger","lion", "cat"];


function isString3(string){

    return string.length===3;
}


    const ans = names.find(isString3)

    console.log(ans);


// note : it will only return first occurance of the element
 //      like indexof method ,, if we change dog to doggy , o/p => cat


// real life example

const useres = [{userId : 1 , userName: "sachin"},
                {userId : 2 , userName: "ramesh"},
                {userId : 3 , userName: "suresh"},
                {userId : 4 , userName: "mahesh"}]


const ans2 = useres.find((user)=> user.userName==="mahesh");

console.log(ans2)












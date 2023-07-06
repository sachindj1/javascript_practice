// objects in array
// very usefull in real world applications 

const users =[{name:"rama", village: "sindkhed"},{standard : "8th" , subject:"math"},["mango", "apple"],"sachin"]


console.log(users);

for (let user of users){

console.log(user);

}


// only objects inside array , and iterating them using for of loop


let students = [
    {
    studentId : 1, 
    name:"ramesh",
    city : "pune"
     },
    { studentId : 2, 
    name:"rame",
    city : "mumbai"
     },
     { studentId : 3, 
        name:"payal",
        city : "delhi"}];

        console.log(students)

        for(let student of students){

            console.log(student.name);
            console.log(student.city);
        }


console.log("hello sachin")
async function hello() {
    try {
      const response = await fetch("http://localhost:7000/procedures");
      const data = await response.json();
      console.log(data);

      const newData = data.map(item =>{



       // const data = [item.pname , item.section , item.duration]

        return  item.pname;
      })
        
     const dataCon = document.getElementById('datacontainer');

      dataCon.innerHTML = '';

        newData.forEach(item => {

            const para =  document.createElement('p')
          
            para.textContent = item;
            dataCon.appendChild(para);
        });
     // console.log(newData);

    } catch (error) {
      console.error("Error fetching data:", error);
    }
  }
  
  hello();


// lets practice spreading operator with array

let origanalArray = [1,2,3];
let newArray = [...origanalArray];

console.log(newArray);

let array1 = ["sachin" , 3, 5 ,"ganes"];

let newArray2 = [...array1 , "mahesh ", 77, "latur"];

console.log(newArray2);


let combinedArray = [...origanalArray , ...array1 , ...newArray2];

console.log("combined array >>>>", combinedArray)

// spreading operator with objects

let ogj1 = {name : ["sachin","ganesh", "ramesh"] , age : 27 , address : "latur"};
console.log("first obj >>>", ogj1);

let obj2 = {...ogj1 , phone:7777, email : "sachin@gmail.com"};

console.log("new obj2 >>>", obj2);

let combinedObj = {...ogj1 , obj2};

console.log("combined object >>>>>",combinedObj)



const elementa = document.getElementById('display')
//elementa.innerHTML= ogj1.name;

const heu= ogj1.name.map(item=>{return item});

  
    heu.forEach(item =>{


      const hello = document.createElement('h2');

      hello.textContent =item
 
       
       elementa.appendChild(hello);
    }

    
    )




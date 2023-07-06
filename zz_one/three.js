console.log("hello from third js file");



// lets practice regarding spreading with objects operator

// let obj1 = {name : "sachin" , age: 27 , address : "pune"}

// let obj2 = {Education : "engineering" , year: 2018};

// console.log("first obj >>>", obj1);
// console.log(typeof obj1);

// let combined_obj = {...obj1 , obj2};
// console.log("combined obj >>>>" , combined_obj);

// lets practice regarding spreading with array operator

// let arr1 = ["sachin" , 27 , "latur", "engineering"];

// let arr2 = ["mechanical" , 2018];

// console.log("first array >>>>", arr1);

// let combined_arr = [...arr1 , ...arr2];

// console.log("combined array >>>>", combined_arr);

let names = ["sachin", "dhoni", "sehavagh", "yuvaraj"];

let elements = names.map(name => {
  return name;
});

const display = document.getElementById('display');

let table = document.createElement('table');
table.setAttribute('border', '1');

let tableHead = document.createElement('thead');
let headRow = document.createElement('tr');
let th = document.createElement('th');
th.textContent = 'Names';
headRow.appendChild(th);
tableHead.appendChild(headRow);
table.appendChild(tableHead);


/////////

let thh = document.createElement('th');
thh.textContent = 'users';
headRow.appendChild(thh);
tableHead.appendChild(headRow);
table.appendChild(tableHead);

let tableBody = document.createElement('tbody');
elements.forEach(element => {
  let row = document.createElement('tr');
  let cell = document.createElement('td');
  cell.textContent = element;
  row.appendChild(cell);
  tableBody.appendChild(row);
});

table.appendChild(tableBody);
display.appendChild(table);







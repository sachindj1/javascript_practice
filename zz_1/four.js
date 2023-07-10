console.log("fourth file")      

//  switch in javascript

// break statement is important to break the execution after condition satisfaction, otherwise the code keeps

let day = 1 ;

switch (day){

    case 0 : 
    console.log("today is sunday");
    break ;

    case 1 : 
    console.log("today is monday");
    break ;

    case 2 : 
    console.log("today is tuesday");
    break ;

    case 3 : 
    console.log("today is wednesday");
    break ;

    case 4 : 
    console.log("today is thursday");
    break ;

    case 5 : 
    console.log("today is friday");
    break ;

    case 6 : 
    console.log("today is saturday");
    break ;

     default :
    console.log("invalid day ");

}

// console.log("the current inner width of window",window.innerWidth);

// console.log("the current outer width of window",window.outerWidth)
// console.log(window.outerWidth - window.innerWidth)


// console.log("the cuurent window inner height", window.innerHeight);
// console.log("the current window outer height", window.outerHeight);

//console.log(window.blur());

// window.addEventListener('blur', function() {
//     console.log('Window lost focus');
//   });
  

 // window.document.createElement('p')

// window.open('https://www.example.com', 'sachin');

//window.alert("hello sachin !!!");

//console.log(window.location.href);

//window.location.href='http://localhost:3001/';

// window.addEventListener('resize' , function(){

//     console.log("size changed", window.innerHeight)
// })

// setTimeout(function(){

//     console.log("delayed function execution")
//     window.location.href='http://localhost:3001/';

// }, 10000)

// console.log("windows navigator",window.navigator.userAgent);

// window.location.href='http://localhost:3001/';
// setTimeout(function(){

//    window.close();

// }, 10000)


// const userInput = window.prompt("enter your name :");

// console.log("user input :", userInput);

// window.location.reload();


// if(window.confirm('are you sure you want to delete data')){
//     console.log("successfully deleted");
// }else{

//     console.log("the object not deleted")
// }


// listening for the scroll event and retrieving the scroll position 

// window.addEventListener('scroll', function(){

// console.log("the scrolled position :" , window.scrollY)

// })


window.addEventListener('load', function(){

console.log("window has finished lioading ")

})


// window.localStorage.setItem('userName' , 'sachin');

// const sj = window.localStorage.getItem('userName');

// console.log("the stored localstorage value >>",sj)


window.sessionStorage.setItem("userId" , 12);
window.sessionStorage.setItem('userName' , 'sachin');

const userId = window.sessionStorage.getItem('userId');

const userName = window.sessionStorage.getItem('userName');

console.log("user Name and user Id >>>>", userName , userId);

setTimeout(function(){

    window.sessionStorage.removeItem('userId');

}, 5000);



window.scrollTo(0, 0);
html2canvas(document.body).then(function(canvas) {
  var screenshot = canvas.toDataURL();
  console.log('Screenshot:', screenshot);
});


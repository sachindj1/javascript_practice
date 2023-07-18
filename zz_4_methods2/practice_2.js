const person = {
    firstName : "sachin",
    age : 27,
    about : function info(){
        console.log(`person name is ${this.firstName} and his age is ${this.age}`)
    }
}

person.about();


const product1 = {

    productName: "laptop",
    price : 56000,
    company : "hp",
   "delivery date" : "24-5-2023",
    productInfo : function info(){
        console.log( `the product is ${this.productName} and its price is ${this.price} of ${this.company} company and the delivery date is ${this["delivery date"]} }`)
    }
}


product1.productInfo();
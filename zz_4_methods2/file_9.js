// only functions can have prototypes

let numbers = [1,2,3];

// console.log(numbers.)  after dot we see number of methods , which are prototypes
// but number is not a function then how it is accessing these methods
// well when we declare a array internally js creates array like this

// let numbers = new Array(1,2,3);

// and this array constructor has all access to these methods
// we can see the prototypes of numbers like this

console.log(Object.getPrototypeOf(numbers))
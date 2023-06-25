let numbers=[1,23,3]
console.log(numbers);



//actual create array in javascript
let numbers1=new Array(1,2,3,3);
//new keyword tolk in privious class and Array is function and function ek free space karta hai that is prototype
console.log(numbers1);
console.log(Array.prototype)
//number1 bhi object hai means array object bhi hota hai
//number ka prototype kya hai
console.log(typeof numbers1)
console.log(Object.getPrototypeOf(numbers1));//find ,map,foreach...etc.
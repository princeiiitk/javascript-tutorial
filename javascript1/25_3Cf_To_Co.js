 //in 24_2Cf_To_Co.js agar bahut sare method add kare ho to problem ho skta hai=>only concept hai ise code me next file me eska solution hai
 
 //like problem agar koi method chhuth jaa hai
 //solution
 const obj1={
    key1:"value1",
    key2:"value2"
 }
 const obj2={
    key3:"value3"
 }
 console.log(obj1.key1);
 console.log(obj2.key3);
 console.log(obj2.key1);//o/p=undefine but hum chahte hai ki undefine ke jagah obj1 me se key1 access kare





//there is one way to create empty object
console.log("************")
const obj3=Object.create(obj1)//return {}
//obje3 ek __proto__ just like key karta hai __proto__,[[prototype]]
//[[prototype]],prototype ye dono alag alag hai
console.log(obj3.__proto__);//obj1 ke element print hoga =>object.create(obj1) obj3 ke proto me obj1 ko set karta hai

//connection obj3 with obj1
obj3.key4="value4";
console.log(obj3.key4);
console.log(obj3);
console.log(obj3.key1);//key1 key not in obj3 but print key1 value bcz of object.create(obj1) function

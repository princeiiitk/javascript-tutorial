//diffrence between dot and bracket notation


//double word not alloed in key for object creation like person hobbis but alloed by "person hobbis"
const person={name:"prince",
age:22,
city:"sasaram",
"person hobbis":["cricket","sleeping","music"]

};
console.log(person["person hobbis"])
console.log(person.age);
console.log(person['age']);


//add variable content in object
const key ="email";
person[key]="prince@gmail.com";
console.log(person);
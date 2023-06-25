//map
//map is an iterater
//store data in orderd fashion
//store key value pair (like object)
//duplicate key are not allowed like objects
//diffrent between maps and objects
//object can only have string or symbol
//as key
//in maps you can use anything as key 
//like array , number , string
//map data structure
//objecte literal
//object is a iterater
//key max of the case string hota hata
//key some time symbole bhi hota hai





//revise of obj
const person ={
    firstname : "prince",
    age:20,
    1:"one"//1 is string in object literal
}

console.log(person.firstname);
console.log(person["firstname"]);
for(let key in person){
    console.log(typeof key)
}






//map->key value pair
const person1=new Map();
person1.set('firstname','prince');
person1.set('age',22);
person1.set(1,'one')//in map 1 is number 
//key also array [1,2,3,3]
//key also object
console.log(person1);
console.log(person1.get("firstname"));
console.log(person1.get(1));
console.log(person1.keys())
for(let key of person1.keys()){
    console.log(key ,typeof key)
}




//for of loop
for(let key of person1){
    console.log(key)
    console.log(typeof key)
    console.log(Array.isArray(key));
}



//destructuring 
for(let [key ,value] of person1){
    console.log(key,value)
}





//direct passing array as a key value pair
const person2 = new Map([['pp',1],['prince','kumar']])
console.log(person2);




//practicle example
const person4={
    id:1,
    firstname:'prince'
}
//extra info store without using object use map
const extraInfoPerson=new Map();
extraInfoPerson.set(person4,{age:22,gender:"male"})//person4 is key and another is value in this map
console.log(extraInfoPerson);
console.log(extraInfoPerson.get(person4));
console.log(extraInfoPerson.get(person4).age)
console.log(person4.id);
console.log(extraInfoPerson.get())


//method
//function inside object



const person = {
   firstname: "prince",
   age: 18,
   aboutfunc: function () {
      console.log("hello world")
   }
}
console.log(person);
console.log(person.aboutfunc)
//how to print inside the func content
//by calling the func
person.aboutfunc()




const person1 = {
   firstname: "prince",
   age: 18,
   aboutfunc: function () {
      // console.log(`my firstname is ${firstname} and my age is ${age}`) error does not right sytex
      //right by this keyword
      console.log(`my firstname is ${this.firstname} and my age is ${this.age}`)

   }
}
person1.aboutfunc()






console.log("*****");





//this object
const person2 = {
   firstname: "prince",
   age: 18,
   aboutfunc: function () {
      console.log(this)//this is a object in thses case (person is this object)
      console.log(this.firstname);
   }
}
person2.aboutfunc()





console.log("&&&&&&&&&&&&")
//function outside the object
function personinfo() {
   console.log(`person firstname is ${this.firstname} and age is ${this.age}`)
   console.log(this);
}
const person3 = {
   firstname: "prince",
   age: 22,
   about: personinfo
}
const person4 = {
   firstname: "rohan",
   age: 20,
   about: personinfo
}
// person3.about
person3.about()//this is person3 object
person4.about()

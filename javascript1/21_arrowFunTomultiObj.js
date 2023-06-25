//arrow function 
//arrow function ke pass this object nahi hota hai 
//arrow function me this apane sourrounding se leta hai means ek level upper se leta hai jaise this window print karega
const user1={
    firstname:"prince",
    age:22,
    about:()=>{
        console.log(this);//window object print karega 
        console.log(this.firstname,this.age);
    }
}
user1.about()
user1.about.call(user1)
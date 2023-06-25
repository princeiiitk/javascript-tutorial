//     2015 /es6
// class keyword
//class are fake
//jo kam hum 30_appliction_newkey file me kiya hai means constructer(objecte function) create kiya tha wo 
//hum ab class keyword use kar ke karenge that maens consteructer creation karenge with new keyword


class createobject{
    constructor(name,age,email,address,a){
        console.log("constructer call")
        this.name=name;
        this.age=age;
        this.email=email;
        this.address=address;
        this.b=a;
    }
    about(){
        return this.name;
    }
    is18(){
        return this.age>18;
    }
}
const user=new createobject("prince" , 22,"psps","ssm",2);
const user1=new createobject("rohan",22,'ff',"hr",3);
console.log(user);
console.log(user1)
console.log(user.about());
// console.log(Object.getPrototypeOf(user))


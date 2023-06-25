
class Createobject {
    constructor(name, email, age, address, a) {
        this.name = name;
        this.email = email;
        this.age = age;
        this.address = address;
        this.a = a;
        return this;
    }
    about() {
        return this.name;
    }
    is18() {
        return this.age > 18;
    }
}
const user1=new Createobject("prince","ppffj",14,"ssm",1);
for(let key in user1 ){
    console.log(key);//all key of user1 printed
}
console.log("******")
//bur hum chahate hai method wala key print na ho
for(let key in user1 ){
    if(user1.hasOwnproperty(key)){
    console.log(key)};
}
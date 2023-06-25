
Createobject.prototype.about=function(){
    return this.name;
}
Createobject.prototype.is18=function(){
    return this.age>18;
}//consetruction function bhi kahte hai
function Createobject(name,email,age,address,a){
   this.name=name;
this.email=email;
    this.age=age;
    this.address=address;
    this.a=a;
    return this;//nahi bhi likhe to chalega
}
const user1=new Createobject("prince","ppffj",14,"ssm",1);//this name ka ek object bana diya hai
//creatobject ek function hai then ek free space bhi provid karega that is prototype
//new return bhi kar dega {}
//new keyword relation build karega prototype and methed me
console.log( user1.prototype);
console.log(user1);

console.log(user1.about())
console.log(user1.is18())


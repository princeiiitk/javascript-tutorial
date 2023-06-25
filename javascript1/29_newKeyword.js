//only concept 
//of new keyword
function creatUser(name,age){
    this.name=name;
    this.age=age;
}
creatUser.prototype.about=function(){
    console.log(this.name);

}
const user=new creatUser("prince",22);
console.log(user);
console.log(user.about());
console.log(creatUser.prototype);



//working of new keyword
//1.empty object creation jo yaha this hai={}
//2.return this object
//3.new key word iska kam bhi karta hai user=Object.create(createobject.prototype);
//means about function agar creatuser me na mila to apane aap check kare __proto__ me that mean prototype object me 
//__proto__is a refrence to store a adderess of prototype object
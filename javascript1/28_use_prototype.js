// const creatmethod={
//     about:function(){
//         return this.name;
//     },
//     is18:function(){
//         return this.age>18;
//     }}






//add by prototype jo free space milta hai function creatio ke time use use kar ke method declear karna hai







function createobject(name,email,age,address,a){
    const user=Object.create(createobject.prototype);
    user.name=name;
    user.email=email;
    user.age=age;
    user.address=address;
    user.a=a;
    
return user;
}
createobject.prototype.about=function(){
    return this.name;
}
console.log(createobject.prototype.about);
const ans=createobject("prince","ppffj",14,"ssm",1)
console.log(ans);
console.log(ans.about())



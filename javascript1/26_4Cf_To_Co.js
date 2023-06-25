//__proto__=creat chain,proto ek refrence hai
//__proto__=about:function(){
    //     return this.name;
    // },
    // is18:function(){
    //     return this.age>18;
    // }

const creatmethod={
    about:function(){
        return this.name;
    },
    is18:function(){
        return this.age>18;
    }
}
function createobject(name,email,age,address,a){
    const user=Object.create(creatmethod);
    user.name=name;
    user.email=email;
    user.age=age;
    user.address=address;
    user.a=a;
    
 return user;
}
const ans=createobject("prince","ppffj",14,"ssm",1)
console.log(ans);
console.log(typeof ans);
console.log(ans.about());



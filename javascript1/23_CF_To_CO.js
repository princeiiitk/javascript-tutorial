//function(that function create object (jab bahut jayeda object ho ek sath object banane ka function))
//step1=crate empty object
//step2=add key value pair 
//step3=object return 
function createobject(name,email,age,address,a){
    const user={};
    user.name=name;
    user.email=email;
    user.age=age;
    user.address=address;
    user.a=a
    user.about=function(){//ye function sabhi object ke liye same hoga isliye parameter me lene ki jarirat nahi hai

        return `${this.name}`;
    }
    user.is18=function(){
        return  this.age>18;
    }
    return user;
}
const user1=createobject("prince","pspkssm7@gamil.com",14,"ssm",1);
console.log(user1);
console.log(user1.is18())
console.log(user1.about());
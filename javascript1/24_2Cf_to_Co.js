//kamiya in 23_CF_To_CO
//kamiyo ko kaise dur kare

const creatmethod={
    about:function(){
        return this.name;
    },
    is18:function(){
        return this.age>18;
    }

}
function createobject(name,email,age,address,a){
    const user={};
    user.name=name;
    user.email=email;
    user.age=age;
    user.address=address;
    user.a=a;
    //in this function about func and is18 function sabhi object ke same hai lekin memory sabhi ke liye alag alag ban raha that means more use 
    user.about=creatmethod.about;//method addition
    user.is18=creatmethod.is18;//method addtion

    return user;
}
const user1=createobject("prince","ppffj",14,"ssm",1);
console.log(typeof user1);
// console.log(createobject("rohan","pspk",11,"ss",2));
console.log(user1.about())
console.log(user1.is18())
console.log(user1);
// console.log(createobject.is18())

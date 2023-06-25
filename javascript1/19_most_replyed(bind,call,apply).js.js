//most replayed 
//call , bind , apply





//call basic
function myfunc(){
    console.log("hello world");
}
myfunc.call();





//call in object with (this) object
const user={
    name:"prince",
    age:22,
    about:function(){
      console.log(this.age,this.name)
    }
}
const user1={
    name:"rohan",
    age:20

}
//about function use in user1 without declear about key in user1
//by call function 
user.about();
user.about.call();//o/p=undefine, undefine
user.about.call(user);//in this case this object is user or this ki binding user ke sath hai
user.about.call(user1);//in this case this object is user1 or this ki binding user1 ke sath hai






console.log("*******")






//with parametre
const user2={
    name:"prince",
    age:22,
    about:function(a,b){//ise aise bhi likh skte hai about(){console.log(this.firstname)}
      console.log(this.age,this.name,a,b)
    }
}
const user3={
    name:"rohan",
    age:20

}
user2.about.call(user2,2,4)
user2.about.call(user3,2,4)




//apply
console.log("&&&&")
user2.about.apply(user2,[0,8]);





//bind=return function
console.log("%%%%")
const func=user2.about.bind(user3,"pp","qq");
func()






//

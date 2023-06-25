const user={
    name:"prince",
    age:22,
    about:function(a,b){
      console.log(this.age,this.name)
    }
}
user.about()
// const myfunc=user.about()//error bcz not with this object only store myfunc store address of about not onject
const myfunc=user.about.bind(user)
myfunc()
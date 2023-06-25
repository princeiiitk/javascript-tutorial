//
function hello(){
    console.log("hello world");
}
//javascript function===>its behave like function + objecte both
console.log(hello.name);//tells name of function or object
//you can add your own propertis 

console.log("***")
hello.myprop="mera property hai";
console.log(hello.myprop);
//name property--->tells function name and object name 




//function provide usefull property
console.log("****")
console.log(hello.prototype);//function create always free space that prototype mean empty object={}
//only function provied prototype properties not array ,obj etc.
//example
console.log("***")
if(hello.prototype){
    console.log("persent prototype");
}
else {
    console.log("not present");

}
console.log("***")




//prototype check in object
 const hello1={
    key1:"prince"
}
if(hello1.prototype){
    console.log("persent prototype");
}
else {
    console.log("not present");

}




//function ke prototype kuch bhi add or remove kar skte ye free space mila hai
//like exaple
//add key value pair
hello.prototype.abc="abc"; 
console.log(hello.prototype)
//add function
hello.prototype.sing=function(){
    console.log("lalala")
}
console.log(hello.prototype.sing());
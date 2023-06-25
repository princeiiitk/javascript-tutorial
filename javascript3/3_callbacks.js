//understand callback
function myfunc(callback){
    console.log("function is doing task 1");
   callback();
}
function myfunc2(){
    console.log("function is doing task 2");

}
myfunc(myfunc2)
//same
// myfunc(()=>{
//     console.log("function is doing task 2")
// })

//callback ke jagah onSuccess bhi likh sket
function gettwonumberandadd(num1,num2,callback,onfaild){
    console.log(num1,num2);
    if(typeof num1==="number"&& typeof num2==="number"){
    callback(num1,num2);
    }
    else{
        onfaild();
    }
}
function addtwonumber(num1,num2){
    console.log(num1+num2);
}
gettwonumberandadd("2",6,addtwonumber,()=>{
    console.log("wrong data type");

    console.log("please pass number only")
});
// gettwonumberandadd(2,3,(num1,num2)=>{
//     console.log(num1+num2);

// })
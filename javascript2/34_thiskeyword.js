//this keyword
const btn=document.querySelector(".btn-headline");
btn.addEventListener("click",function(){
    console.log("hii prince kumar");
    console.log("value of this")
    console.log(this)
})


//in arrow function this===>window object
btn.addEventListener("click",()=>{
    console.log("hi my name prince kumar");
    console.log("value of this")
    console.log(this)
})
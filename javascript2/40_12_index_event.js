//keypress event--->kon sa button click kiya hai pta padega
//mouseover event---->jaise hi button par le ke jau waise hi kuch show ho




const body=document.body;
body.addEventListener("keypress",(e)=>{
    console.log(e)
})




const mainbutton=document.querySelector(".btn-headline")
console.log(mainbutton)
mainbutton.addEventListener("mouseover",(e)=>{
    console.log("mouseoverevent occur")
})




//mouseleave event
const mainbutton1=document.querySelector(".btn-headline")

mainbutton.addEventListener("mouseleave",(e)=>{
    console.log("mouseleave  occur")
})
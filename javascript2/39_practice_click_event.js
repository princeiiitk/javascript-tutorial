const mainbutton=document.querySelector("button")
const currentcolor=document.querySelector(".current-color");

console.log(mainbutton)
function randomcolor(){
  const red=Math.floor(Math.random() * 256);
  const green=Math.floor(Math.random() * 256);
  const blue=Math.floor(Math.random() * 256);
  const finalcolor=`rgb(${red},${green},${blue})`
  return finalcolor;
}
const body=document.body

mainbutton.addEventListener("click",()=>{
    const random=randomcolor();
    body.style.backgroundColor=random;
    
    currentcolor.textContent=random;
    
})
// //math.random() random number dega
//math.flor(math.random()*10) 1 se 10 ke bich me integer number dega


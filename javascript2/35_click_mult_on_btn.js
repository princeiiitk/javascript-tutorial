console.log("hii")
const firstbutton=document.querySelector("#one")
console.log(firstbutton)
firstbutton.addEventListener("click" ,function(){
    console.log("hii prince")
})





const allbutton=document.querySelectorAll("button")
// for(let button of allbutton){
//     button.addEventListener("click" , function(){
//         console.log(this)//sabke liye alag alag hoga this,pahele ke liye this=first-button
//         console.log(this.textContent)//yaha arrow function nahi use kar skte windo={}
         
//     }) 
// }





///simple for loop
// for(let i=0 ; i<allbutton.length;i++){
//     allbutton[i].addEventListener("click",function(){
//       console.log(this)
//     })
// }



//forEach(function(button))
allbutton.forEach(function(button){
button.addEventListener("click",function(){
    console.log(this);
})
})





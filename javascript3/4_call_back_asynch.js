//callbacks ,callback hell--->settimeout ke under settimeout(),pyramid of doom
//asynchronouse programming


//hume html file par jo hello world likha hua use 1 sec duration me uske class ke name print karane hai
//hum setTimeout() function use karenge
const heading1=document.querySelectorAll(".head")




//callback hell
// const heading2=document.querySelector(".heading2")
// setTimeout(()=>{
// heading1.textContent="heading 1";
// heading1.style.color="red"
// setTimeout(()=>{
//     heading2.textContent="heading 2";
// heading2.style.color="yellow"
// },3000)
// },1000)

// setTimeout(()=>{
// heading2.textContent="heading 2";
// heading2.style.color="yellow"
// },3000)






// const heading=["heading 1","heading2","heading3","heading 4","heading5","heading6","heading7"];
// const color1=["red","black","blue","black","yellow","red","purple"]
// for(let i=0;i<7;i++){
//     let A=1000;
    
// setTimeout(()=>{
//     heading1[i].textContent=heading[i];
//      heading1[i].style.color=color1[i];
// },1000+A)
// }





//function se krte hai---->pyramid of dom
const heading2=document.querySelector(".heading2 ")
const heading3=document.querySelector(".heading3")
const heading4=document.querySelector(".heading4")

function changetext(element,text,color,time,onsuccesscallback,onfailercallback){
    setTimeout(()=>{
        if(element){
        element.textContent=text;
        element.style.color=color;
        onsuccesscallback();
        }
        else{
            if(onfailercallback)
            onfailercallback();
        }


    },time)
}
changetext(heading8,"one","red",2000,
()=>{changetext(heading3,"praveen","green",2000)},()=>{console.log("wrong element")});
// changetext(heading3,"prince","blue",3000);
// changetext(heading4,"kumar","green",4000);
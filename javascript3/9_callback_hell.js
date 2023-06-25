const heading1=document.querySelector(".heading1")
const heading2=document.querySelector(".heading2")
const heading3=document.querySelector(".heading3")
const heading4=document.querySelector(".heading4")
const heading5=document.querySelector(".heading5")
const heading6=document.querySelector(".heading6")
const heading7=document.querySelector(".heading7")
const heading8=document.querySelector(".heading8")
const heading9=document.querySelector(".heading9")
const heading10=document.querySelector(".heading10")

//ye function promises return krarega means resolve and reject return karega
function changeText(element,text,color,time){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            if(element){
                element.textContent=text;
                element.style.color=color;
                resolve("change");
            }
            else{
                reject("wrong");
            }
        },time);
    })
}
// const returnpromises=changeText(heading1,"one","red",1000);
// returnpromises.then(()=>{
//     return changeText(heading2,"two","yellow",1000);
// })
changeText(heading1,"one","red",1000)
.then(()=>{
    return changeText(heading2,"two","yellow",1000);
})
.then((data)=>{
    console.log(data);
    return changeText(heading3,"three","green",1000);
})
.then((data)=>{
    console.log(data);
    return changeText(heading4,"four","red",1000);
})
.then((data)=>{
    console.log(data);
    return changeText(heading5,"five","black",1000);
})
.then((data)=>{
    console.log(data);
    return changeText(heading6,"six","red",1000);
})
.then((data)=>{
    console.log(data);
    return changeText(heading7,"seven","red",1000);
})
.then((data)=>{
    console.log(data);
    return changeText(heading8,"four","red",1000);
})
.catch((error)=>{
    alert(error)
})



// ()=>return changeText(heading2,"two","yellow",1000)  arrow function ko aise bhi likh skte hai

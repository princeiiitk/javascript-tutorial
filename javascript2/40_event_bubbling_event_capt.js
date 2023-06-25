//event bubbling
//event capturing
//main point pahele capture hoga phir bubble hoga

//event bubbling 
//no capturing 
console.log("hllow world")
const grandevent=document.querySelector(".grandparent")
const parent=document.querySelector(".parent")
const child=document.querySelector(".child")
child.addEventListener("click",()=>{
    console.log("hello i am bubbling child");
})
//same chij parent ke sath
parent.addEventListener("click",()=>{
    console.log("hello i am bubbling parent");
})
//same on grand parent
child.addEventListener("click",()=>{
    console.log("hello i am bubbling grandparen");
})
document.body.addEventListener("click" ,()=>{
    console.log("you clicked bubbling on body")
})
//event bubbling-->kis ek event par click kare or uske parent lga ho to wo bhi call ho jata hai






//event captiring---->yaha par tin argument aata hai tisara(boolean) 
//means event capturing karne hai ya nahi
child.addEventListener("click",()=>{
    console.log("hello i am capturing child ");
},true)

parent.addEventListener("click",()=>{
    console.log("hello i am capturing parent");
},true)

child.addEventListener("click",()=>{
    console.log("hello i am capturing grandparen");
},true)
document.body.addEventListener("click" ,()=>{
    console.log("you clicked  captring on body")
},true)
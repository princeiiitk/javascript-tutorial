//get and set attributes
//hame home nav-bar ko select karna hai means anker tag
const link=document.querySelector("a")
console.log(link.getAttribute("href"))
//mujhe home ke # nahi chahiyeto 
console.log(link.getAttribute("href").slice(1));
//href attribut hai  




// const inputElement=document.querySelector(".form-todo input");
// console.log(inputElement.getAttribute("type"))



//attribute ki value chage kar skte hai
//by set
link.setAttribute("href","http://codprog.com")
console.log(link.getAttribute("href"))
// static list vs live list
//querySelectorAll hamein static list degi
//getElementsBySomething hamein live list
const listitem=document.querySelectorAll(".todo-list li");

const sixthli=document.createElement("li");
sixthli.textContent="item 6" 
const ul=document.querySelector(".todo-list")
ul.append(sixthli)
console.log(listitem)

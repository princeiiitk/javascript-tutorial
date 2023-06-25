//clone nodes
const ul=document.querySelector(".todo-list");
const li=document.createElement("li");
li.textContent="hii prince ";
//clone
const li2=li.cloneNode(true)
ul.append(li2);
//preppend hoga ya append hoga dono mese ek hoga 

ul.prepend(li2);
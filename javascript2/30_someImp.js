//some old method to support poor IE
//appendChild;
//insertBefore;
//replaceChild;
//removeChild;

const ul=document.querySelector(".todo-list");
const li=document.createElement("li");
li.textContent="new todo addition";
ul.appendChild(li);


//insertBefore; todo1 se pahel "new todo addition" add karne hai
//to mujhe todo1 ka refrence lena hoga
ul.insertBefore(li,ReferenceNode)
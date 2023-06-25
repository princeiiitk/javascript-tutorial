//document.creatElement()
//append()
//prepend
//remove


//jb kuch new element add karne hai 
const newtodoitem=document.createElement("li");//li tag add karana hai
newtodoitem.textContent="teach student";//same const newtodoitemtext=document.createTextNode("teach student")
const todolist=document.querySelector(".todo-list");
todolist.appendChild(newtodoitem);//todolist.append() bhi use kar skte hai
//append last me add kar dega
//ab mujhe todo1 remove katna h
console.log(newtodoitem);
const todo1=document.querySelector('.todo-list li');
todo1.remove()//todo1 remove ho gya web pg se
console.log(todo1)



//insert before and after
//li ke pahle and li ke bad
const newitem=document.createElement("li");
newitem.textContent="hii prince";
const todolist1=document.querySelector(".todo-list");
todolist1.after(newitem);
//bad me add ho gya same as before 






//how to add html 
const todolist=document.querySelector(".todo-list")
console.log(todolist.innerHTML)

// todolist.innerHTML="<li>New todo"//new todo add ho gya but hum chahte hai ki pahele todo likha rahe
todolist.innerHTML=todolist.innerHTML+"<li>new todo</li>"
//ek or todo add karenge
todolist.innerHTML=todolist.innerHTML+"<li>new student</li>"
// ese kab use karana hai
//jb kuch innerhtml me change karna ho tb use karana hai tb nahi hai kuch add karna hi tb karna hai jb sirf sare innerhtml ko change karene ho

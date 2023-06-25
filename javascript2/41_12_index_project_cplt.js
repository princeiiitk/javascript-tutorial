const todoform=document.querySelector(".form-todo")
const todoinpute=document.querySelector(".form-todo input[type='text']")
// console.log(todoinpute)
const todolist=document.querySelector(".todo-list")
todoform.addEventListener("submit",(e)=>{
    e.preventDefault();//ye funtion refrece nahi hone deta
    // console.log(todoinpute.value)
    // todoinpute.value=""
   const newtodotext=todoinpute.value;
   const newli=document.createElement("li");
   const newliinnerHtml=`
    <span class="text">${newtodotext}</span>
     <div class="todo-buttons">
     <button class="todo-btn done">Done</button>
     <button class="todo-btn remove">Remove</button>
   </div>`;
 newli.innerHTML=newliinnerHtml
 todolist.append(newli)
 todoinpute.value="";

})
//event deligation application
todolist.addEventListener("click",(e)=>{
    //check if user clicked on done button
    if(e.target.classList.contains("remove")){
        // console.log("you want to remove something")
        const target1=e.target.parentNode.parentNode;
       target1.remove();
    
    }
    else if(e.target.classList.contains("done")){
        // console.log("great")
        //done ke parent ke bhai ke pass pahuchana hai
        const lispan=e.target.parentNode.parentNode;
        lispan.style.textDecoration="line-through";
        // console.log(lispan)

    }
})
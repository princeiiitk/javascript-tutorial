//in html file main section ke kitani class de rakha hai ye mai dekhana chahta hu
const sectiontodo=document.querySelector(".section-todo")
console.log(sectiontodo.classList)//DOMTokenList(2) ['section-todo', 'container', value: 'section-todo container']
//2 classes
//class ke name kaise de means add kaise karenge
sectiontodo.classList.add('bg-dark')
//class ko remove kaise karege 
// sectiontodo.classList.remove('container')




//check class name exit karta hai ya nahi
const ans = sectiontodo.classList.contains("container")
console.log(ans) 



//toggle
//bg-dark class agar nahi hai to add kar dega and hai to remove kar dega
sectiontodo.classList.toggle("bg-dark")
sectiontodo.classList.toggle("bg-dark")




//practice with header
const header=document.querySelector(".header")
console.log(header)
// header.classList.add('bg-dark')
//browser css ko upper se niche dekhata hai

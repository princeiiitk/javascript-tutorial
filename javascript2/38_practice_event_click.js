//little practice with click event
const clickevent=document.querySelectorAll("#one");
console.log(clickevent)
clickevent.forEach(()=>{
    addEventListener("click",function(abc){
        abc.target.style.backgroundColor="yellow"
    })
})

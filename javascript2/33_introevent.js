//intro to event
//click
//event afd karne ke tin tarike hai
//1.)</h2>
/* <button class="btn btn-headline" onclick="console.log('you are click me')">Learn More</button>
</div> */


//2.)tarik
const btn=document.querySelector(".btn-headline");
// console.log(btn)
// console.dir(btn)
// btn.onclick=function(){
//     console.log("hi my name is prince kuamr")
// }

//3.)tarika
//humare pass ek method hai
//metod ka name hai ---->addEventlistener



// const btn=document.querySelector(".btn-headline");
// function clickme(){
//     console.log("you clicked me")
// }


//arrow function best method
btn.addEventListener("click" ,()=>{
    console.log("arrow function")
});

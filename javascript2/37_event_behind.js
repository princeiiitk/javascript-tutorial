const allbuttons=document.querySelectorAll("button")
console.log(allbuttons)
allbuttons.forEach((button)=>{
    button.addEventListener("click",(abc)=>{
        let num=0;
        //hum chahte hai button par click karne ke bad thoda time lek print kare
        //delay
        for(let i=0 ;i<=1000000000;i++){
            num=num+i;
        }
        console.log(abc.currentTarget,num);
    })
})
console.log("hii")









































































































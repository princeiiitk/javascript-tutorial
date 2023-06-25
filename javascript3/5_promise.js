//promise
console.log("script start")
//produce promises
const bucket=['coeffi','chips','vegitable','salt','rice']
const fridricepromises=new Promise((resolve,reject)=>{//promises ko kis variable me store bhi kar
    // skte hai ya return bhi kar skte hai
     if(bucket.includes("vegitable")&&bucket.includes("salt")&&bucket.includes("rice")){
        resolve("fried rice")//resolve ke under string ,object ,array sab pass kar skte hai
     }
     else{
        reject("couldn't do it ");//resolve ke under string ,object ,array sab pass kar skte hai
     }
})


//consume
//how to consume promises
//promiess work browesr provid karta h--->asynchronous programming
//promises ko consume browser karega----->new promises ek obj hai ye eska 
//connection webapi ke satha hota hai(browser) webapi ese callback(microtask queue in case of .then) queue 
//me bhej dega phir event loop dekha ga ki js ki sari code excute ho ya nahi agar ho gya ho to ese
// call stack me bhej de phir excute hoga
fridricepromises.then(
    //jab promise resole hoga
    (myfriedrice)=>{
    console.log("lets eat ",myfriedrice);
}
// ,
// //jab promises reject hoga
// // (error)=>{
// //     console.log(error)}
    ).catch((error)=>{
        console.log(error)
    })


    setTimeout(()=>{//callback queue ke line add hoga and .then property microtask queue me add hoga 
        //microtask queue wali property ki priority jayeda ho callback queu     se
        console.log("hello world");
    },0);



    for(let i=0 ;i<100;i++){
       console.log(Math.random(),i)
    }



    console.log("script end")
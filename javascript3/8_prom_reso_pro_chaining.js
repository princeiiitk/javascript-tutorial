//promise.resolve
//promise chaining


// const mypromise=Promise.resolve(4);
// mypromise.then((value)=>{
//     console.log(value);
// })



//then()method alwase promise return karta hai

function mypromise(){
    return new Promise((resolve,reject)=>{
        resolve("hoo");
        
    })
}
mypromise().then((value)=>{
    console.log(value);
    value=value+"ba";
    return value;//ye value  nhi return kar raha hai balki promise return kar raha hai
    //javascript kuch es tarah se return bhi likh skte hai
    //return Promise.resolve(value)
    //agar return nahi likhe to default undefine return hota
})
.then((value)=>{
    console.log(value);
    value=value+"prince";
    return value;
})
.then((value)=>{
    console.log(value);
})
//function return promises
function ricepromise(){
    return new Promise((resolve,reject)=>{
        const bucket=['coeffi','chips','vegitable','salt','rice']
         if(bucket.includes("vegitable")&&bucket.includes("salt")&&bucket.includes("rice")){
            resolve("fried rice")
         }
         else{
            reject("couldn't do it ");
         }
    })
}
ricepromise().then(
    (myfriedrice)=>{
    console.log("lets eat ",myfriedrice);
}

    ).catch((error)=>{
        console.log(error)
    })
//promises && settimeout
//i want to resolve / reject promise after 2 seconds
function myfriedrice(){
    return new Promise((resolve,reject)=>{
        const value=true;
        setTimeout(()=>{
            if(value){
                resolve();
            }
            else{
                reject();
            }
        },2000)
    })
}
myfriedrice()
.then(()=>{console.log("resolve")})
.catch(()=>{console.log("rejected")})
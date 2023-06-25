const url="https://jsonplaceholder.typicode.com/posts";
function sendrequest(method,url){
    return new Promise(function(resolve,reject){
        const xhr=new XMLHttpRequest();
        xhr.open(method,url);
        xhr.onload=function()
        {
            if(xhr.status>=200 && xhr.status<300){
                resolve(xhr.response)
            }
            else{
                reject(new Error("wrong"))
            }
        }
        xhr.onerror=function(){
            reject(new Error("something wrong"));

        }
        xhr.send();
    

    })}
    sendrequest("GET",url)
    .then(response=>{
        // console.log(response)
        const data=JSON.parse(response);
        // console.log(data)
        return data
    })
    .then(data=>{
        const ident=data[3].id;
        // console.log(data)
        return ident
    })
    .then(ident=>{
        // console.log(ident);
        return ident
    })
    .then(ident=>{
        const url2=`${url}/${ident}`;
       return sendrequest("GET",url2)
    })
    .then(newrespons=>{

        // console.log(newrespons)
        const newdata=JSON.parse(newrespons);
        console.log(newdata);
    })
    .catch(reject1=>{
        console.log(error)
    })
    
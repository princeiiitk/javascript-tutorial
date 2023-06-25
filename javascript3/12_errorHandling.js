const url="https://jsonplaceholder.typicode.com/posts";
const xhr=new XMLHttpRequest();
// console.log(xhr);
xhr.open("GET",url);
xhr.onload=()=>{
    if(xhr.status>=200 && xhr.status<300){
    const data=JSON.parse(xhr.response);
    console.log(data);
    const id=data[3].id;
    // console.log(data[3].title)
    // console.log(data[4].body)
    const xhr2=new XMLHttpRequest();
    const url2=`${url}/${id}`;
    
    xhr2.open("GET",url2);
   xhr2.onload=()=>{
    const data2=JSON.parse(xhr2.response);
    console.log(data2);
   }   
   xhr2.send() ;
}
else{
    console.log(" something wrong went ")
}
}
xhr.onerror=()=>{//jab network related error
    console.log("network error")
}
xhr.send();
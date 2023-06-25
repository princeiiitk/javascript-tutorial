
const URL="https://jsonplaceholder.typicode.com/posts";
const xhr=new XMLHttpRequest();
// console.log(xhr);
//step 1.)
// console.log(xhr.readyState);
xhr.open("GET",URL);//GET method hota hai data ko read karne ke liye
// console.log(xhr.readyState);
xhr.onreadystatechange=function(){
    // console.log(xhr.readyState);
    if(xhr.readyState===4){
    // console.log(xhr.response);
    const response=xhr.response
    console.log(typeof xhr.response);//string me mil raha lekin json forment me hai
    //ab mujhe js object me karna hai
     const data=JSON.parse(response);
     console.log(data);
     console.log(typeof data)
     
    }
}
xhr.send();
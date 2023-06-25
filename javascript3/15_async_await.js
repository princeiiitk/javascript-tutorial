//asynch awaite
//ye sara kam asynchronuse ho raha hai
const url="https://jsonplaceholder.typicode.com/posts";

//async awite lagane ke bad hamesa return me promises dega

// fetch(url)
// .then(reponse1=>{
//     return reponse1.json()
// })
// .then(data=>{
//     console.log(data);
// })




async function getpost(){
const response=await fetch(url)
// console.log(response)
if(!response.ok){
    throw new Error("somthing went wrong")
}
const data=await response.json();
return data;}


// const mydata=getpost()
// console.log(mydata)
// console.log(getpost())
getpost()
.then(mydata=>{
    console.log(mydata);
})
.catch(error=>{
console.log("inside catch");
console.log(error)
})
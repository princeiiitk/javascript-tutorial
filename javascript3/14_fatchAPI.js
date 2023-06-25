//fetch api
const url="https://jsonplaceholder.typicode.com/posts";
// const whatthis=fetch(url)
// console.log(whatthis)//promises return kar raha hai
fetch(url)
.then(Response1=>{
    // console.log(Response1)/json() func Response1 ke under hai
    // console.log(Response1.json())//ye promises return kar raha hai
    return Response1.json()
})
.then(data=>{
    console.log(data)
})












//error detection
// .then(Response1=>{
//     if(Response1.ok){
    //Response1 ke undner ok prop hai jb error ho
//     // console.log(Response1)/json() func Response1 ke under hai
//     // console.log(Response1.json())//ye promises return kar raha hai
//     return Response1.json()
//     }
//     else{
//         throw new Error("something wrong")
//     }
// })
// .then(data=>{
//     console.log(data)
// })
// .catch(error=>{
//     console.log("inside catch")
//     console.log(error)
// })








//post method---->data ko create
// fetch(url,{method:'POST',
//     body:JSON.stringify({
//         title:'prince', 
//         body:'bar',
//         userId:1,
//         }),
//         headers:{
//             'Content-type':'application/json; charset=UTF-8',
//         }})
// .then(Response1=>{
//     return Response1.json()
// })
// .then(data=>{
//     console.log(data)
// })


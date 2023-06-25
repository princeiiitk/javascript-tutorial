//event deligation

const grandparent=document.querySelector(".grandparent")
//aise child or parent par click karne par bhi console par print ho rah hai
//lekin hum chahte hai ki bas grandparent par hi kam kare
//uske liye eventobject use karenge




// grandparent.addEventListener("click",()=>{
//     console.log("you click on grandparent for event deligation")
// })




//uske liye eventobject use karenge
grandparent.addEventListener("click",(e)=>{
    console.log("you click on grandparent for event deligation",e.target)
})
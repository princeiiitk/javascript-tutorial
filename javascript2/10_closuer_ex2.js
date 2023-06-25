function myfunction(power){
return function(number){
    return number**power
}
}



//use arrow function
// const myfunction=(power)=>{
//     return (number)=>{
//         return number**power
//     }
//     }


// const myfunction=power=>number=>number**power




const square=myfunction(2)
const ans=square(2)
console.log(ans)

//for cube
const cube=myfunction(3)
const ans1=cube(2)
console.log(ans1)
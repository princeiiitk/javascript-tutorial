//map method



// const numbers=[1,3,5,6,7];
// const square=(number)=>{
//     return number*number;
// }
// const squarenumber=numbers.map(square);//map function always make new array
// console.log(squarenumber);




//anonanmus function
const numbers=[2,4,5,1,3];
const squarenumber=numbers.map(function(number,index){
    return `index : ${index} ,${number*number}`;
})
console.log(squarenumber);




//arrow function
// const numbers=[2,4,5,1,3];
// const squarenumber=numbers.map((number)=>{
//     return number*number;
// })
// console.log(squarenumber);



//realistik example of map
const users =[
{firstname:"prince",age:20},
{firstname:"kapil",age:39}
]
const userfirstname=users.map((firstname)=>{
    return firstname.firstname;
})
console.log(userfirstname);



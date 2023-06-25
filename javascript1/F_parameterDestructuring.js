//param destructuring
 //object me use karte hai
 //react me use karte hai

 const person={
    firstname:"prince",
    gender:"male"
 }
 //normal methode 
//   function printdetails(obj){
//     console.log(obj.firstname);
//     console.log(obj.gender);
// }
// printdetails(person)






//destructuring
function printdetails({firstname,gender}){
    console.log(firstname);
    console.log(gender);
}
printdetails(person);





   
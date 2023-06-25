//rest parameter
//...a  rest parametere
// function myfunc(a,b,...c){
//     console.log(a);
//     console.log(b);
//     console.log(c);

// }
// myfunc(3,5,3,21,2)












const addall=(...number)=>{
    console.log(typeof number);
    console.log(Array.isArray(number));
    let sum=0;
    for(let i of number){
        sum=sum+i;

    }
   return sum;
}
console.log(addall(2,4,1,3,5,6))
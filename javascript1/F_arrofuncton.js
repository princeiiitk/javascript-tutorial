//arrow function->use in react
const singhappybirthday=()=>{
    console.log("hbd");
}
singhappybirthday()



const sumthreenumber=(a,b,c)=>{
    return a+b+c;
}
console.log(sumthreenumber(2,3,2))



//only one parameter
const iseven=num =>{
     return num%2===0;
}
console.log(iseven(4))
//only one line return and one parameter
const iseven1=num1=>num1%2===0;
console.log(iseven1(2));




const searching=(arr,target)=>{
    for(let i=0 ; i<arr.length ;i++){
        if(arr[i]===target){
            return i;
        }
    }
    return -1;
}
const arr1=[2,1,3,3]
console.log(searching(arr1,2))

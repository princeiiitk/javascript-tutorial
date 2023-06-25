// function singhappybirthday(){
//     console.log("happy birthday to you");
// }
// singhappybirthday();

function twonumsum(){
    
    //console.log(99+1);
    return 3+4;
}
console.log(twonumsum())






//pramiter
function sumtwonum(num1,num2){
    console.log("hii")
    return num1+num2;

}
console.log(sumtwonum(33,33))


//undefine + undefine = not a number (NaN)




function iseven(number){
    if(number %2===0){
        console.log("num is even");
        return true;
    }
    return false;
}
iseven(2);





//string
function firstchar(anystr){
    return anystr[0];

}
console.log(firstchar("ijhuiuhu"))













//function
//input :array ,target (number)
//output :index of target if target present in array
//that means searching
function findnum(arr1 ,target){
    for(let i=0 ; i<arr.length ;i++){
        if(arr[i]===target){
            return i ;
        }
    }
    return -1;
}
const arr=[1,2,3,4,5]
console.log(findnum(arr,2))








//function expression
const singhappybirthday1=function(){
    console.log("hii");

}
singhappybirthday1();
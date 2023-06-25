//filter methode=array ka method hai

 const number=[2,8,4,5,2,3,1]
 const isEven=function(number){//same as odd number
    return number%2===0;

 }
 const evennumber=number.filter(isEven);//new array created 
 console.log(evennumber);
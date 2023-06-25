//important array method
//forEach work on callback means forEach arugument me function leta hai 


 const numbers=[1,2,3,4,4];
 function myfunc(number,index){
    console.log(`index is ${index} number is ${number}`);

 }


//  for(let i=0 ; i<numbers.length ; i++){
//     myfunc(numbers[i],i);
//  }



//foreach same work of for loop
numbers.forEach(myfunc);



//use anonmuse function ,anonomuse = jiska koi name nahi hota
// numbers.forEach(function(numbers,index){
//     console.log(`index is ${index} and number is ${numbers*2}`);
// });

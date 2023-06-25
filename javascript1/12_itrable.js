//iterables=
// jispe for of loop laga skte hai wo itrable hota hai
//like string and array are itrable 
//but object are not itrable


//string are iterable 
 const str="prince";
 for(let char of str){
    console.log(char);
 }

 //array are iterable
 const arr=["item1","item2","item3"];
 for(let element of arr){
    console.log(element);
 }

 //object are not iterable
//  const user={key1:"item1",key2:"item2",key3:"item3"};
//  for(let ele of user){
//     console.log(ele);
//  }



 //array like object
 //jinke pass length property hoti hai
 //aur jinko hum index se access kar skte hai 
 //example=string , array
 const firstname="prince";
 console.log(firstname.length);
 console.log(firstname[3]);
 const arr1=[1,2,3,4];
 console.log(arr1.length);
 console.log(arr1[2]);


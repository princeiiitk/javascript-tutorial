//spread oprater




// //revision(in array)
// const arr1=[1,2,3];
// const arr2=[34,55,33];
// const newarray = [...arr1,...arr2];
// console.log(newarray);
// const arr3=[..."aaannnbbb"];
// console.log(arr3)
// const arr4=[...arr1,arr2]
// console.log(arr4);


//same key output me ek bar aayaga wo last wala

// const obj1={
//     key1:"value1",
//     key2:"value2",
//     key1:"v3"
// }
// console.log(obj1)






//spread opratre in object
const obj1={
    key1:"value1",
    key2:"value2",
    
}
const obj2={
    key1 : "vu",
    key3:"value3",
    key4:"value4",
    
}
//clone
const newObject={...obj1,...obj2,key33:"pp"};
console.log(newObject)




const obj33={..."abc"};
console.log(obj33);




const obj0={...["r","o"]}
console.log(obj0)

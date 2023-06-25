//clone using object.assign
//memory obj and obj2 store same address of object in present in heap
//array and object is refrence type
const obj={
    key1:"value1",
    key2:"value2"
}
const obj2=obj;
obj.key3="value3";
console.log(obj);
console.log(obj2);




const obj3={
    key1:"value1",
    key2:"value2"
}
// const obj4={...obj3};          //cloning new method
const obj4=Object.assign({},obj3);//cloning old method
obj3.key3="value3";
console.log(obj3);
console.log(obj4);

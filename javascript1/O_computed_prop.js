//computed properties
const key1 = "objkey1";
const key2 = "objkey2";

const v1="myvalue1";
const v2="myvalue2";
const obj={
    [key1]:v1,
    [key2]:v2

}
console.log(obj);
obj[key1]=v1;
obj[key2]=v2;
console.log(obj);
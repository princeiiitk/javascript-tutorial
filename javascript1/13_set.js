//set(it is iterable)
//store data
//sets also have its own method
//on index based access
//order is not guaranteed
//unique item only (no duplicated allowed);
 //in set  add deffrent type of data 
 //use when unique value store like studentid 

const numbers=new Set([1,2,3]);
numbers.add(4);
numbers.add(4);
console.log(numbers);




const str=new Set(["abc"]);
console.log(str);




const items=['item1','item2','item3'];
const setitems= new Set([1,2,3,4]);
setitems.add(items);
setitems.add(items);//not allowed dublicate
console.log(setitems);



const diffrentset=["item1","item2","item3"];
const num=new Set([12,22,33]);
num.add(["item1","item2","item3"]);//in set add both array bcz both are diffrent array(refrence type) both array at diffrent address

num.add(["item1","item2","item3"]);
console.log(num)




//find in set

const list=new Set([1,2,3,4]);
if(list.has(2)){
    console.log("2 is present ")
}
else {
    console.log("not present")
}




//iterable
const number1=new Set([1,2,3,4]);
number1.add(5);
number1.add(list);
for(let i of number1){
    console.log(i);
}



//for remove dup.
const myarray=[1,2,3,4,4,5,6,1,2]
const uniqueelement=new Set(myarray);
console.log(uniqueelement)//length property not use 
let count=0;
for(let i of uniqueelement){
    count++;
}
console.log(count);

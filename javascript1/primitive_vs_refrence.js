let num1=8;
let num2=num1;
console.log(num1);
console.log(num2);
num1++;
console.log("after")
console.log(num1);
console.log(num2);
//refrence type
let arr1=["item1","item2"];
let arr2=arr1;
console.log(arr1);
console.log(arr2);
arr1.push("item3");
console.log("after");
console.log(arr1);
console.log(arr2);
//primitive ->store in stack->num1 and num2 diffrent block of memory->kam memory lgta h
//refrence ->strore in heap->big memory->arr1 and arr2 store address of same heap memory

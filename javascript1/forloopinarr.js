//for loop in arr
let fruit=["apple","mango","banana","grapes"];
//mast imp->fruit.length
console.log(fruit.length);
console.log(fruit[fruit.length-1]);
console.log(fruit[1]);
let fruit2=[];
for(let i=0 ; i<fruit.length;i++){
    fruit2.push(fruit[i].toUpperCase());
}
console.log(fruit2)

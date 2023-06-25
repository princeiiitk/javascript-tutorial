//sort  method


// ascii value
// '0' : 48
// '1' : 49
// '2' : 50
// '3' : 51
// '4' : 52
// '5' : 53
// '6' : 54
// '7' : 55
// '8' : 56
// '9' : 57
// 'a' : 97
// 'A' : 58



//sort
const num = [5, 9, 1200, 410, 3000];
//["5", "9","1200","410","3000"] in javascript number(direct) behave like string
//[53,57,49,52,51]//sorting acc. to this number
num.sort();
console.log(num);
//naming array sort according to dictionary



//solution actual sorting
const num1 = [5, 9, 1200, 410, 3000];
num1.sort((a, b) => {
    return a - b;  //for one return value then arrow function directe write (a,b)=>a-b
})
console.log(num1);
//for decending order
const num2 = [5, 9, 1200, 410, 3000];
num2.sort((a, b) => b - a);  //for one return value then arrow function directe write (a,b)=>a-b
console.log(num2);




//practicl example
//product price low to high
const product = [{ productid: 1, productname: "p1", price: 200 },
{ productid: 2, productname: "p2", price: 500 },
{ productid: 3, productname: "p3", price: 100 },
{ productid: 4, productname: "p4", price: 50 }];
product.sort((a, b) => {
    //a={productid:1,productname:"p1",price:200} but return hame only price karna hai isliye a.price

    return a.price - b.price;
})
console.log(product);








//
const product1 = [{ productid: 1, productname: "p1", price: 200 },
{ productid: 2, productname: "p2", price: 500 },
{ productid: 3, productname: "p3", price: 100 },
{ productid: 4, productname: "p4", price: 50 }];
product1.slice(0).sort((a, b) => {
    return a.price - b.price;
})
console.log(product1);
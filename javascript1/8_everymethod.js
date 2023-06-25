//every method 
const numbers = [2, 4, 6, 8, 9];
const ans = numbers.every((num) => num % 2 === 0);
console.log(ans);



//practicle example
const product = [{ productid: 1, productname: "p1", price: 200 },
{ productid: 2, productname: "p2", price: 500 },
{ productid: 3, productname: "p3", price: 100 },
{ productid: 4, productname: "p4", price: 50 }];
//check all product price < 1000
const ans1 = product.every((product) => {
    return product.price < 1000;
})
console.log(ans1);
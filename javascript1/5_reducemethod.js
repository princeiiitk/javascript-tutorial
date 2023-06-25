//reduce method = for array ke liye




const numbers=[2,1,8,4,7];
//aim=sum of all numbers by reduce method
const sum=numbers.reduce((accumulater,currentValue)=>{ 
    return accumulater+currentValue;
},0)//passing in reduce initial value of accumulater exmple initial value of accumulter is 0
console.log(sum);
//analysis
//accumulater    curentValue   return 
//2                1            3
//3                8            11
//11               4            15
//15              7             22







//practicle example
const usercart=[
    {productid:1,productname:"mobile",price:12000},
    {productid:2,productname:"laptop",price:120000}

]
//aim total price by reduce methode
const totalprice=usercart.reduce((Tprice1,currentvalue)=>{
//currentvalue=productid:1,productname:"mobile",price:12000
    return Tprice1+currentvalue.price;
},0)
console.log(totalprice);
//anylisis
//tprice1   currentvalue    return
//0            12000         12000
//12000        120000        22000

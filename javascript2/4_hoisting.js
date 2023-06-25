//what is hoisting 
//code ko excute karne se pahle memmory ke undar variable or function store ho rahi 
//means in previous code myfunc create karne se pahle hi print ho raha hai
//bcz globle excution context ke douran hi memmory ke undar value aa ja rahi haoi
//jvascript ek synchronaus programming langauge hai means jb tk ek line excute nahi hota tb tk dusara line excute nahi hoga



 console.log(name);
 var name='prince';//only case of var not in let,const (bota are block scope)






 console.log(myfunc1);
 console.log(myfunc2)
 var myfunc1=function(){//in case of function expression
    //function declearation me globle excution context ke creation phase  ke time undefine set ho gya hai
    console.log('hell0');
 }












 
 function myfunc2(){
    console.log('prince')//in case of function declearation 
    //function declearation me globle excution context ke creation phase  ke time hi myfunc2 ki value pura function set ho gya hai
 }

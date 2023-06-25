//lexical scope
const myvar = "value1";
function myapp(){//function declearation
    //const myvar = "value1";
    const myfunc=function(){  //function expression
        //const myvar="value22";//lexical variavble ->myfun function myvar ko sabse 
        //pahle apene function me check karenga agar nahi hua to lexical envonment(myapp) me check karga 
        
         console.log("inside myfunc");
         console.log(myvar);
    }
    const myfunc2=function(){}//function expression
    const myfunc3=()=>{            //arrow function

    }
    console.log(myvar);
    myfunc();
   

}
myapp()















//lexical chain->check(in own fun)->lexiacl envonment
//myapp ka lexical env puri file hai 
//myapp checke karega apne globle scope me agar nahi hua to fir check karga lexical env;


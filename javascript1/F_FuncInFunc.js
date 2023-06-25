//function inside function
    function app(){
        const myfunc=()=>{
            console.log("hello from my func");
        }
        const addtwonum=(num1,num2)=>{
            return num1+num2;
        }
        const mul=(num1,num2)=>{
            return num1*num2;}
            console.log("inside app");
            console.log(addtwonum(2,3));
            console.log(mul(8 ,9));
        
    }
    app();
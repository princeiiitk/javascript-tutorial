//1.compile (compile ke time hi pta pad gya globle scope me ye ye variable hai)
//globle scope->fname,lname,myfunc,fullname
//2 step excution (create globle excution contex in stack memory) 

//globle memmory(creation phase)                    craetion excution phase
//window:{}                             
//this:window
//fname:undefine                     fname=prince than excute
//lname:undefine                     lname=kumar than excute
//fullname:undefine                  fullname=prince kumar
//functionn:myfunc                   myfunc=........




console.log(this);
// console.log(window);
console.log(myfunc);
console.log(fullname);
function myfunc(){
    console.log("this is my function");
}
var firstname="prince";
var lastname="kumar";
var fullname=firstname + " "+ lastname;
console.log(fullname);

//js synchornus programing and single thread(1 line excuted than second line excuted)
//second phases
//code execution phases
//in js code execute inside execution context
//means first creat cxecution context that is globle execution context
//globle excution context creation  in two phases
//1.creation phases(globle memory)                             2. code excution phases(globle memory)
//in cretion phases                                               firstline excute console.log(this)//this store address of window object
 //create this ,firstname(variable name) in case of var,        //second line console.log(window)
 //this=window={} empty globle  object                          //third line excuted console.log(firstname)->firstname=undefine
                                                                 //fourth line firstname =prince
                                                                 //fiveth line print prince 
console.log(this);
// console.log(window) o/p=window object
//this ki binding window object ke sath ho jayegi
//window object provid browser
console.log(firstname)
var firstname='prince';
console.log(firstname);



"use strict"//use strict use karne ke  bad myfunc me this object aaye ga and use nahi karne par window object aayega
 
console.log(this)//this and window same or equal
//console.log(window)//window object define in javascript inbuilt
function myfunc(){
    console.log(this);//window object aata hai bcz window object me myfunc add ho chuka hai
    
}
myfunc();
// window.myfunc();
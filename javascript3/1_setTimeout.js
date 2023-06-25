//synchronouse programming vs asynchronouse programming



//synchronous programming(javascrpit) is a single threaded hota hai
// console.log("script start");
// for(let i=0 ;i<1000;i++){
//     console.log("hello world");
// }
// //for loop line no 11 ko block kar raha hai means asychronouse programming ko follow nahi kar rah hai
// //pura loop chlane ke bad "script end" print ho raha hai
// console.log("script end")




//very important --->setTimeout function
// console.log("script start");
// function hello(){
//     console.log("hello world")
// }
// setTimeout(hello,1000)//ye arg me function (arro function bhi le skta h) kitane time tk delay karna hai wo leta hai
//settimeout() return me ek id deta hai
// console.log("script end");
//output me pahle script start print hua phir script end pir hello world
//aisa kyu ho raha hai ?
//sttimeout() function ko browser ka webAPI provide krata hai 







//change krate hai code me ---->example of asynchronuse programming
console.log("script start");
function hello(){
    console.log("hello world")
}
const id=setTimeout(hello,0)
for(let i=0 ; i<10000;i++){
    console.log(".......")
}
console.log("id of settime id",id);
// console.log("clearing time out");
// clearTimeout(id);
console.log("script end");
//output
// script start
// 999 .......
// script end
//  hello world--->event loop  roke ga ki  pahele pura code excute ho jae phir call back queue se stack me bheja ga

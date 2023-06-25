//function returning function
//callback and function returning function is higher order function



// const myfunc=()=>{
//     return {name:"prince"};
// }
// console.log(myfunc());



//returning function
const myfunc=()=>{
    function hello(){
        console.log("hello prince");
    }
    return hello();
}
console.log(myfunc());
//console.log(hello())






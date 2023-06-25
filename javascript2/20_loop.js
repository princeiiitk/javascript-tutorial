//loop
//in previous code output of nav-item is array like objct that means loop laga ke itrate kar skte hai
//simpl loop
//for of loop
//forEach
//we can not use foreach method to itrate through HTMLcollaction output of previvous code (array like object)







let navitems=document.getElementsByTagName("a")
//hum chahte hai ki navitem ke sare element (home ,todo, signuu) ke background ko white kare 



// simple for loop
// for(let i=0 ; i<navitems.length;i++){
//     console.log(navitems[i])

// const navitem=navitems[i];
// navitem.style.backgroundColor="#fff";
// navitem.style.color="green"
// navitem.style.fontWeight="bold"
// }














// // for of loop
// for(let navitem of navitems){
// navitem.style.backgroundColor="#fff";
// navitem.style.color="green"
// navitem.style.fontWeight="bold"
// }





//Array.from(navItems) array me convert ho jayega
// navitems=Array.from(navitems);
// console.log(Array.isArray(navitems))


// not applicable foreach normally but after convert array we can use

// navitems.forEach((navitem) => {
//     navitem.style.backgroundColor="#fff";
// navitem.style.color="green"
// navitem.style.fontWeight="bold"
// });












//nodelist
let navitems1=document.querySelectorAll("a");
console.log(navitems1)
//isme sare loop us kar skte hai 
//like for of loop
//simple loop
//forEach method
//example of foreach method
navitems1.forEach((navitem) => {
    navitem.style.backgroundColor="#fff";
navitem.style.color="green"
navitem.style.fontWeight="bold"
});












//h1 to div tk pahuch ke background color change karne hai
//h1 to body
const h1=document.querySelector("h1")
const div=h1.parentNode
const body=div.parentNode
console.log("parent of div",body)
body.style.backgroundColor="black"
div.style.color="#efefef";
div.style.backgroundColor="#333"
console.log(h1)
console.log("parente of h1",div)

//direct set bhi kar skte hai
//like 
const body1=document.body
console.log("direct",body1)



//queryselecter se kis bhi tag ke under bhi ja skte hai ,head ke under
const head=document.querySelector("head");
console.log(head);
const title=head.querySelector("title")
console.log(title)
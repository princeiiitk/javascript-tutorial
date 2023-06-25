const rootnode=document.getRootNode();
console.log(rootnode) 
const htmlelementnode=rootnode.childNodes[0]
console.log(htmlelementnode)//array like object
console.log(htmlelementnode.childNodes)//array like object
console.dir(htmlelementnode.childNodes)//object formate
// NodeList(3) [head, text, body]
const headelementnodes=htmlelementnode.childNodes[0];
const textNode1=htmlelementnode.childNodes[1];
const bodyelementnode=htmlelementnode.childNodes[2];
console.log(headelementnodes)
console.log(textNode1)
console.log(bodyelementnode)
//parent
console.log("parent of headnod",headelementnodes.parentNode)
//sibling relationship(ns,body,head ) ns--->new line space

console.log("sibling rel",headelementnodes.nextSibling)




console.log(headelementnodes.nextElementSibling);//isme text ko ignore kar kar diya hai 




//head node ke kitane child hai 
console.log(headelementnodes.childNodes)//NodeList(5) [text, title, text, script, text]
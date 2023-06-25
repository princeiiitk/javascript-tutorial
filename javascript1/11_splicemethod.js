//splice method
//start , delete ,insert
const myarray=["item1","item2","item3","item4"];
//only delete
let deltitem=myarray.splice(1,2);
console.log(myarray);
console.log(deltitem);


//insert and deleted
const myarr=["item1","item2","item3","item4"]
let deltitem2=myarr.splice(1,2,"insertitem1","inserteditem2");
console.log(myarr);
console.log(deltitem2);


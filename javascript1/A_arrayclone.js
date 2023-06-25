//how to creat clone means copy
let arr1=["item1","item2"];
//methode1 ->let arr2=["item1","item2"];
//methode2->let arr2=arr1.slice(0);
//m3->let arr2=[].concat(arr1);
//m4->by sprde oprater let arr2=[...arr1];






//extra element add in arr2 by cloning
//let arr2=arr1.slice(0).concat(["item5","item4"]);
//extra element add in arr2 by cloning
//let arr2=[].concat(arr1,["item4","item5"]);
//extra element add in arr2 by cloning
//let arr2=[...arr1,"uu","kk"];



let onemorearr=['kk','kj'];
let arr2=[...arr1,...onemorearr];
arr1.push("item3");
console.log(arr1===arr2);
console.log(arr1);
console.log(arr2);





//fast by slice
//but  use most []...arr1]



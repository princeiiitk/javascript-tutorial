  //nested destructuring
  
  
  
  const users =[{userId:1,usersname:"prince",gender:"male"},
{userId:2,usersname:"prince",gender:"male"},
{userId:3,usersname:"prince",gender:"male"}]
// const[user1,user2,user3]=users
// console.log(user1,user2)



//nest destructre
let[{firstname}, ,{gender}] = users;
console.log(firstname)


//variable name change like firstname to  user1name
let  [{firstname:user1name} , ,{gender1:user1gender}]=users
console.log(user1name)
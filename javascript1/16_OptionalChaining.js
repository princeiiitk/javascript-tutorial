//optional chaining



//object revision
const users={
    firstname:"prince",
    address:{bihar:"sasaram"}
}
console.log(users.firstname)
console.log(users.address.bihar)
console.log("hii")



//optional chaining
const users1={
    firstname:"prince",
    address:{bihar:"sasaram"}
}

console.log(users1?.firstname)
console.log(users1.firstname)
console.log(users1?.address?.bihar)
console.log(users1?.address.bihar)
console.log(users1?.address?.bihar?.city)
console.log(users1.address.bihar.city)




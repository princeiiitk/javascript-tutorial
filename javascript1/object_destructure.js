//object destruturing
const band ={
    firstname :"prince",
    lastname :"kumar",
     age:33
}
//firstname and lastname is a normal variable
const firstname=band.firstname;
const lastname=band.lastname;
console.log(firstname,lastname)


//in above code in short form is object destructuring
 let{firstname1,lastname2 ,...rest} =band;
 console.log(firstname1,lastname2)

console.log(rest)
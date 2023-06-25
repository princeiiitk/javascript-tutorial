let foo='poo';
console.log(foo);
function getfullname(firstname,lastname){
    console.log(arguments);//argument array like object
    let myvar="hii";
    console.log(myvar);
    const fullname=firstname +" "+lastname;
    return fullname;

}
const personname=getfullname('prince','kumar');//iske liye ek naya excution context tyar hoga jise function excution context kahete hai

console.log(personname);
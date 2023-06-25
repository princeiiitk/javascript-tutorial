//closures



//function can return function
function outerfuntion(){
    function innerfunction(){
        console.log('hello world');
    }
    return innerfunction;
}
const ans=outerfuntion();
console.log(ans);
ans()

 















function printfullname(firstname,lastname){
    function printname(){
        console.log(firstname,lastname);
    }
    return printname;//printname ka function firstname and lastname ko lekar nikala(return) hai bcz ans1 ke FEC(function excution context) ke undar firstname or lastname hai nahi
    //means printname k sath local memmory k variable ko lekar return hota means apane clouser ke sath return hoga
    //ans1=printname function+firstname+lastname(firstname and lastname are clouser of printname) or apane lexical env. ke stha return hoga
    //means innerfunction outerfunction ke variable ko access kar skta hai
}
const ans1= printfullname('prince' , 'kumar');//initial ans1 are uninitiallise

ans1();//function calling me naya excution context banta hai

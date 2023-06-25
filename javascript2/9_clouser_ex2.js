function hello(x){
    const a="varA";
    const b="varB";
    return function(){//ye jo anunomouse function hai ye apane lexical env. ke variable ko bhi sath me lekar return karega
        //means ye function kaha par present hai hello function ke undar present hai that means iska laxical env. hello function hai(a,b,x variable)
        
        console.log(a,b,x);
    }
}
const ans=hello('hii');
ans();
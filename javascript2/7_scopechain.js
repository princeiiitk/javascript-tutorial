const lastname='kumar';//lastname printname ke lexical envirnment me hai
//lexical envirnment means variable kaha par present hai
const printname=function(){
    const firstname='prince';
    console.log(firstname);
    console.log(lastname);

}
printname();
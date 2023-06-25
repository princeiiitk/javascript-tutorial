//getter and setter
class person{
    constructor(firstname,lastname,age){//all parameter are property
    this.firstname=firstname;
    this.lastname=lastname;
    this.age=age;
    get fullname(){ //ab hum ise bhi propert ki tahrah print kar skte hai like console.log(person1.fullname) in place of method call like console.log(person1.fullname)
        return this.firstname;
};
    setname(firstname,lastname){
         this.firstname=firstname
    }
}}

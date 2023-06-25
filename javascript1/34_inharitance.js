// object ko instance bhi kahte hai
class student{
   constructor(name,id ,grad,std,city){
    this.name=name;
    this.id=id;
    this.grad=grad;
    this.std=std;
    this.city=city;
}
    mathclass(){
        return "math class 3 to 5";
    }
    AIclass(){
        return "AI class timeing is 11 to 12"
    }

   }

const student1=new student("prince",1033,"AB",'B',"ssm");
console.log(student1)
console.log(student1.mathclass());
console.log(student1.AIclass())







//create CSE student class
//CSEstudent class is a child class 
//student class is a parent class 
//student class ke sare property ko use kar skta hai by extends key se that inherant
//super class is parent class

class CSEstudent extends student{
   constructor(name,id ,grad,std,city,branch){
    super(name,id,grad,std,city);
    this.branch=branch;
   } 
   lunch(){
    console.log("12 to  1");
   }
   AIclass(){
    console.log("modifide")
   }
} 
const student2=new CSEstudent("prince",1033,"AB",'B',"ssm","cse")
console.log(student2);
console.log(student2.mathclass());
console.log(student2.lunch());
console.log(student2.AIclass());//pahale CSEstudent me check karega tb student class me check karega

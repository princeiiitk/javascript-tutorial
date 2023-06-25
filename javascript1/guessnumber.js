let winningnumber=19;
let userguessnumber=+prompt("guess a number");
if(userguessnumber===winningnumber){
    console.log("right guess");
}
else{
    if(userguessnumber<winningnumber){
        console.log("to low");
        let userguessnumber=+prompt("guess a number");
    }
    else{
        console.log("to high");
        let userguessnumber=+prompt("guess a number");
    }

}

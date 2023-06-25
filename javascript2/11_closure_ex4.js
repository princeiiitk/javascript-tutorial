//closure application
function func(){
    let flag=0;
    return function(){
        
        if(flag==0){
            console.log("hii you call me");
            flag=1;
        }
            else
            {
                console.log("mai alrady ek bar call ho chuka hu")
            }
        }
    }

const ans=func();
ans();
ans();  
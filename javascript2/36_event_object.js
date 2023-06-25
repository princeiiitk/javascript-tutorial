//event object
const firstbutton=document.querySelector("#one");
firstbutton.addEventListener("click" , function(abc){//ye abc kuch ho skta yaha browser argument provide kar raha meas webapi kam kar rahi hai
    console.log(abc)// event object
    console.log(abc.currentTarget)
    console.log(abc.target)
    console.log(this);
})
//jab bhi mai element(firstbutton=object) pe event listener add hoga
//ek humare pass js engin hota h---->line by line code ko execute krata hai
// ek humare pass browser hota hai---->js-Engine   +   extra features
//broweser------>js Engine + webApi


//jab browser ko pta chalta hai ki user ne event perfom kia 
//jo hum listen(addeventlistener) kar rahe hai
//browser-----2
//1.)callback function hai vo js Engin ko degi....
//2.) dusra kam callback function ke sath browesr jo event hua uski information bhi dega
//ye info hamein ek object ke form me milega


//same as loop lga ke sare button ko access kar skte hai
 
//use const for creating array
//const value ko change nahi kar skte
const fruit=["apple","banana"];
//in heap memory ["apple","banana"] fruit me heap memory ka address hota hai isliye jab hum push pop karte hai to heap memory me change hota na ki address me chnage hota becouse array refrence type datatype hai
fruit.push("hh");
console.log(fruit);
//most of use const
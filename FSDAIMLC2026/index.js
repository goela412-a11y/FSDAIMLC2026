//console.log("Hello Using JS")
//const a=89; //here we can use var,let and const where var works globally and 
//console.log("a="+a);

//let a=78;
//if(a>30){
//    let a=100;
//    console.log("a inside the block="+a)
//}
//console.log("a outside the block="+a);
// as an expression
// const sum=function (a,b) {
//     return a+b;
// }
// const data=sum(20,20);
// console.log("Result = "+data);

//Arrow Function
// const msg=(mymsg)=>{
//     console.log("Hiii "+mymsg)
// }
// msg("Welcome to FSD");

// const mysqrt=(val)=>{
//     return Math.sqrt(val);
// }

// const result=mysqrt(20)
// console.log("Result="+result);

//Invoke Immediate Fuction as an Expression (IIFE)
// (()=>{console.log("Hiii....IIFE")})();

function sum(a,b){
    return a+b;
}
const result=sum(20,50);
console.log("sum"+result);
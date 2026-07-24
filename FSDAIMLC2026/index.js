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

// function sum(a,b){
//     return a+b;
// }
// const result=sum(20,50);
// console.log("sum"+result);

// function sum(a,b){
//     return a+b;
// }
// function sumwithMsg(clbk,msg){
//     const result=clbk(20,40);
//     console.log(msg+":" +result);
// }
// sumwithMsg(sum,"Hey using calculation with js")

//// function login(msg,error){
//     if(error){
//         console.log("Error is" +error);
//     }
//     else{
//         console.log("Welcome "+msg);
//     }
// }

//// function loginVerification(username,password,clbk){
// if(username=="Alice" && password=="12345"){
//     clbk("Alice",null);
// }else{
//     clbk(null,"Invalid username or password");
// }
// }
// loginVerification("Alice","12345",login);

function generateRandom(callback) {
    let randomNumber = Math.floor(Math.random() * 100) + 1; 

    console.log("Generated Number:", randomNumber);
    callback(randomNumber);
}
function checkEvenOdd(number) {
    if(number % 2 === 0){
        console.log(number +"is Even");
    }else{
        console.log(number +"is Odd");
    }
}
generateRandom(checkEvenOdd);
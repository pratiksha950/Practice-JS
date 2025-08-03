// let student={
//     name:"om",
//     age:22,
//     rollNum:26,
//     cast:"obc"
// };
// console.log(student);

// const twitterThread={
//     userName:"pratiksha",
//     contents:"happy",
//     likes:100,
//     repost:20,
//     tags:["@pratiksha,@happy"]
// };
// console.log(twitterThread);


// let classInfo={
//     aman:{
//         age:23
//     },
//     pratiksha:{
//         age:76
//     },
//     yash:{
//         age:78

//     }
// };
// console.log(classInfo);

// let arr=[
//     {
//         name:"om",
//         AGE:2
//     },
//     {
//         name:"pratik",
//         age:78
//     }
// ]
// console.log(arr);

// let num;
// num=20;

// console.log(num);

// let a=20;

// c= a++;
// console.log(a);
// console.log(c); 

// let max =prompt("enter the number");

// const random=Math.floor(Math.random()*max)+1;
// let guess=prompt("guess the number");

// while(true){
//     if (guess=="quit") {
//         console.log("user quit");
//         break;
//     }
//     if (guess==max) {
//         console.log("congratulations");
//         break;
//     }else{
//          console.log("wrong guess");
//          break;
//     }
// }


// let a=24;
// let b=2;
// if(a==6||b==2){
//     console.log("con");
// }else{
//         console.log("vv");

// }


// function hello(){
//     console.log("hii");
// }
// hello();
// hello();
// function print1To5(){
//     for(i=1;i<=5;i++){
//         console.log(i);
//     }

// }
// print1To5();

// function poem(){

// }
// poem();
// function rollDice(){
// let random=Math.floor(Math.random()*6)+1;
// console.log(random);
// }
// rollDice();
// rollDice()
// rollDice()


// function idali(special,age){
//     console.log(special,age);
// }
// idali("special");

// function average(a,b,c){
//     console.log((a+b+c)/3);
// }
// average(1,3,3);
// function table(n){
//     for(let i=n;i<=n*10;i+=n){
//     console.log(i);
// }}
// table(299);

// {
//   let  b=2;
// }
// console.log(b);

// function one(){
//     let a=2;
//     let b=2;
   
//     function two(){
//     let a=9;
//     console.log(a);
//      console.log(b);
    
// }

//  console.log(a);
//  two()

// }
// function one(func,n){
//     for(let i=1;i<=n;i++){
//         func();
// }
// }

// let greet=function (){
//     console.log("welcome");
// }
// one(greet,10);


// let odd=function(n){
//     console.log(!(n%2==0));
// }
// let even=function(n){
//     console.log(n%2==0);
// }
// function oddOrEvenFactory(request){
//     if (request=="odd"){
//         let even=function(n){
//         console.log(!(n%2==0));
//         }
//         return odd;
//     }else if(request=="even"){
//         let even=function(n){
//          console.log(n%2==0);
//     }
//     return even;
// }
// }

// const calculater={
//      num:78,
//     add:function(a,b){
//         return a+b;
//     },
//         sub:function(a,b){
//         return a-b;
//     },

//         mul:function(a,b){
//         return a*b;
//     },

//         div:function(a,b){
//         return a/b;
//     },

// };

// const student={
//     name:"pratiksha",
//     age:20,
//     rollNo:23,
//     eng:12,
//     math:12,
//     marathi:22,

//     getAvg(){
//         console.log(this);
//     let avg=(this.eng+this.math+this.marathi)/3;
//     console.log(avg);
//     }
// }
// console.log("hii");
// try{
//     console.log(a);
// }catch{
//     console.log("caught an error");
// }
// console.log("hii");console.log("hii");

// const sum=(a,b)=>{
//     console.log(a+b);
// }

// const add=(a,b)=>(
//     a+b.
// );

// console.log("hi there");
// setTimeout(()=>{
//     console.log("apna college");
// },4000)
// console.log("welcome");

// console.log("welcome");

// console.log("welcome");

// console.log("welcome");

// console.log("welcome");

// let id=setInterval(()=>{
//     console.log("apna college");
// },2000);
// console.log(id);

// let id2=setInterval(()=>{
//     console.log("hiii");
// },2000);
// console.log(id2);

// const student={
//     name:"om",
//     class:10,
//     prop:this,
//     getName(){
//         console.log(this);
//         return this.name;
//     },
//     getMark: ()=>{
//         console.log(this);
//         return this.marks;

//     }
// }

// const squre= (n)=>n*n;
// console.log(squre(4));

// let id=setInterval(()=>{
//     console.log("hello World");
    
// },2000);

// setTimeout(()=>{
//     clearInterval(id);
// },10000)

// let arr=[1,2,3,4,5];
// let print=function(el){
//     console.log(el)
// };
// arr.forEach(print);

// arr.forEach(function(el){
//     console.log(el);
// });

// arr.forEach((el)=>{
//     console.log(el);
// });

// let arr=[{
//     mark:2
// },{
//     mark:4
// },{
//     mark:7
// }];

// arr.forEach(()=>{
//     console.log();
// })

// let num=[1,2,3,4,5];
// let double=num.map(function(e){
//     return e*2;
// });

// let num=[1,2,3,4,5,6];
// let even=num.filter((num)=>(num%2==0));

//  let num = [1, 2, 3, 4, 5, 6];
// let even=num.every(function(el){
//     return el%2==0;
// });
// console.log(even);

// let arr=[1,3,5];
// let odd=arr.every((el)=>(!(el%2==0)));
//  console.log(odd);

// let arr=[1,2,3,4];
// let sample=arr.reduce((res,el)=>(res+el));
// console.log(sample);

// let arr=[1,5,7,4,,9,7,5,4,3,1];
// let max=arr.reduce((max,el)=>{
//     if(max<el){
//         return el;
//     }else{
//         return max;
//     }
// });
// console.log(max);


// let arr=[1,2,3,4,5];
// console.log(Math.min(...arr));
// let arr="pratiksha";
// console.log(...arr);

// function sum(...args){
//     for(let i=0;i<args.length;i++){
//         console.log("you gave us:",args[i]);
//     }
// }
// if(123){
//     console.log("5");

// }

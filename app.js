// console.log("apna");
// let a=8 ;
// console.log(a);

// let a=5;
// let b=35;
// console.log(`addition is: ${a+b}`);


// let num=7;
// if(num%10==0){
//     console.log("good");
// }else{
//      console.log("bad");

// }

// let name =prompt("enter youe name ");
// let age =prompt("enter youe  age");
// alert(`${name} is ${age} year old`);


// let str = "apple";
// if ((str[0] == 'A'|| str[0] == 'a' ) && (str.length>=5)) {
//     console.log("golden string");
// }

// let str = "apple";
// if ((str[0] == 'A' || str[0] == 'a') && (str.length >= 5)) {
//     console.log("golden string");
// }
// let msg="      hel   low"
// console.log(msg);
// let password =prompt("set your password");
// let msg=password.trim();
// console.log(password);


// let name="pratiksha";
// let hi=name.toUpperCase();
// console.log(hi);
// let msg="error";
// console.error(msg);

//  const age=9
// console.log(age)
// let str="Ilovestring"
//  let a=str.indexOf("v")
//  console.log(a)


// let str="iLovecoading";
// let a=str.toUpperCase().trim();

// console.log(a);
// let msg="           help  !";

// console.log(msg.trim().toLowerCase())
// let a=["pratiksha",8,9];
// console.log(a[1].length);


// let a=["pratiksha","om","sai"];
// a[0]="omm";
// console.log(a);
// let arr=[7,9,0,2];
// let a=arr.slice(arr.length-3);
// console.log(a);


// let str="pratiksahERDF";
// let idx=9;

// if(str[idx]==str[idx].toLowerCase()){
//     console.log("string is Lc");
// }else{
//     console.log("string is not LC");
// }
// let a=4;
// console.log(a);

// let todo= [];
// let req= prompt("please enter your choice");
// while(true){
//     if(req==="quit"){
//         console.log("quiting app");
//         break;
//     }
//     if(req==="list"){
//         console.log("-----------------------");
//         for(i=0;i<todo.length;i++){
//         console.log(i, todo[i]);
//             }
//              console.log("-----------------------");
//     }else if (req==="add") {
//          let task=prompt("please enter task you want to add ");
//          todo.push(task);
//          console.log("task added");
        
//     }else if (req==="delete") {
//          let idx=prompt("please enter task you want to delete ");
//          todo.splice(idx,1);
//          console.log("task deleted");

//     }else{
//         console.log("wrong request");
//     }

//     req= prompt("please enter your choice");
        
//     }
// for(char of "pratiksha")
//     {
//         console.log(char)
//     }


// let student=[["0m","prato",,"sai"],["pratiksha","dada","sita"]];
// for(list of student){
//     for(single of list){
//         console.log(single);
//     }
    
// }


// let arr=[1,2,3,4,5,6,1,2];
// let num=2;
// for(let i=0;i<arr.length;i++){
//     if (arr[i]==num) {
//     arr.splice(i,1); 
//     }
// }
//   console.log(arr);

// let num=56545;
// let count=0;
// let copy=num;
// while(copy>0){
//     count++;
//      copy=Math.floor(copy/10);
    
// }
// console.log(count);
// let number = 287152;
// let sum = 0;
// let copy = number;

// while (copy > 0) {
//     digit = copy % 10;
//     sum += digit;
//     copy = Math.floor(copy / 10);
// }

// console.log(sum);
// let a=9;
// let b=2;
// // let temp=a;
// //  a=b;
// //  b=temp;
// a=a+b;
// b=a-b;
// a=a-b;

//  console.log(`a is ${a}`);
// console.log(`b is ${b}`);


// let a= parseInt(prompt("enter first value")) ;
// let b= parseInt(prompt("enter first value")) ;
// let c=a+b;
// console.log(`addition of ${a} and ${b} is ${c}`);

let height=prompt("enter height");
let radius=prompt("enter radius");
const pi=3.14;
let volume =pi*height*radius**2;
console.log(volume);
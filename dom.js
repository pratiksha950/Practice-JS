// let smallIamges=document.getElementsByClassName("oldImg");

// for(i=0;i< smallIamges.length;i++){
//     smallIamges[i].src="spiderman_img.png";
//     console.dir(`value of image ${i}changed`);
// }

// console.dir(document.querySelectorAll("p"));
// console.dir(document.querySelector(".oldImg"));
// console.dir(document.querySelectorAll("div a"));

// let links=document.querySelectorAll(".box a");

// for(let i=0;i<links.length;i++){
//     links[i].style.color="red"; 
// }

// let h4=document.querySelector("h4");
// let test=h4.parentElement;
// console.log(test);


// let p=document.createElement("p");
// let body=document.querySelector("body");

//  let newP=document.createElement("p");
//  console.dir(newP);
//  newP.innerText="hi my name is event";
//  console.dir(newP);
// let body=document.querySelector("body");
// let box=document.querySelector(".box");

// let btn=document.createElement("button");
//  console.dir(btn);


// let para=document.createElement("p");
// para.innerText=("hi, my name is event");
// document.querySelector('body').append(para);
// para.classList.add('red');

// let h1=document.createElement("h1");
// h1.innerText=("hi, my name is event");
// document.querySelector('body').append(h1);
// h1.classList.add('blue');

// let div=document.createElement("div");
// document.querySelector('body').append(div);
// div.classList.add('div');


// div.appendChild(para);
// div.appendChild(h1);



// let btns=document.querySelectorAll("button");
// for(let btn of btns){
//     btn.addEventListener("click",function(){
//     console.log("button  document");
// });
// }

// btn.onclick=function(){
//     alert('button was click');
// };



// function hello(){
//     console.log("say hellow");
// };
// btn.onclick=hello;


// let h1=document.querySelector("h1");
// h1.innerText=;

// let btn=document.querySelector("button");

// btn.addEventListener("click",function(){
//     let h3=document.querySelector("h3");
//     let getColor=randomColor1();
//     h3.innerText= getColor;
//     console.log("color updated");
//     let div=document.querySelector("div");
//     div.style.backgroundColor=getColor;
// })

// function randomColor1(){
//       let red=Math.floor(Math.random()*255);
//         let green=Math.floor(Math.random()*255);
//           let blue=Math.floor(Math.random()*255);
//           let color=`rgb(${red},${green},${blue})`;
//           return color;
// }

// let p=document.querySelector("p");

// p.addEventListener("click",function(){
//   console.log("paragraph was click");
// });

// let box=document.querySelector(".box");
// box.addEventListener("mouseenter",function(){
//   console.log("mouse inside div");
// })

// let btn=document.querySelector("button");
// let h3=document.querySelector("h3");
// let h1=document.querySelector("h1");

// btn.addEventListener("click",function(){
//   // console.log(this);
//    console.dir(this.innerText);
//    this.style.backgroundColor="red";
// });

// shortcut
// function changgedColor(){
//    console.dir(this.innerText);
//    this.style.backgroundColor="red";
// }

// btn.addEventListener("click",changgedColor);
// h3.addEventListener("click",changgedColor);
// h1.addEventListener("click",changgedColor);

// let btn=document.querySelector("button");

// btn.addEventListener("click",function(event){
//   console.log(event);
//    console.log("button was click");
// });


// btn.addEventListener("dblclick",function(event){
//   console.log(event);
//    console.log("button was click");
// });


// let ip=document.querySelector("input");

// ip.addEventListener("keyup",function(){
//   console.log("key was relese")
// });

// ip.addEventListener("keypress",function(event){
//   console.log(event.key);
//   console.log(event.code);
//   console.log("key was press")
// });  

// let form=document.querySelector("form");
// form.addEventListener("submit",function(event){
//   event.preventDefault();
  
  // let user=document.querySelector("#user");
  // let password=document.querySelector("#password");
  // console.dir(user.value);
  //  console.dir(password.value);
//   console.dir(form.elements[1])
// });
// let form=document.querySelector("form");
//    form.addEventListener("submit",function(event){
//     event.preventDefault();
//     });

// let user=document.querySelector("#user");
// user.addEventListener("change",function(){
//   console.log("value changed");
//   console.log("final value" ,this.value);
// });
// user.addEventListener("input",function(){
//   console.log("input changed");
//   console.log("final value" ,this.value);
// });

// let ip=document.querySelector("#text");
// let p=document.querySelector("p")
// ip.addEventListener("input",function(){
//   console.log(ip.value);
//   p.innerText=ip.value;
// });

// let div=document.querySelector("div");
// let ul=document.querySelector("ul");
// let lis=document.querySelectorAll("li");
// div.addEventListener("click",function(event){
//   event.stopPropagation();
//   console.log("div was clicked")
// });
// ul.addEventListener("click",function(event){
//   event.stopPropagation();
//   console.log("ul was clicked")
// });
// for(let li of lis){
//   li.addEventListener("click",function(event){
//     event.stopPropagation();
//   console.log("li was clicked")
// });
// }

// let btn=document.querySelector("button");
// let ul=document.querySelector("ul");
// let ip=document.querySelector("input");
// btn.addEventListener("click",function(){
//   let item=document.createElement("li");
//   item.innerText=ip.value;
//   ul.appendChild(item);
//  console.log(ip.value);
//  ip.value="";
// })
// let btn=document.querySelector("button");
// btn.textContent="<h2>pratiksha </h2>";
// btn.textContent="<h2>pratiksha </h2>";
// btn.innerHTML="<h2>pratiksha</h2>";

// **call Stack**
// function one(){
//   return 1;
// }
// function two(){
//   return one()+one();
// }
// function three(){
// let ans= two()+one();
// console.log(ans);
// }
// three();

// **callback hell**
// h1=document.querySelector("h1");
// function changeColor(color,delay,nextColorChange){
//   setTimeout(()=>{
//     h1.style.color=color;
//     if(nextColorChange) nextColorChange();
//   },delay)
// }

// changeColor("red",1000,()=>{
// changeColor("blue",1000,()=>{
//   changeColor("orange",1000);
// });
// });

// changeColor("green",4000);
// setTimeout(()=>{
//   h1.style.color="orange";
// },2000);

// setTimeout(()=>{
//   h1.style.color="red";
// },1000);


// **settings up promises**
// function saveDT(Data,success,failure){
//   let speedLimit=Math.floor(Math.random()*10)+1;
//   if(speedLimit>4){
//     success();
    
//   }else{
//   failure() 
//    }
// }
// saveDT("apna college",()=>{
//   console.log("your data was saved");
//   saveDT("pratiksha",()=>{
//     console.log("success:data2 saved");
//     saveDT("shraddha",()=>{
//       console.log("success:data3 saved");
//     },()=>{
//       console.log("failure:data3 not saved");
//     })
//   },()=>{
//     console.log("failure:data2 not saved");
//   })
// },()=>{
//   console.log("your data was not saved!! weak connection");
// });

// "*promises*"
// function saveDT(Data){
//   return new Promise((success,failure)=>{
//     let speedLimit=Math.floor(Math.random()*10)+1;
//     if(speedLimit>4){
//      success("data was saved");
//     }else{
//       failure("data was not saved");
//     }
//   })
// }
// saveDT("pratiksha");

// **promise Method then and catch**
// saveDT("pratiksha")
// .then(()=>{
//   console.log("data saved,success")
// })
// .catch(()=>{
//   console.log("data was not saved!!! failure")
// });

// **promse chaining**

// function saveDT(Data){
//   return new Promise((success,failure)=>{
//     let speedLimit=Math.floor(Math.random()*10)+1;
//     if(speedLimit>4){
//      success("data was saved");
//     }else{
//       failure("data was not saved");
//     }
//   })
// }
// saveDT("pratiksha");
// saveDT("pratiksha")
// .then(()=>{
// console.log("data1 saved,success");
// return saveDT("helloworld")
// })
// .then(()=>{
//   console.log("data2 saved,success");
//   return saveDT="Salunke";
// })
// .then(()=>{
//   console.log("data3 saved,success");
// })
// .catch(()=>{
//   console.log("data was not saved!!! failure")
// });  

// **improvved version**
// function saveDT(Data){
//   return new Promise((success,failure)=>{
//     let speedLimit=Math.floor(Math.random()*10)+1;
//     if(speedLimit>4){
//      success("data was saved");
//     }else{
//       failure("data was not saved");
//     }
//   })
// }
// saveDT("pratiksha");
// saveDT("pratiksha")
//   .then((result)=>{
//   console.log("data1 saved,success",result);
//   console.log("result of promise:",result);
//   return saveDT("helloworld")
// })
// .then((result)=>{
//   console.log("data2 saved,success");
//   console.log("result of promise:",result);

//   return saveDT="Salunke";
// })
// .then((result)=>{
//   console.log("data3 saved,success");
//   console.log("result of promise:",result);
// })
// .catch((error)=>{
//   console.log("data was not saved!!! failure");
//   console.log("error of promise:",error);
// });  

// h1=document.querySelector("h1");
// function changeColor(color,delay){
//   return  new Promise((resolve,reject )=>{
//   setTimeout(()=>{
//     h1.style.color=color;
//     resolve("color changed");
//   },delay);
//    });
// }

// changeColor("red",1000)
// .then(()=>{
//   console.log("red color was complited")
//   return changeColor("blue",1000);
// })
// .then(()=>{
//   console.log("blue color was complited")
//   return changeColor("orange",1000);
// })
// .then(()=>{
//   console.log("orange color was complited")
 
// })

// **async function**
// async function greet(){
//   throw "pratiksha"
//   adc.adc();
//   return "hello world!";
// }
// let hello=async()=>{
//   return 5;
// };


// await keyword
// function getNum(){
//   return new Promise((resolve,rejected)=>{
//     setTimeout(() => {
//     let num=Math.floor(Math.random()*10)+1;
//     console.log(num);
//     resolve();
//     }, 1000);
//   })
// }
// async function demo(){
//   await getNum();
//   await getNum();
//   await getNum();
// }

// async function demo(){
//   changeColor("red",1000);
//   changeColor("blue",1000);
//   changeColor("orange",1000);
// }

// let data=`{"fact":"The average cat can jump 8 feet in a single bound, nearly six times its body length!","length":83}`;
// let valid=JSON.parse(data);
// console.log(valid);
// console.log(data.fact);
// console.log(data.length);
// let student={
//   name:"om",
//   age:20,
// }

// API REquest

// let url="https://api.thecatapi.com/v1/";
// fetch(url)
// .then((responce)=>{
//   console.log(responce);
//   responce.json()
//   .then((data)=>{
//     console.log(data);
//   });
// })
// .catch((error)=>{
//   console.log("error",error);
// })

// let arr=["om","car","sai","pratiksha"];
// console.log(arr);
// arr.push("hii");
// console.log(arr);
// arr.shift("hii");
// console.log(arr);

// addition of even number
let sumEven=0;
let sumOdd=0;
let arr=[2,5,4];
for(let i=0;i<arr.length;i++){
  if(arr[i]%2==1){
    sumOdd+=arr[i];
  }else{
    sumEven+=arr[i];
  }
}
console.log("sum of odd number:",sumOdd);
console.log("sum of even number:",sumEven);
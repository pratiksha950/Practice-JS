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

let btn=document.querySelector("button");
btn.textContent="<h2>pratiksha </h2>";
btn.textContent="<h2>pratiksha </h2>";
// btn.innerHTML="<h2>pratiksha</h2>";
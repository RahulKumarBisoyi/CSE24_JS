//Element Target

let x=document.getElementById("demo"); //singlevalue
let y=document.getElementsByClassName(""); //multiple value arrayform
let z=document.getElementsByTagName(""); //array form
document.querySelector(""); //can give id(#), class(.), tag(tag name)
document.querySelectorAll(); 




let a=document.getElementById("demo").getAttribute("id"); //only name
let b=document.getElementById("demo").setAttribute("class","democlass"); //two attribute one name and class

//Styling
document.getElementById("demo").style.color="blue";
let c=document.createElement("h2");
let r=document.getElementsByTagName("body");
let par=document.createElement("h2");
r[0].append(par);



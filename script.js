// console.log("hello world");  //this will show in console
// document.write("hello world");  //this will show on scrren
//         var num=10;
//         console.log(num);
//         console.log(typeof(num));
//         num=false;
//         console.log(typeof(num));
//         num="rahul";
//         console.log(typeof(num));
//         num=undefined;
//         console.log(typeof(num)); 

//         const sym1=Symbol(4)
//         console.log(sym1);
//         const sym2=Symbol(3);
//         console.log(sym2);
//         if(sym1==sym2){
//             console.log("true");
//         }
//         else{
//             console.log("false");
//         }

//         var i;
//         for(i=0;i<3;i=i+1){
//             console.log(i);
//         }

//         var count;
//         document.write("starting loop"+"<br/>");
//         for(count=0;count<10;count++){
//             document.write("current count:"+count);
//         }
//         document.write("ending loop");


function myFunction(){
    alert("Hello World");
}

function sayHello(name,age){
    // document.write(name+" is "+age+" years old")
}

let add=(x,y)=>{console.log(x+y)}  //arrow function 
add(5,8);

var person2= new Object();
person2.name="Rahul";
person2.age=18;
person2.Married=false;
person2.address={};
person2.address.street="vijay nagar";
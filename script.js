"use strict"
let modifier=document.querySelectorAll("button")[2]
let delet=document.querySelector(".delete")
let add=document.querySelector(".add")
let navbar=document.querySelector(".navbar")
let position=document.querySelectorAll('.position .coordonnes')[0]
console.log(position.textContent)
delet.onclick=function(){
document.body.style.backgroundColor="white"
alert("hello world!")
}

add.addEventListener("click",function(){
    document.body.style.backgroundColor="red"
    
   
})

function show(event){
   let  positionVertical=event.clientX
    let  positionHorizental=event.clientY
     let text= "coord du X: " + positionVertical + `<br>`+ " coord du Y : " + positionHorizental;
      position.innerHTML = text;
     
    
}




const square = document.createElement("div");
document.body.appendChild(square);

let grow = true; 
let size = 100 // wielkość kwadratu

square.style.width = size + "px"; 
square.style.height = size + "px";
square.style.backgroundColor = "orangered";

//window.innerWidth * 0.5
//window.innerHeight * 0.5

window.addEventListener("scroll", function(){
 if (grow){
   size += 5;
   square.style.width = size + "px";
   square.style.height = size + "px";
 } else if (!grow){
    size -= 5;
    square.style.width = size + "px";
    square.style.height = size + "px";
 }

 if (size >= window.innerWidth / 2){
   grow = !grow;
 } else if(size <= 0){
   grow = !grow;
 }

});


























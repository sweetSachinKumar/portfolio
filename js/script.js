
//Header Scroll

let nav = document.querySelector(".navbar")
let scrollTop  = document.querySelector(".scrollTop")

/*

function topFunction(){
document.body.scrollTop = 0;
console.log("clicked")
}
*/

function topFunction(){
document.body.scrollTop = 0; 
document.documentElement.scrollTop = 0;
}



window.onscroll = function(){
var scroll =  document.documentElement.scrollTop ;
if(scroll > 100){
nav.classList.add("design_navbar");


}
else{
nav.classList.remove("design_navbar")

}

if(scroll >= 505){
nav.classList.add("design_navbar-show");

scrollTop.classList.add("show");

}else{
nav.classList.remove("design_navbar-show");
scrollTop.classList.remove("show");
}




}



// after clicking any nav-link of navbar 

let navBar = document.querySelectorAll(".nav-link")

let navCollapse = document.querySelector(".navbar-collapse.collapse")

navBar.forEach( function (a){
a.addEventListener("click",function(){
navCollapse.classList.remove("show")

 })

}  )
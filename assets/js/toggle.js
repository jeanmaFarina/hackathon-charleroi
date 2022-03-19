let toggle = document.querySelector(".toggle");
let nav = document.querySelector(".header");

let box = document.getElementsByClassName("questions__box");
let box2 = [...box];

toggle.addEventListener("click", function(){
    nav.classList.toggle("toggle__on");
});

box2.forEach(element =>{
    element.addEventListener("click", ()=>{
        element.classList.toggle("toggle__on");
    })
})
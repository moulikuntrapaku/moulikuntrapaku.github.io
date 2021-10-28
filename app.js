const $burger=document.querySelector(".burger");
const $navlinks=document.querySelector(".navlinks");
const $line1=document.getElementsByClassName("line1");
const $line2=document.getElementsByClassName("line2");
const $line3=document.getElementsByClassName("line3");

$burger.onclick=() =>{
    $navlinks.classList.toggle("navclicked");
    $burger.classList.toggle("burgerclicked");
    $line1.classList.toggle("line-1");
    $line2.classList.toggle("line-2");
    $line3.classList.toggle("line-3");
    
}
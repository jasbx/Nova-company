
let cont=document.getElementById("choseus")
    
cont.style.transition = "opacity 1.5s ease";

window.addEventListener('scroll', function() {
    if (window.scrollY > 400) {
       
        cont.style.opacity = "5";
        cont.style.pointerEvents = "auto";
    }else{
        cont.style.opacity = "0";
        cont.style.pointerEvents = "none";
    }
});
let cards =document.querySelector(".cards")
cards.style.transition = "opacity 1.5s ease";
window.addEventListener('scroll', function() {
    if (window.scrollY > 1000) {
       
        cards.style.opacity = "5";
        cards.style.pointerEvents = "auto";
    }else{
        cards.style.opacity = "0";
        cards.style.pointerEvents = "none";
    }
});
let cards2 =document.querySelector(".cards2")
cards2.style.transition = "opacity 2.5s ease";
window.addEventListener('scroll', function() {
    if (window.scrollY > 1000) {
       
        cards2.style.opacity = "8";
        cards2.style.pointerEvents = "auto";
    }else{
        cards2.style.opacity = "0";
        cards2.style.pointerEvents = "none";
    }
});
let all_card =document.getElementById("allcard")
all_card.style.transition = "opacity 1.5s ease";
window.addEventListener('scroll', function() {
    if (window.scrollY > 3100) {
       
        all_card.style.opacity = "4";
        all_card.style.pointerEvents = "auto";
    }else{
        all_card.style.opacity = "0";
        all_card.style.pointerEvents = "none";
    }
});

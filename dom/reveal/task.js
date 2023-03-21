const divsReveal = [...document.querySelectorAll(".reveal")];
function showReveal(el){
    const {top, bottom} = el.getBoundingClientRect();
    (top < window.innerHeight && bottom > 0) ? el.classList.add("reveal_active") : el.classList.remove("reveal_active");
}
divsReveal.forEach((element) => window.addEventListener('scroll',()=> showReveal(element)));



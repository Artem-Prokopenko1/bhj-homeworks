const arrSlide = [...document.querySelectorAll(".slider__item")];
const prewArrow = document.querySelector(".slider__arrow_prev");
const nextArrow = document.querySelector(".slider__arrow_next");

function nextElement(i, length){
    if (i === length - 1){return 0};
    return i += 1;
}
function prewElement(i, length){
    if (i === 0) return length - 1;
    return i -= 1;
}

nextArrow.onclick = () =>{
    let indexActiveSlide = arrSlide.findIndex(item => item.classList.contains("slider__item_active"));
    let indexNextSlide = nextElement(indexActiveSlide, arrSlide.length);
    arrSlide[indexActiveSlide].classList.remove("slider__item_active");
    arrSlide[indexNextSlide].classList.add("slider__item_active");
}
prewArrow.onclick = () =>{
    let indexActiveSlide = arrSlide.findIndex(item => item.classList.contains("slider__item_active"));
    let indexPrewSlide = prewElement(indexActiveSlide, arrSlide.length);
    arrSlide[indexActiveSlide].classList.remove("slider__item_active");
    arrSlide[indexPrewSlide].classList.add("slider__item_active");
}





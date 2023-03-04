const arrSlide = [...document.querySelectorAll(".slider__item")];
const prewArrow = document.querySelector(".slider__arrow_prev");
const nextArrow = document.querySelector(".slider__arrow_next");
let index = 0;

prewArrow.onclick = () => {
    if(index === 0){
        index = arrSlide.length - 1;
        arrSlide[index].classList.add("slider__item_active");
        arrSlide[0].classList.remove("slider__item_active");
        return;
    }
    arrSlide[index].classList.remove("slider__item_active");
    index -= 1;
    arrSlide[index].classList.add("slider__item_active");
};

nextArrow.onclick = () => {
    if(index === arrSlide.length - 1){
        index = 0;
        arrSlide[index].classList.add("slider__item_active");
        arrSlide[arrSlide.length - 1].classList.remove("slider__item_active");
        return;
    }
    index += 1;
    arrSlide[index].classList.add("slider__item_active");
    arrSlide[index - 1].classList.remove("slider__item_active");
};



const arrPopup = [...document.querySelectorAll(".modal")];
const close = [...document.querySelectorAll(".modal__close_times")];
const showSuccess = document.querySelector(".show-success");


function togglePopupMain(){
    arrPopup[0].classList.toggle('modal_active');
}
function closePopup(){
    arrPopup.forEach((element) => element.classList.remove('modal_active'));
}
togglePopupMain();

showSuccess.onclick = () => {
    togglePopupMain();
    arrPopup[1].classList.add('modal_active');
}

close.forEach((element) => element.onclick = closePopup);
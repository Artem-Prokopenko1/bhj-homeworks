const arrPopup = [...document.querySelectorAll(".modal")];
const close = [...document.querySelectorAll(".modal__close_times")];
const showSuccess = document.querySelector(".show-success");

arrPopup.forEach(item => {
    if(item.id === "modal_main")item.classList.add('modal_active');
    showSuccess.onclick = () => item.classList.add('modal_active');
});

close.forEach(item => item.onclick = () => arrPopup.forEach(item => item.className = 'modal'));



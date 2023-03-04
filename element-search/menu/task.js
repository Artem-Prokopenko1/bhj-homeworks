const arrMenuLink = [...document.querySelectorAll(".menu__link")];
const arrSubMenu = [...document.querySelectorAll(".menu_sub")];

arrMenuLink.forEach( (item) => {
    item.onclick = () => clickLink(item.closest(".menu__item"));
})

function clickLink(item){
    const subMenu = item.querySelector(".menu_sub");
    if(!item.querySelector(".menu_active")){
        hideOpenMenu();
    }
    if(subMenu){
        subMenu.classList.toggle("menu_active");
        return false;
    }
}

function hideOpenMenu(){
    arrSubMenu.forEach((element) => element.classList.remove("menu_active"));
}

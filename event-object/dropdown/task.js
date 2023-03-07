const dropdown = document.querySelector(".dropdown__value");
const dropdownList = document.querySelector(".dropdown__list");
const dropdownLink = [...document.querySelectorAll(".dropdown__link")];

function openDropdown(){
    dropdownList.classList.toggle("dropdown__list_active");
}
function changeTextButton(){
    dropdownList.classList.remove("dropdown__list_active");
    dropdown.textContent = this.textContent;
    return false;
}
dropdown.addEventListener("click", openDropdown);
dropdownLink.forEach(item => item.onclick = changeTextButton);

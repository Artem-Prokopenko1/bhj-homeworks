
const linksHasTooltip = [...document.querySelectorAll(".has-tooltip")];

linksHasTooltip.forEach(elem => {
    elem.insertAdjacentHTML("beforeEnd", `<div class="tooltip">${elem.title}</div>`);
    elem.addEventListener("click", clb);
})

function clb(event){
    linksHasTooltip.forEach(item => item.lastChild.classList.remove("tooltip_active"))
    event.preventDefault();
    event.currentTarget.lastChild.classList.add("tooltip_active");
}
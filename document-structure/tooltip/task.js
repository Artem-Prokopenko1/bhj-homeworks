
const linksHasTooltip = [...document.querySelectorAll(".has-tooltip")];

linksHasTooltip.forEach(elem => {
    elem.insertAdjacentHTML("afterEnd", `<div class="tooltip">${elem.title}</div>`);
    elem.addEventListener("click", clb);
})

function clb(event){
    event.preventDefault();
    const domRect = event.currentTarget.getBoundingClientRect();
    if(event.currentTarget.nextElementSibling.classList.contains("tooltip_active")){
        event.currentTarget.nextElementSibling.classList.remove("tooltip_active");
    }else{
       let activeTooltip = linksHasTooltip.find(item => item.nextElementSibling.classList.contains("tooltip_active"));
       if(activeTooltip){
        activeTooltip.nextElementSibling.classList.remove("tooltip_active");
       }
        event.currentTarget.nextElementSibling.classList.add("tooltip_active");
        event.currentTarget.nextElementSibling.style.top = domRect.top + 23 + "px";
        event.currentTarget.nextElementSibling.style.left = domRect.left + 5 + "px";
    }
}
let tabs = [...document.querySelectorAll(".tab")];
let tabsContent = [...document.querySelectorAll(".tab__content")];
tabs.forEach(item => item.addEventListener("click", showTab));

function showTab(event){
    let indexClick = tabs.indexOf(event.target);
    tabs.forEach(item => item.classList.remove("tab_active"));
    tabs[indexClick].classList.add("tab_active");
    tabsContent.forEach(item => item.classList.remove("tab__content_active"));
    tabsContent[indexClick].classList.add("tab__content_active"); 
}
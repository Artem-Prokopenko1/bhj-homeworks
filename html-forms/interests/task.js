const interestsMain = document.querySelector('.interests_main');

interestsMain.addEventListener("change", (event) => {
    let checkboxEvent = event.target; 
    if(!checkboxEvent.closest(".interests_active")){
        let childCheckBox = checkboxEvent.closest(".interest").querySelector(".interests_active");
        const childInputs = [...childCheckBox.querySelectorAll(".interest__check")];
        childInputs.forEach(item => {
            if(checkboxEvent.checked === true){
                item.checked = true;
            }else{
                item.checked = false;
            }
        })
    }   
}
);
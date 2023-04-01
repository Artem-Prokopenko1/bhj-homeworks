const taskInput = document.querySelector(".tasks__input");
const buttonTaskAdd = document.querySelector(".tasks__add");
const tasksList = document.querySelector(".tasks__list");


buttonTaskAdd.addEventListener("click", addTask);
function addTask(event){
    event.preventDefault();
    let text = taskInput.value.trim();
    
    if(text){ 
        tasksList.insertAdjacentHTML("afterbegin",
        `<div class="task">
            <div class="task__title">
              ${text}
            </div>
            <a href="#" class="task__remove">&times;</a>
         </div>`
         )
    } 
}

tasksList.addEventListener("click", event => {
    let taskCloseClick = event.target;
    if(taskCloseClick.classList.contains("task__remove")){
        taskCloseClick.parentNode.remove();
    }
})
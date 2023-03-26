const chatWidget = document.querySelector(".chat-widget");
chatWidget.addEventListener("click", () => chatWidget.classList.add("chat-widget_active"));

const chatInput = document.querySelector(".chat-widget__input");
document.addEventListener("keydown", (event) => {
    if(event.key === "Enter" && chatInput.value){
        console.log(chatInput.value);
    
}
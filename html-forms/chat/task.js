const chatWidget = document.querySelector(".chat-widget");
const chatInput = document.querySelector(".chat-widget__input");
const messages = document.querySelector( '.chat-widget__messages' );
const answerBot = [
    "Добрый день, мы ещё не проснулись. Позвоните через 10 лет",
    "Здрасьте забор покрасьте",
    "Мы не очень рады вас видеть особенно с утра",
    "В настоящий момент ни один оператор не хочет с вами разговаривать",
    "Кто вы такое?",
    "Не пишите сюда больше",
];
let data = new Date();
let hour = data.getHours();
let minutes = data.getMinutes();
let timeMessage = `${hour}:${minutes}`;

chatWidget.addEventListener("click", () => chatWidget.classList.add("chat-widget_active"));

document.addEventListener("keydown", (event) => {
    if(event.key === "Enter" && chatInput.value){
        addUserMessage(chatInput.value);
        addAnswerBot();
        }
    }
)

function addUserMessage(messageUser){
    messages.innerHTML += `
    <div class="message message_client">
    <div class="message__time">${timeMessage}</div>
    <div class="message__text">${messageUser}</div>
</div>
`;
}

function addAnswerBot(){
    let randomElemArr = Math.floor(Math.random() * answerBot.length);
    messages.innerHTML += `
    <div class="message">
    <div class="message__time">${timeMessage}</div>
    <div class="message__text">
    ${answerBot[randomElemArr]}
    </div>
  </div>
`;
}






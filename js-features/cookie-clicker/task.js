const cookie = document.getElementById("cookie");
const clickerCounter = document.getElementById("clicker__counter");
const clickerSpeed = document.getElementById("clicker__speed");

function cookieChangeSize(){
    cookie.width === 200 ? cookie.width = 300 : cookie.width = 200;
}

let start;
let end;

function measureSpeed(){
    if(!start){
        start = Date.now();
    }else{
        end = Date.now();
        let clicksSpeed = Number(clickerSpeed.textContent);
        clicksSpeed = 1000 /(end - start);
        clickerSpeed.textContent = clicksSpeed.toFixed(2);
        start = end;
    }
}

cookie.onclick = ()=> {
    cookieChangeSize();
    let clicksCounter = Number(clickerCounter.textContent);
    clicksCounter += 1;
    clickerCounter.textContent = clicksCounter;
    measureSpeed();
};
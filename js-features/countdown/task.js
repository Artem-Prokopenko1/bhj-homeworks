


const countDown = function () {
    const timer = document.getElementById("timer");
    const arr = timer.textContent.split(":");
   
    let hours = arr[0];
    let minutes = arr[1];
    let seconds = arr[2];
    
   
    if(seconds > 0 ){
        seconds -= 1;
    }else if(minutes > 0){
            minutes -= 1;
            seconds = 59;
    }else if(hours > 0){
            hours -= 1;
            minutes = 59;
    }
    else{
        alert("Вы победили в конкурсе");
    }
    if(seconds < 10 && seconds[0] != "0"){
        seconds = "0" + seconds;
    }
    if(minutes < 10 && minutes[0] != "0"){
        minutes = "0" + minutes;
    }
    if(hours < 10 && hours[0] != "0"){
        hours = "0" + hours;
    }
    timer.textContent = `${hours}:${minutes}:${seconds}`;
}
setInterval(countDown, 1000);

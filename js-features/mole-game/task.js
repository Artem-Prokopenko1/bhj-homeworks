const deadMole = document.getElementById("dead");
const miss = document.getElementById("lost");
const arrHole = [];

for (let i = 1; i <= 9; i++){
    arrHole.push(document.getElementById(`hole${i}`));
    
}
console.log(arrHole);
for( let clickHole of arrHole){
    clickHole.onclick = () => {
        console.log(clickHole.className);
        if(clickHole.className.includes( 'hole_has-mole' )){
            console.log(Number(deadMole.textContent));
            let counterMole = Number(deadMole.textContent);
            counterMole += 1;
            deadMole.textContent = counterMole;
            if(counterMole === 10) {
                alert("Победа!");
                deadMole.textContent = "0";
            }
        }else{
            let counterMiss = Number(miss.textContent);
            counterMiss += 1;
            miss.textContent = counterMiss;
            if(counterMiss === 5) {
                alert("Вы проиграли.");
                miss.textContent = "0";
            }
        };
    };
}

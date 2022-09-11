//variables

let flippedCards = 0;
let card1 = null;
let card2 = null;
let turns = 0;
let successes = 0;
let result1 = null;
let result2 = null;
let counter = false;
let timeLimit = 30;
let time = timeLimit;
let interval = null;

//audios

let clickAudio = new Audio('./sounds/click.wav');
let loseAudio = new Audio('./sounds/lose.wav');
let successAudio = new Audio('./sounds/success.wav');
let winAudio = new Audio('./sounds/win.wav');
let wrongAudio = new Audio('./sounds/wrong.wav');

//Elementos DOM

let successesId = document.getElementById("successes");
let turnsId = document.getElementById("turns");
let timerContainer = document.getElementById("timerContainer");
let timeId = document.getElementById("time");
let counterCircle = document.getElementById("counterCircle");
let alertBanner = document.getElementById("alert");
let alertText = document.getElementById("alertText");


//Números aleatorios

let numbers = [1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6, 7, 7, 8, 8];
numbers = numbers.sort(() => { return Math.random() - 0.5 });


//función principal

function flip(id) {

    timerContainer.style.display = "inline";

    if (!counter) {
        if (time < 10) {
            timeId.innerHTML = `0${time}`;
        } else {
            timeId.innerHTML = time
        };        
        countTime();
        counter = true;
        counterCircle.classList.remove("counterCircleOff");
        counterCircle.classList.add("counterCircleOn");

    }

    flippedCards++;

    if (flippedCards == 1) {
        card1 = document.getElementById("card" + id);
        card1.innerHTML = `<img src="./images/${numbers[id]}.png">`
        card1.disabled = true;
        result1 = numbers[id];
        clickAudio.play();

    } else if (flippedCards == 2) {
        card2 = document.getElementById("card" + id);
        card2.innerHTML = `<img src="./images/${numbers[id]}.png">`
        card2.disabled = true;
        result2 = numbers[id];
        //Incrementar movimientos
        turns++;
        turnsId.innerHTML = `Movimientos: ${turns}`;

        //Comparar resultados
        if (result1 == result2) {
            flippedCards = 0
            successes++;
            successesId.innerHTML = `Aciertos: ${successes}`;
            successAudio.play();

            if (successes == 8) {
                clearInterval(interval);
                successesId.innerHTML = `Aciertos: ${successes} 🤩`;
                timerContainer.style.display = "none";
                alertBanner.style.display = "inline";
                alertText.innerHTML = `<h1>🥳️¡HAS GANADO!🥳️</h1><p>Lo lograste en ${turns} movimientos ✌️ y en ${time} segundos ✌️</p>`
                document.getElementById("reset").style.display = "inline";
                winAudio.play();
            }

        } else {
            flippedCards = 0;
            wrongAudio.play();
            setTimeout(() => {
                card1.innerHTML = '';
                card2.innerHTML = '';
                card1.disabled = false;
                card2.disabled = false;
            }, 400)

        }




    }



}

//Contador

function countTime() {
    interval = setInterval(() => {
        time--;
        if (time < 10) {
            timeId.innerHTML = `0${time}`;
        } else {
            timeId.innerHTML = time
        };
        if (time == 0) {
            loseAudio.play();
            clearInterval(interval);
            disableCards();
            counterCircle.classList.remove("counterCircleOn");
            counterCircle.classList.add("counterCircleOff");
            document.getElementById("reset").style.display = "inline";
            alertBanner.style.display = "inline";
            alertText.innerHTML = `<h1>😱¡Perdiste!😵</h1><p>Sigue intentando</p><p>Nunca te rindas 💪</p>`
        }
    }, 1000)
}

//Bloquear Tarjetas

function disableCards() {
    for (let i = 0; i < numbers.length; i++) {
        let card = document.getElementById("card" + i);
        card.innerHTM = `<img src="./images/${numbers[i]}.png">`;
        card.disabled = true;
    }
}

function reset() {
    location.reload()
}
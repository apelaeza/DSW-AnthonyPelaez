"use strict";

//variables


let numeroAdivinarArray = [];
let turn = 0;
let fijas = 0;
let picas = 0;
let num1 = 0;
let num2 = 0;
let num3 = 0;
let num4 = 0;
let numSelected = 1;
let lastNumSelected = false;

//audios

let clickAudio = new Audio('./sounds/click.wav');
let loseAudio = new Audio('./sounds/lose.wav');
let successAudio = new Audio('./sounds/success.wav');
let winAudio = new Audio('./sounds/win.wav');
let wrongAudio = new Audio('./sounds/wrong.wav');

//Elementos DOM

// let testBox = document.getElementById("testBox");
let startButton = document.getElementById("startButton");
let surrenderButton = document.getElementById("surrenderButton");
let evaluateButton = document.getElementById("evaluateButton");

let numberPanel = document.getElementById("numberPanel");
let alert = document.getElementById("alert");

let tbody = document.getElementById("tbody");
let thead = document.getElementById("thead");



//FUNCIONES

function selected(id) {
    numSelected = id.slice(3);
}

window.onload = () => {
    startButton.focus();
}

addEventListener("keydown", (event) => {
    
    if (event.key == "Backspace" && document.getElementById("num" + (numSelected)).value == '') {
        if (numSelected > 1) {
            document.getElementById("num" + (numSelected - 1)).focus();
            // numSelected--;
        }
        return false;
    }
})



addEventListener("keypress", (event) => {
    if (event.key == "Enter") {
        return false;
    }    
    event.preventDefault();
    let key = event.key;
    let parsed = parseInt(key);    
    if (parsed >= 0) {
        document.getElementById("num" + (numSelected)).value = parsed;
        numSelected < 4 ? numSelected++ : numSelected;
        document.getElementById("num" + (numSelected)).focus();
    }
})



// Funcionalidad ENTER

document.getElementById("num4").onfocus = function () {
    numSelected = 4;
    lastNumSelected = true;
}

document.addEventListener("keydown", (event) => {
    if (event.key == "Enter" && lastNumSelected) {
        numSelected = 1;
        document.getElementById("num1").focus();
        evaluateCandidateNumber();
    }
})

//Número para Adivinar - - Cuatro dígitos que no se repiten entre sí y forman un solo número

function start() {

    startButton.style.transform = "translateX(-1600px)";
    surrenderButton.style.transform = "translateX(32px)";
    evaluateButton.style.display = "inline";
    numberPanel.style.display = "inline";
    document.getElementById("num1").focus();



    let numeroAdivinar = 1000;

    do {
        numeroAdivinar = Math.floor(Math.random() * 9753 + 123);
        numeroAdivinarArray = numeroAdivinar.toString().split('');
        if (numeroAdivinar < 1000) {
            numeroAdivinarArray.unshift('0');
        }

    }
    while (hasDuplicates(numeroAdivinarArray) && numeroAdivinarArray !== [9, 8, 7, 6])

    // testBox.innerHTML = numeroAdivinarArray; // Probando que funcione el número

}

function surrender() {

    surrenderButton.style.transform = "translateX(-1200px)";
    resetButton.style.transform = "translateX(-175px)";
    evaluateButton.style.display = "none";
    numberPanel.style.display = "none";

    document.getElementById("secretNum1").innerText = numeroAdivinarArray[0];
    document.getElementById("secretNum2").innerText = numeroAdivinarArray[1];
    document.getElementById("secretNum3").innerText = numeroAdivinarArray[2];
    document.getElementById("secretNum4").innerText = numeroAdivinarArray[3];

    resetButton.focus();
}


function evaluateCandidateNumber() {



    num1 = document.getElementById("num1").value;
    num2 = document.getElementById("num2").value;
    num3 = document.getElementById("num3").value;
    num4 = document.getElementById("num4").value;


    let candidateNumber = [];

    candidateNumber.push(num1);
    candidateNumber.push(num2);
    candidateNumber.push(num3);
    candidateNumber.push(num4);

    console.log(candidateNumber)
    console.log("hay vacios?: " + (candidateNumber.indexOf('') + 1))

    if (candidateNumber.indexOf('') + 1 > 0) {
        alert.innerHTML = `<p>Número inválido. Recuerda que deben ser 4 dígitos no repetidos</p>`;
        setTimeout(function () {
            alert.innerHTML = '';
        }, 3000)
        return false

    } else {



        if (hasDuplicates(candidateNumber)) {
            alert.innerHTML = `<p>Número inválido. Recuerda que deben ser 4 dígitos no repetidos</p>`;
            setTimeout(function () {
                alert.innerHTML = '';
            }, 3000);
            return false;
        }
    }

    turn++;

    if (numeroAdivinarArray.indexOf(num1) >= 0) {
        if (numeroAdivinarArray.indexOf(num1) + 1 == 1) {
            fijas++;
        } else {
            picas++;
        }
    }

    if (numeroAdivinarArray.indexOf(num2) >= 0) {
        if (numeroAdivinarArray.indexOf(num2) + 1 == 2) {
            fijas++;
        } else {
            picas++;
        }
    }

    if (numeroAdivinarArray.indexOf(num3) >= 0) {
        if (numeroAdivinarArray.indexOf(num3) + 1 == 3) {
            fijas++;
        } else {
            picas++;
        }
    }

    if (numeroAdivinarArray.indexOf(num4) >= 0) {
        if (numeroAdivinarArray.indexOf(num4) + 1 == 4) {
            fijas++;
        } else {
            picas++;
        }
    }

    candidateNumber = candidateNumber.join('');

    if (turn == 1) {
        thead.innerHTML += `<tr>
        <th scope="col">#</th>
        <th scope="col">Candidato</th>
        <th scope="col">Fijas</th>
        <th scope="col">Picas</th>
        </tr>`;
    }

    tbody.innerHTML += `<tr>
        <th scope="row">${turn}</th>
        <td>${candidateNumber}</td>
        <td>${fijas}</td>
        <td>${picas}</td>
        </tr>  `;

    fijas = 0;
    picas = 0;

    document.getElementById("num1").value = '';
    document.getElementById("num2").value = '';
    document.getElementById("num3").value = '';
    document.getElementById("num4").value = '';
    lastNumSelected = false;
    document.getElementById("num1").focus();

}

function hasDuplicates(array) {
    return new Set(array).size < array.length; //Método que valida si el array tiene elementos repetidos
}

function reset() {
    resetButton.style.transform = "translateX(-1600px)";
    setTimeout(function () {
        location.reload()
    }, 800);

}
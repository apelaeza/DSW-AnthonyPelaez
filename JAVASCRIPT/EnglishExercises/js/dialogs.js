$(document).ready(function () {
    cargarDatos();
});


function cargarDatos() {
    let html = '';
    $.ajax({
        url: "http://127.0.0.1:5500/JAVASCRIPT/EnglishExercises/dialogs.json"
    }).done(function (response) {

        //Guarda el resultado en variables
        let dialogs = response.dialogs;
        let lines = dialogs[0].lines;

        console.log(dialogs);

        console.log(dialogs[0].lines);



        //Recorre el arreglo y concatena el HTML para los elementos de información
        dialogs.forEach(element => {
            html += `<li class="list-group-item"><strong>${element.type}:</strong> ${element.name} </li>
            <li class="list-group-item info"><strong>Season: </strong> ${element.season} </li>
            <li class="list-group-item info"><strong>Chapter:</strong> ${element.chapter} </li>
            <li class="list-group-item info"><strong>Minute:</strong> ${element.minute} </li>
            <li class="list-group-item info"><strong>Actor:</strong> ${element.actors[0].name} </li>`
        });
        //Modifica el DOM agregando el html generado
        $(".list-group").html(html);

        html = '';
        idNumber = 1;
        //Recorre el arreglo y concatena el HTML para cada línea del diálogo
        lines.forEach(element => {
            html += `<ul class="list-group list-group-horizontal"><li class="list-group-item"><strong> Person ${element.person}</strong> </li> <li class="list-group-item liCheckBox"> <input class="form-check-input" type="checkbox" > </li> <li class="list-group-item" value="" id="text${idNumber}"> ${element.text} </li> <li class="list-group-item liPlayButton"> <img class="playButton" src="./images/play-button.svg" onclick="play(${idNumber})" id="playId${idNumber}"> </li> </ul>`
            idNumber++;
        });
        //Modifica el DOM agregando el html generado
        $(".dialogs").html(html);
    });
} 



function play(id){
    console.log(id);
    text = document.getElementById("text"+id).innerHTML
    console.log(text);

    const speechSynthesis = (new SpeechSynthesisUtterance(text));
    speechSynthesis.lang = "en";
    speechSynthesis.rate = 0.8;
    window.speechSynthesis.speak(speechSynthesis); 
    
}
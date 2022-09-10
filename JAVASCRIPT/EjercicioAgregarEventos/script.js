var eventos = [];

function iniciarEventos() {
    for (var i = 1; i < 200; i++) {
        eventos.push({
            nombre: "Evento " + i,
            descripcion: "Esta es la descripción del evento " + i,
        })
    }
}

iniciarEventos();

var contador = 0;

function agregarEventos() {

    for (let i = 0; i < 5; i++) {

        var newCard = document.createElement('div');
        newCard.className += "card mt-3 mb-3";
        newCardBody = document.createElement('div');
        newCardBody.className += "card-body";
        newCard.appendChild(newCardBody);                        
        var newH = document.createElement('h2');
        newH.className += "card-title";
        newH.innerHTML = eventos[contador].nombre;
        newCardBody.appendChild(newH);                        
        
        newCardText = document.createElement('p');
        newCardText.className += "card-text";
        newCardText.innerHTML = eventos[contador].descripcion;
        newCardBody.appendChild(newCardText);        
        document.getElementById("eventos").appendChild(newCard);
        
        contador++;
    }
}

agregarEventos();
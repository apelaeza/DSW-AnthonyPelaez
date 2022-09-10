// Hemos omitido los acentos en los comentarios por compatibilidad

$(document).ready(function () {

    var id = location.search.match(/id=(\d)*/)[1]

    cargarDatos(id);
    console.log(id);
  
});


function cargarDatos(id) {
    $.ajax({
        url: "http://127.0.0.1:5500/JAVASCRIPT/EjercicioAjax/info.json"
    }).done(function (respuesta) {

        console.log(respuesta);

        var eventos = respuesta.eventos;

        console.log(respuesta.eventos);

        var evento = eventos.find(function (element) {
            return element.id == id;
        });

        console.log(evento);

        var html = `<h3>  ${evento.nombre} (${evento.fecha}) </h3>
        <p><strong>Descripcion:</strong> ${evento.descripcion}</p>
        <p><strong>Precio:</strong> ${evento.precio}</p>
        <p><strong>Invitados:</strong> ${evento.invitados}</p>
        
        <p><strong>Lugar:</strong> ${evento.lugar}</p>`;

        $("#evento").html(html);
    });
} 
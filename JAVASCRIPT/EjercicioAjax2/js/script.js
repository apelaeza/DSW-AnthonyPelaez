$(document).ready(function () {
    cargarDatos();
});


function cargarDatos() {
    var html = '';
    $.ajax({
        url: "http://127.0.0.1:5500/JAVASCRIPT/EjercicioAjax2/eventos.json"
    }).done(function (respuesta) {

        //Guarda el resultado en variables
        var eventos = respuesta.eventos;
        var actual = respuesta.fechaActual;

        //Selecciona los eventos que sean anteriores a la fecha actual del JSON
        var eventosPasados = eventos.filter(e => {
            return e.fecha <= actual;
        });

        //Ordena los eventos segun la fecha (los mas recientes primero)
        eventosPasados = eventosPasados.sort(function (x, y) {
            if (x.fecha < y.fecha) {
                return 1;
            }
            return -1;
        });

        //Recorre el arreglo y concatena el HTML para cada evento
        eventosPasados.forEach(element => {
            html += `<h3>  ${element.nombre} (${element.fecha}) </h3>
            <p><strong>Descripcion:</strong> ${element.descripcion}</p>
            <p><strong>Precio:</strong> ${element.precio}</p>
            <p><strong>Invitados:</strong> ${element.invitados}</p>
            <p><strong>Lugar:</strong> ${element.lugar}</p>`;
        });
        //Modifica el DOM agregando el html generado
        $("#pasados").html(html);
    });
} 
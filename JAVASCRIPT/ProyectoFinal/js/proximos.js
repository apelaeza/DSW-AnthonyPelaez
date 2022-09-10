$(document).ready(function () {
  cargarDatos();
});


function cargarDatos() {
  var html = '';
  $.ajax({
    url: "http://127.0.0.1:5500/JAVASCRIPT/ProyectoFinal/info.json"
  }).done(function (respuesta) {

    //Guarda el resultado en variables
    var eventos = respuesta.eventos;
    var actual = respuesta.fechaActual;

    //Selecciona los eventos que sean anteriores a la fecha actual del JSON
    var eventosProximos = eventos.filter(e => {
      return e.fecha > actual;
    });

    //Ordena los eventos segun la fecha (los mas recientes primero)
    eventosProximos = eventosProximos.sort(function (x, y) {
      if (x.fecha > y.fecha) {
        return 1;
      }
      return -1;
    });

    //Recorre el arreglo y concatena el HTML para cada evento
    eventosProximos.forEach(element => {
      html += `
              <div class="card mb-4">
                <div class="card-body">
                  <a href="detalle.html?id=${element.id}"> <h2 class="card-title">${element.nombre}</h2></a>
                  <p class="card-text"><small class="text-muted">${element.fecha} - ${element.lugar}</small></p>   
                  <p class="card-text">${element.descripcion}</p>
                  <p class="card-text detalle" >Costo: ${element.precio}</p>
                </div>
              </div>
            </div>
            `
    });
    //Modifica el DOM agregando el html generado
    $("#proximos").html(html);
  });
} 
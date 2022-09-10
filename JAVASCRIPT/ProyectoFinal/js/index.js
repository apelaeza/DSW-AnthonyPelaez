// Hemos omitido los acentos en los comentarios por compatibilidad

//Define las variables que necesites

var pasados = [];
var proximos = [];
var actual;
var eventos;
var htmlPasados = '';
var htmlProximos = '';

$(document).ready(function () {

  //Carga los datos que estan en el JSON (info.json) usando AJAX
  $.ajax({
    url: "http://127.0.0.1:5500/JAVASCRIPT/ProyectoFinal/info.json"
  }).done(function (respuesta) {

    //Guarda el resultado en variables
    actual = respuesta.fechaActual;
    eventos = respuesta.eventos;

    //Clasifica los eventos segun la fecha actual del JSON
    proximos = eventos.filter(e => {
      return e.fecha > actual;
    });
    pasados = eventos.filter(e => {
      return e.fecha <= actual;
    });

    //Ordena los eventos pasados segun la fecha (los mas cercanos primero)
    pasados = pasados.sort(function (x, y) {
      if (x.fecha < y.fecha) {
        return 1;
      }
      return -1;
    });
    //Extrae solo dos eventos
    pasados = pasados.slice(0, 2);

    //Ordena los eventos proximos segun la fecha (los mas cercanos primero)
    proximos = proximos.sort(function (x, y) {
      if (x.fecha > y.fecha) {
        return 1;
      }
      return -1;
    });
    //Extrae solo dos eventos
    proximos = proximos.slice(0, 2);

    //Crea un string que contenga el HTML que describe el detalle del evento

    //Recorre el arreglo y concatena el HTML para cada evento
    proximos.forEach(element => {
      htmlProximos += `
          <div class="col-sm-6">
            <div class="card">
              <div class="card-body">
                <a href="detalle.html?id=${element.id}"> <h2 class="card-title">${element.nombre}</h2></a>
                <p class="card-text"><small class="text-muted">${element.fecha}</small></p>        
                <p class="card-text">${element.descripcion}</p>
              </div>
            </div>
          </div>
          `
    });
    //Modifica el DOM agregando el html generado
    $("#proximos").html(htmlProximos);

    //Crea un string que contenga el HTML que describe el detalle del evento

    //Recorre el arreglo y concatena el HTML para cada evento
    pasados.forEach(element => {
      htmlPasados += `
            <div class="col-sm-6">
              <div class="card">
                <div class="card-body">
                  <a href="detalle.html?id=${element.id}"> <h2 class="card-title">${element.nombre}</h2></a>
                  <p class="card-text"><small class="text-muted">${element.fecha}</small></p>        
                  <p class="card-text">${element.descripcion}</p>
                </div>
              </div>
            </div>
            `
    })
    //Modifica el DOM agregando el html generado
    $("#pasados").html(htmlPasados);

  })

});

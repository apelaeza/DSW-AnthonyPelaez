// Hemos omitido los acentos en los comentarios por compatibilidad

$(document).ready(function () {

  //Esta es la instruccion para tomar el id del URL detalle.html?id=<identificador>
  var id = location.search.match(/id=(\d)*/)[1]
  //Carga los datos que estan en el JSON (info.json) usando AJAX
  $.ajax({
    url: "http://127.0.0.1:5500/JAVASCRIPT/ProyectoFinal/info.json"
  }).done(function (respuesta) {
    //Guarda el resultado en una variable
    var eventos = respuesta.eventos;
    //Busca el elemento en el arreglo
    var evento = eventos.find(function (element) {
      return element.id == id;
    });
    //Crea un string que contenga el HTML que describe el detalle del evento
    var html = `
                <div class="card">
                  <div class="card-body">
                    <h2 class="card-title">${evento.nombre}</h2>
                    <p class="card-text"><small class="text-muted">${evento.fecha} - ${evento.lugar}</small></p>   
                    <p class="card-text">${evento.descripcion}</p>
                    <p class="card-text detalle">Costo: ${evento.precio}</p>
                    <p class="card-text detalle2">Invitados: ${evento.invitados}</p>
                  </div>
                </div>
              </div>
              `
    //Modifica el DOM agregando el html generado dentro del div con id=evento
    $("#evento").html(html);
  });

})


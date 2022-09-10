// EJERCICIO 1

Instrucciones
¡Qué bueno tenerte de vuelta! Estamos trabajando con objetos para representar estructuras relacionadas a los elementos instruccionales en el currículo de la Escuela de Computación de nuestra Universidad. Sabemos que estás adquiriendo nuevas habilidades en la programación con JavaScript y deseamos que nos ayudes a crear un objeto llamado actividad, que sea una instancia de la clase ElementoInstruccional que tiene tres propiedades: identificador, tipo y versión. La clase debe tener un método que genere el nombre de un archivo, el cual contiene la descripción de la actividad. El nombre del archivo tiene la siguiente estructura:

COMP18S_<Identificador>_<Tipo>_<version>.midoc

Para probar crea tres actividades y llama al método que genera el nombre del archivo

Actividad

Identificador

Tipo

Versión

a1

1

interactiva

V1

a2

2

ejercicio

V2

a3

3

laboratorio

V1

 Puntos de verificación
La impresión deber ser: 

   "COMP18S_1_Interactiva_V1.midoc"
   "COMP18S_2_Ejercicio_V2.midoc"
   "COMP18S_3_Laboratorio_V1.midoc"

// EJERCICIO 2

   A continuación necesitamos que representes los eventos usando las nociones de clases en el paradigma orientado a objetos en JavaScript. Para ello, crearemos una clase Evento con un constructor que recibe: id, nombre, cantidadAsistentes y precioPorAsistente. Luego crearemos los métodos para mostrar lo siguiente:

enlace(): Es un string conformado de la siguiente manera “/evento/<id>”
dineroTotalRecaudado()

prueba con el siguiente código

var evento1 = new Evento(1,"e1", 12, 5);
console.log(evento1.enlace())
console.log(evento1.dineroTotalRecaudado())
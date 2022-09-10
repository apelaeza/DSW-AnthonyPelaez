Tu reto en esta ocasión es hacer las validaciones de los eventos. Para validar un evento veamos primero cómo está estructurado:

Un evento tiene tres campos (nombre, descripcion, fecha), a continuación las validaciones

nombre
Debe ser diferente a null (nulo) y diferente a undefined (indefinido)
Debe tener un mínimo de caracteres (quitando los espacios en blanco al final y al principio usando trim())
descripcion
Debe ser diferente a null (nulo) y diferente a undefined (indefinido)
Debe tener un mínimo de caracteres (quitando los espacios en blanco al final y al principio usando trim())
fecha
Debe ser diferente a null (nulo) y diferente a undefined (indefinido)
Debe ser mayor que una fecha mínima dada
Por lo tanto, un evento es válido si sus tres campos son válidos de acuerdo a las reglas anteriores.

Para realizar este ejercicio debes desarrollar tres funciones descritas a continuación:

stringValido(string, largo)
Recibe el string y su largo, y devuelve: verdadero si cumple con todos los requisitos o falso en caso contrario. Si no recibe un largo entonces no se valida la longitud.
fechaValida(fecha,minimaFecha)

Recibe la fecha y la fecha mínima, y devuelve: verdadero si cumple con todos los requisitos o falso en caso contrario. Si no recibe una minimaFecha entonces no se valida la fecha mínima.

eventoValido(evento)
Recibe el evento, y devuelve: verdadero si cumple con todos los requisitos o falso en caso contrario. Esta función utiliza a las dos anteriores.

Para probar, definimos que el mínimo para el nombre es 3, para la descripción es 10 y la fecha mínima es el primero de enero de 2018.

Prueba con el siguiente evento:

var evento = {
    nombre: "Evento 1",
    descripcion: "Esto es una descripción",
    fecha: new Date(2018,10,1)
};
Luego varía los valores del evento para probar que funcionan tus funciones.
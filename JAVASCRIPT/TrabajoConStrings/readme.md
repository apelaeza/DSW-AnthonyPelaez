El Arquitecto de Software, quien forma parte de tu equipo de desarrollo, ha identificado ciertas funciones necesarias para el manejo de los horarios de los eventos, y aquí justamente necesitamos de tu colaboración; por esto, te solicitamos implementar las siguientes funciones: encabezadoEvento y limpiarNombreParticipante. A continuación describimos cada una de éstas:

encabezadoEvento
Es una función que dado el nombre del evento y lugar, crea un string para la interfaz de usuario. Algunos ejemplos son:

encabezadoEvento("Intercambio de Libros", "Biblioteca") //Devuelve --> Evento: Intercambio de Libros. Lugar: Biblioteca
encabezadoEvento("Lectura de Poemas", "Sala A") //Devuelve --> Evento: Lectura de Poemas. Lugar: Sala A

limpiarNombreParticipante
Es una función que dado el nombre y apellido del participante lo transforma al apellido en mayúsculas, seguido de coma y luego el nombre en minúsculas. Esta función limpia los caracteres en blanco al inicio o final del nombre o apellido. Por ejemplo:

limpiarNombreParticipante("    Luis", "Castro   ") // Devuelve --> CASTRO, luis
limpiarNombreParticipante(" ANA", "MENDEZ   ") // Devuelve -->  MENDEZ, ana

Desarrolla el código fuente de las dos definiciones de funciones e instrucciones para imprimir su ejecución con los ejemplos dados.
En esta oportunidad el Arquitecto de Software ha identificado ciertas funciones necesarias para el manejo de los horarios de los eventos. Tu misión es implementar estas funciones que serán incorporadas luego en el código de la aplicación.

Función saludo
Esta función tiene los siguientes parámetros:

nombre
apellido
género (puede ser “FEMENINO” o “MASCULINO”)
evento
minutosQueFaltan (entero)
La función debe construir el string
Bienvenid <o|a> <NOMBRE-LIMPIO> <APELLIDO=LIMPIO>, recuerda <momento> el evento (<evento>)

Donde momento es:

“hoy” si minutosQueFaltan&<&60*24
“mañana” si minutosQueFaltan&<&60*24*2
“pronto” en caso contrario
Ejemplos:
saludo("    LUIS", "perez", "MASCULINO", "Película", 600) // Devuelve --> Bienvenido LUIS PEREZ, recuerda hoy el evento (Película)
saludo("ana ", "peRez", "FEMENINO", "Comidas del Mundo", 1500) // Devuelve --> Bienvenida ANA PEREZ, recuerda mañana el evento (Comidas del Mundo)
saludo("  PEDRO ", "Gil", "MASCULINO", "Juego de Baloncesto", 5000) // Devuelve --> Bienvenido PEDRO GIL, recuerda pronto el evento (Juego de Baloncesto)
Desarrolla el código fuente de las tres definiciones de funciones e instrucciones para imprimir su ejecución con los ejemplos dados.
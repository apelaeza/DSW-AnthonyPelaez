Tu reto es construir una función que reciba un arreglo de eventos y una fechaReferencia y devuelva un arreglo de dos posiciones. La primera posición son los eventos futuros ordenados desde el que ocurrirá más pronto hasta el que ocurra en el futuro. La segunda posición son los eventos pasados desde el más reciente al más antiguo. La fechaReferencia es quien determina cuál es el futuro y cuál es el pasado, antes de esa fecha todos son pasados y luego de ella todos son futuros.

La función debería lucir como la siguiente :

var resultado = organizarEventos(eventos,
 fechaReferencia)resultado[0] //eventos
 futuros ordenadosresultado[1] //eventos
 pasados ordenados
Ayuda
Puedes usar la función sort de arreglos de JavaScript, que recibe una función que determina el orden. Esta función recibe dos parámetros y debe retornar 1 (cuando a>b),0 (cuando a==b),-1 (cuando a<b). Su estructura es como la siguiente:

arreglo.sort((a,b) => {
    ...
    return x; //1 (cuando a>b), 0 (cuando a==b), -1 (cuando a<b)
    ...
})
Probar con
var eventos = [
   {
       nombre: "e1",
       fecha: new Date(2018,3,20)
   },
   {
       nombre: "e2",
       fecha: new Date(2018,2,20)
   },
   {
       nombre: "e3",
       fecha: new Date(2018,3,10)
   },
   {
       nombre: "e4",
       fecha: new Date(2018,5,20)
   },
   {
       nombre: "e5",
       fecha: new Date(2018,6,20)
   },
   {
       nombre: "e6",
       fecha: new Date(2018,0,20)
   },
   {
       nombre: "e7",
       fecha: new Date(2018,8,20)
   },
]
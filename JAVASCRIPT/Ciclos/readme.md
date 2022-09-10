El Arquitecto de Software nos ha comunicado la necesidad de otras funciones, que operan sobre  estructuras de datos de arreglos, para estimar ciertos valores necesarios en la construcción de nuestra aplicación. Es tu turno de implementar las funciones de acuerdo a las siguientes especificaciones.

Debes implementar tres funciones:
La función mínimo que recibe un arreglo de montos y devuelve el monto mínimo
La función máximo que recibe un arreglo de montos y devuelve el monto máximo
La función promedio que recibe el mínimo, máximo y el arreglo de montos y devuelve el promedio sin considerar ni el mínimo ni el máximo.

Ejemplo:
var donaciones = [5,15,22,25,30,52,5,1,0];
var min = minimo(donaciones);
var max = maximo(donaciones);
console.log(min);
console.log(max);
console.log(promedio(min, max, donaciones)); // devuelve 0 52 14.714285714285714

Desarrolla el código fuente de las tres definiciones de funciones e instrucciones para imprimir su ejecución con los ejemplos dados.
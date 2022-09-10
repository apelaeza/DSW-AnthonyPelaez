// A continuación encontrarás enumerado tu reto para esta oportunidad:

// Construye una función que dado un arreglo de números devuelva un arreglo del doble de cada elemento.
// Construye una función que dado un arreglo de números devuelva un arreglo de los números impares de ese arreglo.
// Construye una función que dado un arreglo de números devuelva el doble de cada elemento si este es impar, de lo contrario devolver la mitad.
// Prueba tus funciones con los siguientes arreglos e imprime los resultados.

// var arreglo1 = [1,2,3,4,5];
// var arreglo2 = [1,2,4,8];

//  Puntos de verificación
// Verifica la salida que obtienes, con los siguientes resultados: 

// Para arreglo1 
// La función definida en (1) debe retornar: [2,4,6,8,10]
// La función definida en (2) debe retornar: [1,3,5]
// La función definida en (3) debe retornar: [2,1,6,2,10]
// Para arreglo2 
// La función definida en (1) debe retornar: [2,4,8,16]
// La función definida en (2) debe retornar: [1]
// La función definida en (3) debe retornar: [2,1,2,4]

var arreglo1 = [1,2,3,4,5,9];
var arreglo2 = [1,2,4,8];

console.log(`Arreglo 1: ${arreglo1}`);

var doble = arreglo1.map( x => {
    return x * 2;
});
console.log(doble);

var impares = arreglo1.filter( x => 
    x % 2 !== 0  //Se puede omitir el return si se escribe directamente la condición después de la flecha
);
console.log(impares);

var dobleOMitad = arreglo1.map( x => {
    if(x % 2 !== 0) return x * 2;
    return x/2;
});
console.log(dobleOMitad);

console.log(`Arreglo 2: ${arreglo2}`);

var doble = arreglo2.map( x => {
    return x * 2;
});
console.log(doble);

var impares = arreglo2.filter( x => {
    return x % 2 !== 0;
});
console.log(impares);

var dobleOMitad = arreglo2.map( x => {
    if(x % 2 !== 0) return x * 2;
    return x/2;
});
console.log(dobleOMitad);
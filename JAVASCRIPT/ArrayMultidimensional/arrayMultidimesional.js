var arrayMuchasDimensiones = [1, ["hola", "que", "tal", ["estas", "estamos", "estoy"], ["bien", "mal"], "acabo"], 2, 5];


console.log(arrayMuchasDimensiones[0])
console.log(arrayMuchasDimensiones[1][2])
console.log(arrayMuchasDimensiones[1][3][1])

var tabla = new Array();
var filas = new Array();
var columnas = new Array();
// tabla[0] = filas;   
// tabla[1] = columnas;   

var contador = 1;

for (var i = 0; i <= 9; i++) {
       
    for (var j = 0; j <= 9; j++) {                 
        tabla[[i][j]] = contador;                
        console.log(contador + ": " + tabla[[i][j]])
        contador++;
    }
    
}

contador = 1;
console.log(filas.length)
console.log(columnas.length)
console.log(tabla.length)


for( let i = 0; i < filas.length; i++){
    console.log("filas: " + filas[i])
    console.log("cols: " + columnas[i])

}


// for (var k = 0; k <= 9; k++) {
//     for (var l = 0; l <= 9; l++) {
//         console.log("valor: " + contador + ": " + tabla[[k][l]]);        
//         contador++
//     }
// }


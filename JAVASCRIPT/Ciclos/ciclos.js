var donaciones = [5,15,22,25,30,52,5,1,0,52,0];
var min = minimo(donaciones);
var max = maximo(donaciones);

//funciones

function minimo(arreglo){
    var minimo=0;
    for(var numero of arreglo){
        if(numero < minimo){
            minimo = numero;
        }
    }
    return minimo;
}

function maximo(arreglo){
    var maximo=0;
    for(var numero of arreglo){
        if(numero > maximo){
            maximo = numero;
        }
    }
    return maximo;
}

function promedio(min, max, arreglo){
    var suma=0;
    var cantidad=0;
    for(var elemento of arreglo){
        if(elemento != min && elemento != max){
            suma += elemento;
            cantidad++;
        }
    }
    return suma/cantidad;
}

console.log(min);
console.log(max);
console.log(promedio(min, max, donaciones)); // devuelve 0 52 14.714285714285714


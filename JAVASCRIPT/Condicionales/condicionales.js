function momento(minutosFaltantes){
    var momento;

    if(minutosFaltantes < 60 * 24){
        momento = "hoy";
    }
    else if(minutosFaltantes < 60 * 24 * 2){
        momento = "mañana";            
    }
    else{
        momento = "pronto";
    }    
    return momento;
}

function definirGenero(genero){
    if(genero.toLowerCase() == "femenino"){
        genero = "a";
    }
    else{
        genero = "o";
    }
    return genero;
}

function limpiar(palabra){
    palabra = palabra.trim().toUpperCase();
    return palabra;
}

function saludar(nombre, apellido, genero, evento, minutosFaltantes){
    return `Bienvenid${definirGenero(genero)} ${limpiar(nombre)} ${limpiar(apellido)}, recuerda ${momento(minutosFaltantes)} el evento (${evento})`;
}

console.log(saludar("    LUIS", "perez", "MASCULINO", "Película", 600)); // Devuelve --> Bienvenido LUIS PEREZ, recuerda hoy el evento (Película)
console.log(saludar("ana ", "peRez", "FEMENINO", "Comidas del Mundo", 1500)); // Devuelve --> Bienvenida ANA PEREZ, recuerda mañana el evento (Comidas del Mundo)
console.log(saludar("  PEDRO ", "Gil", "MASCULINO", "Juego de Baloncesto", 5000)); // Devuelve --> Bienvenido PEDRO GIL, recuerda pronto el evento (Juego de Baloncesto)



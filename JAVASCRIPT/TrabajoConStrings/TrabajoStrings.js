
function encabezadoEvento(evento, lugar){
    return `Evento: ${evento}. Lugar: ${lugar}`;
}

function limpiarNombreParticipante(nombre, apellido){    
    return apellido.toUpperCase().trim() + ", " + nombre.toLowerCase().trim();
}


console.log(encabezadoEvento("Intercambio de Libros", "Biblioteca"));
console.log(encabezadoEvento("Lectura de Poemas", "Sala A"));

console.log(limpiarNombreParticipante("    Luis", "Castro   "));
console.log(limpiarNombreParticipante(" ANA", "MENDEZ   "));
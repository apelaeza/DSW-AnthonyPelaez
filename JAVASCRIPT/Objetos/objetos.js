
function stringValido(string, largo){

    if(largo != 0){
        if(string.trim().length >= largo){
            return true;
        }else{
            return false;
        }
    }
    return true;
    
}

function fechaValida(fecha,minimaFecha){
    if(minimaFecha != null){
        if(fecha >= minimaFecha){
            return true;
        }
        else{
            return false;
        }
    }
        return true;
    
};

function eventoValido(evento){
    if(stringValido(evento.nombre, 3) && stringValido(evento.descripcion, 10) && 
        fechaValida(evento.fecha, new Date(2018,01,01))){
        return true;        
    }
    else{
        return false;
    }
}

var evento = {
    nombre: "Evento 1",
    descripcion: "Esto es una descripción",
    fecha: new Date(2018,10,1)
};

console.log(eventoValido(evento));





class ElemetoInstruccional{
    constructor(identificador, tipo, version){
        this.identificador = identificador;
        this.tipo = tipo;
        this.version = version;
    }

    generarNombreArchivo(actividad){
        return `${actividad}_${this.identificador}_${this.tipo}_${this.version}.midoc`
    }
}

var actividad1 = new ElemetoInstruccional(1, "interactiva", "V1");
var actividad2 = new ElemetoInstruccional(2, "ejercicio", "V2");
var actividad3 = new ElemetoInstruccional(3, "laboratorio", "V1");

console.log(actividad1.generarNombreArchivo("COMP18S"));
console.log(actividad2.generarNombreArchivo("COMP18S"));
console.log(actividad3.generarNombreArchivo("COMP18S"));


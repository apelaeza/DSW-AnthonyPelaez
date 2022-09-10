Queremos aprovechar tu contagioso ánimo y esfuerzo para que ayudes a Juan, un desarrollador de aplicaciones web junior, con un problema que tiene en la construcción de una pieza de código en JavaScript. Juan escribió el código a continuación:

function GestionarEstudiante (estudiante,nota1,nota2, Gestion){
       var resGestion = Gestion();
       console.log ('Nombre Completo del Estudiante: ${estudiante} ${resGestion}');
}
function Promedio (nota1,nota2){
       return (nota1+nota2)/2;
}
GestionarEstudiante('Jose Carrillo', 18,20, Promedio);
esperando obtener el siguiente resultado:

"Nombre Completo del Estudiante: Jose Carrillo 19"
Sin embargo, él está obteniendo la siguiente salida:

"Nombre Completo del Estudiante: Jose Carrillo NaN"
Queremos que ayudes a Juan a arreglar su código suministrando el código con la modificación correspondiente.
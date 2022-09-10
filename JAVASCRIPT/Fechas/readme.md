
Necesitamos que trabajes con las fechas que son elementos importantes de la solución. Tu misión es completar una función para mostrar la fecha de cada evento pasado en una forma que sea más legible por una persona.

A continuación te mostramos unos avances generados por un programador que ayudó a la escuela anteriormente. Él construyó la siguiente función para el caso que la fecha fuera:

hace 1 segundo
hace 10 segundos
hace 1 minuto
hace 15 minutos
hace 1 hora
hace 5 horas
hace x días

Su función utiliza dos fechas: fecha (fecha del evento pasado) y fechaReferencia (fecha con la que se compara, se pondrá la fecha/hora actual). Además usa getTime para obtener la cantidad de milisegundos desde la fecha base (Enero 1 de 1970 0:0:0). Luego las convierte a segundos dividiendo entre mil. Para luego calcular la diferencia, restando la fecha de referencia menos la fecha del evento pasado. Y utiliza la estrategia de ir retornando a medida que consigue un valor.

Completa la función para que pueda devolver valores como:

hace 15 minutos
hace 1 hora
hace 5 horas
hace x días

Probaremos con esta instrucción e iremos variando los números.
console.log(fechaParaHumanos(new Date(2018,6,1,9,1,1,1000), new
Date(2018,6,1,10,1,1,100),))
Para terminar la función, debes seguir dividiendo la diferencia a la unidad que le
sigue e ir retornando los casos, recuerda considerar el singular y plural para las unidades
de tiempo según corresponda (ej. minutos, hora, horas).
function fechaParaHumanos(fecha, fechaRerencia){
var t1 = fecha.getTime() / 1000; // segundos
var t2 = fechaRerencia.getTime() / 1000; // segundos
var diferencia
diferencia = Math.round(t2-t1);
if (diferencia < 1) {
return "hace 1 segundo"
}
if (diferencia < 60) {
return `hace ${diferencia} segundos`
}
diferencia = Math.round(diferencia/60);
if (diferencia <= 1) {
return "hace 1 minuto"
}
if (diferencia < 60) {
return `hace ${diferencia} minutos`
}
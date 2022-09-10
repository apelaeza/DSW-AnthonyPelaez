function fechaParaHumanos(fecha, fechaReferencia) {
    var t1 = fecha.getTime() / 1000; // segundos
    var t2 = fechaReferencia.getTime() / 1000; // segundos
    var diferencia

    diferencia = Math.round(t2 - t1);

    if (diferencia < 1) {
        return "hace 1 segundo"
    }
    if (diferencia < 60) {
        return `hace ${diferencia} segundos`
    }

    diferencia = Math.round(diferencia / 60);
    
    if (diferencia <= 1) {
        return "hace 1 minuto"
    }
    if (diferencia < 60) {
        return `hace ${diferencia} minutos`
    }

    diferencia = Math.round(diferencia / 60);

    if (diferencia <= 1) {
        return "hace 1 hora"
    }
    if (diferencia < 24) {
        return `hace ${diferencia} horas`
    }

    diferencia = Math.round(diferencia / 24);

    return `hace ${diferencia} dias`

}

console.log(fechaParaHumanos(new Date(2018, 6, 1, 9, 1, 1, 1000), new
    Date(2018, 6, 3, 9, 16, 1, 1000)))

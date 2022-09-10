var eventos = [
    {
        nombre: "e1",
        fecha: new Date(2018, 3, 20)
    },
    {
        nombre: "e2",
        fecha: new Date(2018, 2, 20)
    },
    {
        nombre: "e3",
        fecha: new Date(2018, 3, 10)
    },
    {
        nombre: "e4",
        fecha: new Date(2018, 5, 20)
    },
    {
        nombre: "e5",
        fecha: new Date(2018, 6, 20)
    },
    {
        nombre: "e6",
        fecha: new Date(2018, 0, 20)
    },
    {
        nombre: "e7",
        fecha: new Date(2018, 8, 20)
    },
]

function organizarEventos(evento, fechaReferencia) {

    var eventosFuturos = evento.filter(x => 
        x.fecha.getTime() > fechaReferencia.getTime());

    var eventosPasados = evento.filter(x =>
        x.fecha.getTime() <= fechaReferencia.getTime());

    eventosFuturos = eventosFuturos.sort((a, b) => {
        if (a.fecha.getTime() > b.fecha.getTime()) {
            return 1;
        }
        if (a.fecha.getTime() < b.fecha.getTime()) {
            return -1;
        }
        return 0;
    })
    eventosPasados = eventosPasados.sort((a, b) => {
        if (a.fecha.getTime() > b.fecha.getTime()) {
            return -1;
        }
        if (a.fecha.getTime() < b.fecha.getTime()) {
            return 1;
        }
        return 0;
    })

    return (eventosFuturos, eventosPasados);
}

var resultado = organizarEventos(eventos, new Date(2018, 3, 21));
console.log(resultado[0]); //eventos futuros ordenados
console.log(resultado[1]); //eventos pasados ordenados

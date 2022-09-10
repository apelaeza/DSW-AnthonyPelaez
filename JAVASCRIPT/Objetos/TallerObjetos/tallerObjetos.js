var deporte = 
    {
    nombre:'Judo',
    origen: 'Japón',
    clubes: [{
        dojo:'Sensei VU',
        ciudad:'Inmaculada'
    },{
        dojo:'Sensei Sato',
        ciudad:'Tokio'
    }]
};


function verClubes(deporte){
    for (var elemento of deporte.clubes){
        console.log(`Club de ${deporte.nombre} ${elemento.dojo}, Ciudad: ${elemento.ciudad}`)
    }
}

verClubes(deporte);
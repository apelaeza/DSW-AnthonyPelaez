function numerosPares() {
    const promise = new Promise((resolve, reject) => {
        setTimeout(function () {
            const number = parseInt(Math.random() * 10 + 1);
            if (number % 2 == 0) {
                resolve(number)
            }
            else {
                reject(number)
            }
            
        }, 
            2000)
            
    }); return promise;
}

for (i = 0; i <= 9; i++) {

    numerosPares().then(function(resultado){
        var newP = document.createElement('p');
        newP.innerHTML = `El número ${resultado} es par.`;
        document.getElementById('Resultados').appendChild(newP);
    }).catch(error => {
        console.log(error)
        newP = document.createElement('p');
        newP.innerHTML = `El número ${error} no es par por tanto es rechazado.`;
        document.getElementById('Rechazados').appendChild(newP);
    })
}
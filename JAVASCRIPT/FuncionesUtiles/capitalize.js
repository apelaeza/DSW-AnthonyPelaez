function capitalize(texto){  

    var palabras = texto.split(" ").map(palabra => {

      return palabra[0].toUpperCase() + palabra.slice(1);

    })

    return palabras.join(" ");   

  }

  var frase = "Esto es una cadena de TEXTO";

  capitalize(frase);

  console.log(frase);
// Hemos omitido los acentos en los comentarios por compatibilidad

function validar(formulario) {

  limpiarErrores();

  if (formulario.nombres.value.trim().length == 0) {
    document.getElementById("errornombres").innerText = "Este campo es obligatorio";
    formulario.nombres.focus();
    return false;
  }

  if (formulario.nombres.value.trim().length < 3) {
    document.getElementById("errornombres").innerText = "Campo inválido";
    formulario.nombres.focus();
    return false;
  }

  if (formulario.email.value.trim().length == 0) {
    document.getElementById("errorEmail").innerText = "Este campo es obligatorio";
    formulario.email.focus();
    return false;
  }

  //Expresion regular del correo
  var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  if (!re.test(formulario.email.value)) {
    document.getElementById("errorEmail").innerText = "Campo inválido";
    formulario.email.focus();
    return false;
  }

  if (formulario.contrasena.value.trim().length == 0) {
    document.getElementById("errorContrasena").innerText = "Este campo es obligatorio";
    formulario.contrasena.focus();
    return false;
  }

  if (formulario.contrasena.value.trim().length < 7) {
    document.getElementById("errorContrasena").innerText = "Campo inválido (Mínimo 7 caracteres)";
    formulario.contrasena.focus();
    return false;
  }

  if (formulario.confirmacion.value.trim().length == 0) {
    document.getElementById("errorConfirmacion").innerText = "Este campo es obligatorio";
    formulario.confirmacion.focus();
    return false;
  }


  if (formulario.contrasena.value != formulario.confirmacion.value) {
    document.getElementById("errorConfirmacion").innerText = "No coincide con contraseña";
    formulario.confirmacion.focus();
    return false;
  }

  if (formulario.tipo.value == "-1") {
    document.getElementById("errorTipo").innerText = "Este campo es obligatorio";
    formulario.tipo.focus();
    return false;
  }

  if (!formulario.acepto.checked) {
    document.getElementById("errorAcepto").innerText = "Debe aceptar los términos y condiciones";
    formulario.acepto.focus();
    return false;
  }


  alert("Datos enviados");

  return true;

}

function limpiarErrores() {
  var errores = document.getElementsByClassName("text-danger");
  for (var i = 0; i < errores.length; i++) {
    errores[i].innerHTML = "";
  }
}
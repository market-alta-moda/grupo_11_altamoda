function validarnombre(nombre,email, minlength, maxlength) {
  var min = minlength;
  var max = maxlength;
  var letras = /^[A-Za-z]+$/;

  if (nombre.value === "" && email.value === "") {
   
  } else {
    if (
      (nombre.value.length > 0 && nombre.value.length < min) ||
      nombre.value.length > max
    ) {
      alert("Error!, el nombre debe ser mayor a " + min + " caracteres y" + " menor a " + max + ".");

      if (!nombre.value.match(letras)) {
        alert("Error!, solo puede ingresar caracteres alfabeticos");
      }
    } else {
      button.disabled = false;
      alert("formulario enviado!");
      return true;
    }
  }
}

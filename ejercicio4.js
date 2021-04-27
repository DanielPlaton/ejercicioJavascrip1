
var texto = prompt("Introduzca un cadena de texto");

var cadenaminiscular = texto.toLowerCase();

var letrasEspacios = cadenaminiscular.split(" ");

var cadenaSinEspacios = "";
  for(i in letrasEspacios) {
    if(letrasEspacios[i] != " ") {
      cadenaSinEspacios += letrasEspacios[i];
    }
  }
var cadena = cadenaSinEspacios.split("");
  
  var cadenaReves = cadenaSinEspacios.split("").reverse();

alert(cadenaReves);
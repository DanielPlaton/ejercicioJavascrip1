
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

var verdadero = true;

for(i in cadena){
	if(cadena[i]==cadenaReves[i]){
		verdadero= true;
	}else{
		verdadero= false;
	}
}

if(verdadero== true){
	document.write("La cadena pasada es un palindromo");
}else{
	document.write("La cadena pasada no es un palindromo");
}
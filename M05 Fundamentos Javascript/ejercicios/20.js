function esVocal(letra) {
  // Escribe una función que reciba una letra y, si es una vocal, muestre el mensaje “Es vocal”.
  // Si el usuario ingresa un string de más de un caracter, debes retornar el mensaje: "Dato incorrecto".
  // Si no es vocal, tambien debe retornar "Dato incorrecto".
  // Tu código:

  if (letra === 'a' || letra === 'e' || letra === 'i' || letra === 'o' || letra === 'u'){
    var esVocal = "Es vocal";
    return esVocal;
  }else if(letra.lengt > 1){
    var incorrecto = "Dato incorrecto";
    return incorrecto;
  }else{
    var noEsVocal = "Dato incorrecto";
    return noEsVocal;
  }
}

module.exports = esVocal;

function sumarArray(arrayOfNumbers, cb) {
  // Recibes un arreglo de números y un callback.
  // Suma todos los números del arreglo.
  // Este resultado debes pasárselo como argumento al callback recibido.
  // NOTA: no debes retOrnar nada.
  // Tu código:

  // let suma = 0;
  // for(let i=0; i < arrayOfNumbers.length; i++){
  //   suma = suma + arrayOfNumbers[i];
  // }
  // cb(suma);


  var resultado = arrayOfNumbers.reduce(function(acumulador, num){
    return (acumulador = acumulador + num);
  });

  return cb(resultado);
}

module.exports = sumarArray;

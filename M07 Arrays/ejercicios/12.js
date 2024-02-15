function agregarNumeros(arrayOfNums) {
  // Suma todos los elementos de arrayOfNums y retorna el resultado.
  // Tu código:

  let resultado = 0;

  for(i=0; i< arrayOfNums.length; i++){
    resultado = resultado + arrayOfNums[i];
  }
  return resultado;


  // return arrayOfNums.reduce((acumulador, elemento) => acumulador + elemento, 0);
}

module.exports = agregarNumeros;

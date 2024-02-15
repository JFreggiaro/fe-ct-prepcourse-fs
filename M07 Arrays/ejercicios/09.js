function contarElementosMayoresA10(array) {
  // Cuenta y devuelve la cantidad de elementos mayores a 10 en el array de números.
  // Tu código:

  let contador = 0;
  array.map(num => { if(num > 10){
    contador++;
  }
  });
  return contador;


}

contarElementosMayoresA10([11,12,13,16,81])
module.exports = contarElementosMayoresA10;

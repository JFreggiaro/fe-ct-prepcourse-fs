function contarParesConContinue(numeros) {
  // La función recibe un array de numeros por argumento.
  // Devuelve la cantidad de números pares que hay en el array.
  // Evita los impares utilizando continue.
  // Tu código:

  let numerosPares = 0;

  for(i=0; i<= numeros.length; i++){
    if(numeros[i]%2 === 0){
      numerosPares = numerosPares +1;
    }else{
      continue;
    }
  }

  return numerosPares
}

contarParesConContinue([1, 2, 3, 4, 5, 6])
module.exports = contarParesConContinue;

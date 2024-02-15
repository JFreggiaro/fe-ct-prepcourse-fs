function esImpar(num) {
  // Retorna true si "num" es impar.
  // De lo contrario, retorna false.
  // Tu código:

  if(num % 2 !== 0){
    return true;
  }else{
    return false;
  }

  // return num % 2 !== 0
}

module.exports = esImpar;
function encontrarIndiceMayor(array) {
  // Encuentra el índice del número más grande en el array de números.
  // Devuelve el valor de este índice.
  // Tu código:

  let indice = 0; 
  let max = array[0];

  for(i=0; i < array.length; i++){
    if(array[i] > max){
      indice = i;
      max = array[i];
    }
  }
  return indice;

}

encontrarIndiceMayor([-1,-2,-3,-4,-5])
module.exports = encontrarIndiceMayor;

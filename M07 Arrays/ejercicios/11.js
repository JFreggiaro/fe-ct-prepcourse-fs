function multiplicarElementosPorIndice(array) {
  // Multiplica cada elemento del array por su índice.
  // Devuelve el nuevo arreglo con los resultados.
  // Tu código:

  let newArray = [];
  for(i=0; i < array.length ; i++){
    newArray.push(array[i] * i);
  }
  return newArray;
  
}

multiplicarElementosPorIndice([2,4,6,8,1,6])
module.exports = multiplicarElementosPorIndice;

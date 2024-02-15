function agregarItemAlComienzoDelArray(array, elemento) {
  // Agrega el "elemento" al comienzo del arreglo recibido.
  // Retorna el arreglo.
  // Tu código:

  // let newArray = array.reverse();
  // newArray.push(elemento);
  // newArray.reverse();
  // return newArray;


  array.unshift(elemento);
  return array;
}

module.exports = agregarItemAlComienzoDelArray;

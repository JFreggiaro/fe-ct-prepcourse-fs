function duplicarElementos(array) {
  // Duplica (multiplica x2) cada elemento del array de números.
  // Devuelve un array con los duplicados.
  // Tu código:

  // let arrayDuplicado = [];
  
  // for (var i = 0; i < array.length; i++) {
  //   arrayDuplicado.push(array[i] * 2);
  // }
  
  // return arrayDuplicado;

  let newArray = array.map((elem) =>  elem * 2);
  return newArray

}


duplicarElementos([2,4,6,2,8,3,3,3,4,4,5,5]);
module.exports = duplicarElementos;

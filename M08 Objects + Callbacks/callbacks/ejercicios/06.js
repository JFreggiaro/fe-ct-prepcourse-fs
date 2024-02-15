function map(array, cb) {
  // Itera sobre el arreglo y por cada elemento, pasárselo como argumento al callback.
  // Tiene que guardar el resultado devuelto por el callback en cada elemento dentro de un nuevo arreglo.
  // Retorna el nuevo arreglo.
  // Tu código:

  // let newArray = [];

  // for(let i=0; i< array.length; i++){
  //   newArray[i] = cb(array[i]);
  // }
  // return newArray;

  var arrayNuevo = array.map(function(item){
    return cb(item);
  });
  return arrayNuevo;
}

module.exports = map;

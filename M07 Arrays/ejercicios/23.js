function devolverUltimoElemento(array) {
  // Retornar el último elemento del arreglo recibido.
  // Tu código: 

  if(array.length > 0){
    return array[array.length -1]
  } else {
    return null;
  }

}


devolverUltimoElemento([1,2,3,4,5,6])
module.exports = devolverUltimoElemento;

function obtenerElementoAleatorio(array) {
  // Devuelve un elemento aleatorio del arreglo array.
  // PISTA: Usa el método Math.random().
  // Tu código:

    var elemento = array[Math.floor(Math.random() * array.length)];
    console.log(elemento);
    return elemento;
 
}


obtenerElementoAleatorio([2,4,6,8,10,12,16]);
module.exports = obtenerElementoAleatorio;

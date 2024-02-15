function multiplicarArgumentos() {
  // Usa la palabra clave `arguments` para multiplicar todos los argumentos y devolver el producto.
  // Si no se pasan argumentos retorna 0. Si se pasa un argumento, simplemente retórnalo.
  // [PISTA]: "arguments" es un arreglo.
  // Tu código:

  if(arguments.length ===0){
    return 0;
  }

  if(arguments.length === 1){
    return arguments[0];
  }

  var total = 1;
  for (var i = 0; i < arguments.length; i++) {
    total *= arguments[i];
  }

  return total;


}

multiplicarArgumentos(10,0,10)
module.exports = multiplicarArgumentos;

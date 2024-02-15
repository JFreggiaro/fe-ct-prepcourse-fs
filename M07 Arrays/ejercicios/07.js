function convertirStringAMayusculas(array) {
  // Convierte a mayúsculas todos los strings del array.
  // Retorna el arreglo resultante.
  // Tu código:

  var arrayMayuscula = array.map ((str) => {
     str.toUpperCase();
  });
  
  return arrayMayuscula;
  

}

convertirStringAMayusculas(["hola", "pepe"]);

module.exports = convertirStringAMayusculas;

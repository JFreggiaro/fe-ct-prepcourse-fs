function promedioResultadosTest(resultadosTest) {
  // Itera sobre los elementos del arreglo resultadosTest y devuelve el promedio de las notas.
  // Tu código:

  let suma = 0;

  for(i=0; i< resultadosTest.length; i++){
    suma = suma + resultadosTest[i]; 
  }

  return suma / resultadosTest.length
}

promedioResultadosTest([10,10,16,12])
module.exports = promedioResultadosTest;

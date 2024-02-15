function esPalindromo(string) {
  // La función recibe un argumento "string".
  // Verifica si este string es palíndromo o no.
  // Retorna true si lo es, caso contrario, retorna false.
  // IMPORTANTE: Un palíndromo es una palabra o frase
  // que se lee igual hacia adelante que hacia atrás.
  // Tu código:

  // var compara = "";
  // var sincomayespacio = "";
  // sincomayespacio = string.replace(/[ ,]/g, ''); ;
  // sincomayespacio = sincomayespacio.toLowerCase();

  // for(let i = sincomayespacio.length -1; i >=0; i--){
  //   compara = compara + sincomayespacio[i];
  // }
  
  // if(compara == sincomayespacio){
  //   return true;
  // }else{
  //   return false;
  // }


  const stringSinEspacios = string.toLowerCase().replace(/\s/g, "");
  const stringReverso = stringSinEspacios.split("").reverse().join("");
  return stringSinEspacios === stringReverso;


}


module.exports = esPalindromo;

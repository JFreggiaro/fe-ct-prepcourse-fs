function esAnagrama(str1, str2) {
  // La función recibe dos argumentos "str1" y "str2" que son strings.
  // Determina si los dos strings son anagramas.
  // Devuelve true de ser así, sino retorna false.
  // IMPORTANTE: Un anagrama es una palabra que se forma
  // con las mismas letras que otra, pero en orden diferente.
  // Tu código:

  // var palabra1sinespacio = "";
  // var palabra2sinespacio = "";
  // palabra1sinespacio = str1.replace(/[ ,]/g, ''); ;
  // palabra2sinespacio = str2.replace(/[ ,]/g, ''); ;
  // console.log(palabra1sinespacio);
  // console.log(palabra2sinespacio);

  // for(let i= palabra1sinespacio.length -1; i>=0; i--){
  //   for(let j= palabra2sinespacio.length - 1; j>=0; j--){
  //     var controla = 0;
  //     while(controla <= palabra1sinespacio[j]){
  //       if(palabra1sinespacio[i]=== palabra2sinespacio[j]){
          
  //       }
  //     }
  //   }
  // }

  const ordenadoStr1 = str1.toLowerCase().split("").sort().join("");
  const ordenadoStr2 = str2.toLowerCase().split("").sort().join("");

  return ordenadoStr1 === ordenadoStr2;


}


esAnagrama("amor","roma");
module.exports = esAnagrama;

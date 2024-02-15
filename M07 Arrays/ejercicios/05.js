function obtenerPrimerStringLargo(array) {
  // Devuelve el primer string con más de 5 caracteres en el array.
  // Tu código:

let palabraSeparada = "";
let string = "";
 for(i=0; i< array.length; i++){
    palabraSeparada = array[i].split('');
    if(palabraSeparada.length >= 5){
     string = palabraSeparada.join('');
     break;
    }
 }

 if(string === ""){
  console.log("No se encontro");
  return undefined;
  }else {
  return string;
  }
 

 
}

obtenerPrimerStringLargo(["hi", "there", "how", "are", "you"])
module.exports = obtenerPrimerStringLargo;

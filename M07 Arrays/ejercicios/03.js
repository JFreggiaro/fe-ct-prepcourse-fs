function encontrarElemento(elemento, array) {
  // Busca el elemento pasado por argumento dentro del array.
  // Si no se encuentra, retorna -1.
  // Tu código:
    /*
    if(array.includes(elemento)){
      console.log(elemento);
      return elemento;
    }else{
      return -1;
    }
    */

    const index = array.findIndex((element) => element === elemento);
    if(index != undefined){
      console.log(index);
      return index;
    }else{
      return -1;
    }

    
}

encontrarElemento(2, [0,4,3,2]);
module.exports = encontrarElemento;

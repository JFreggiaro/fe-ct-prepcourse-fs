function filtrarNumerosPares(array) {
  // Devuelve un arreglo solo con los números pares presentes en el array.
  // Tu código:

   let newArray = [];
    array.map((num) => { 
      if(num % 2 === 0){
      newArray.push(num);
    }
    });
 
    return newArray;
}


filtrarNumerosPares([2,5,4,6,7])
module.exports = filtrarNumerosPares;

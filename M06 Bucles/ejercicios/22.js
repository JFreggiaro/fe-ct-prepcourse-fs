function diasEnMes(mes) {
  // La función recibe un mes(número) por argumento.
  // Determine cúantos días tiene el mes correspondiente a ese número.
  // PISTA: Usa un bucle do-while para validar que el mes ingresado sea válido.
  // Tu código:

  do{
    if(mes===1){
      return 31;
    }else if(mes ===2){
      return 28;
    }else if(mes ===3){
      return 31;   
    }else if(mes ===4){
      return 30;
    }else if(mes ===5){
      return 31;
    }else if(mes ===6){
      return 30;
    }else if(mes ===7){
      return 31;
    }else if(mes ===8){
      return 31;
    }else if(mes ===9){
      return 30;   
    }else if(mes ===10){
      return 31;
    }else if(mes ===11){
      return 30;
    }else if(mes===12){
      return 31;   
    }else{
      return 0;
    }
  }while(mes >=1);


}

module.exports = diasEnMes;

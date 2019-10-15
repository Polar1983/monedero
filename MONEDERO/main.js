
var cantidad = parseInt (prompt("Introduce cantidad",0))
var operacion =parseInt( prompt("intoduce mas o menos",0));

const purse = [
    {
      id : 1,
      money : 98,
    },
    {
      id : 2,
      money : 8,
    },
    {
      id : 3,
      money : 109,
    }
   ];
   
    var lastoperation = (purse[purse.length-1].money);
    var ultId = (purse[purse.length-1].id);
    

    switch(operacion) {

      case "-":
      console.log(lastoperation-cantidad);
      break;

       case "+":
      console.log(lastoperation+cantidad);
      break;

    }











    


















  


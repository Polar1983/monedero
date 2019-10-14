class sim{
    constructor(comida,bebida,vida){
  
      this.comida=comida;
      this.bebida=bebida;
      this.vida=vida;
      /* get y set para comida*/
    }
  set setComida(comida){
          this.comida = comida;
  
      }
  
      get getComida(){
          return this.comida;
  
      }
      /* get y set para vevida*/
  
      set setBebida(bebida){
        this.bebida=bebida;
      }
  
      get getBebida(){
        return this.bebida;
      }
  
  }
  var gocho = new sim ();
  gocho.setComida = "pasteles";
  gocho.setBebida = "Whisky"
  console.log("El puto Gocho se ha comido todos los " + gocho.getComida);
  console.log("Y se ha bebido todo el " + gocho.getBebida);
  
  var gocho2 = new sim();
   gocho2.setComida= "Hamburguesa";
   gocho2.setBebida = "Batido"
  
  console.log("El puto Gocho2 se ha comido todos los " + gocho.getComida);
  console.log("Y se ha bebido todo el " + gocho.getBebida)
}


































































    



}
        
      
      




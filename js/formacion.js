class Formacion{
  constructor(){
    this.c = loadImage("assets/otros/corriente.png");//flechas corrientes
    this.isla = loadImage("assets/otros/basuraAnimada.gif");
    this.tortuga = loadImage("assets/aqua/tortuguitaParada.png");
    this.dialogo = loadImage("assets/otros/globoDialogo.png");
    //-------------------------BOTONES----------------------------------
    this.btn_reciclaje = loadImage("assets/btn/btn-conciencia.png");
    this.btn_islas = loadImage("assets/btn/btn-islas.png");

    //-------------------------Diálogos---------------------------------
    this.d = ["Hola! Mi nombre es Aqua,\nHoy aprendemos qué son \nlas islas de basura",
              "Con ayuda de las corrientes de \nagua los desechos se acumulan \nen puntos específicos",
              "Ahora, ¿Qué impacto tendrá \nsobre nuestro planeta?\n¡Acompañame a descubrirlo!"];

    this.px = X(500);//posición del gif
    this.py = Y(500) ;
    this.rotacion = 20;
    this.cant = 3;
    this.velocidad = 2;
    this.dir = random(360);
    this.xTortu = X(1280);
    this.yTortu = Y(300);
    this.xBtn_Rec = X(1100);
    this.yBtn_Rec = Y(700);
    this.xBtn_I = X(1500);
    this.yBtn_I = Y(700);

  }
  dibujar(){

    imageMode(CENTER);
    //aqua
    image(this.tortuga, this.xTortu,this.yTortu - transicion, X(195), Y(317));

    if(transicion < 0){
      frameCount = 0;
    }

    if(frameCount < 200){//primer mensaje
      Dialogo(this.d[0],X(1440), Y(100), X(330), Y(180), X(1350), Y(70));
    }

    if(frameCount > 200 && frameCount < 360){ //agrega el segundo mensaje
      Dialogo(this.d[1],X(1420), Y(100), X(380), Y(200), X(1300), Y(70));
    }

    if(frameCount > 200 ){ //agrega las corrientes

      push();
      translate(350, 350);
      imageMode(CENTER);
      rotate(this.rotacion);
      image(this.c, X(0), Y(0),X(700), Y(700));
      pop();
      this.rotacion += radians(25);
    }
     if(frameCount > 360){ //agrega la isla
      image(this.isla, this.px, this.py - transicion, X(1000), Y(900) );
      // this.isla.play();

    }
     if(frameCount > 400){ //agrega último msj y los botones
      Dialogo(this.d[2],X(1420), Y(100), X(400), Y(220), X(1300), Y(70));
      image(this.btn_reciclaje, this.xBtn_Rec,this.yBtn_Rec - transicion, X(204), Y(245));
      image(this.btn_islas, this.xBtn_I,this.yBtn_I - transicion, X(204), Y(245));

    }


    //para la animación
    // for (let i = 0; i< 11 ; i++){
    //     image(desechos[i], 100 + this.px*20, 200 + this.py + 70, X(111), Y(256));
    //     this.px++;
    //     this.py++;
    // }
  }
  Avaza() {
    if (agarre > 0) {
      this.agarrar = true;
    }

     if (agarre == 1 ) {
       cambiarPantalla = true;
       reciclaje.jugar = false;
       reciclaje.contador = 0;
       r=2;
     }

     if(transicion >= height && agarre == 1 ){
    estado = "reciclaje";
     transicion = -height;
     cambiarPantalla = true;
      agarre = 0;
     }

    if (agarre == 2 ) {
      cambiarPantalla = true;
    }

    if(transicion >= height && agarre == 2 ){
      estado = "mapa";
    transicion = -height;
    cambiarPantalla = true;
     agarre = 0;
    }
}
}

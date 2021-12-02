class Paso01 {
  constructor() {
    //-------------------------BOTONES----------------------------------
    this.microplasticos = loadImage("assets/bioacumulacion/microplasticos.gif");
    this.nadador = loadImage("assets/bioacumulacion/nadador.gif");
    this.triton = loadImage("assets/bioacumulacion/triton.gif");
    this.p2 = loadImage("assets/btn/btn_paso2.png");
    //----------------------------AQUA----------------------------------
    this.tortuga = loadImage("assets/aqua/tortuguitaHablando.png");

    this.xMicro = X(950);
    this.yMicro = Y(600);
    this.xNadador = X(200);
    this.yNadador = Y(250);
    this.xTriton = X(1300);
    this.yTriton = Y(950);
    this.xTortu = X(100);
    this.yTortu = Y(840);

  }

  Dibujar(){

    imageMode(CENTER);

    image(this.microplasticos, this.xMicro  - transicionx,this.yMicro - transicion, X(574), Y(331));
    image(this.nadador, this.xNadador  - transicionx,this.yNadador - transicion, X(264), Y(70));
    image(this.triton, this.xTriton  - transicionx,this.yTriton - transicion, X(273), Y(227));

    image(this.tortuga, this.xTortu - transicionx,this.yTortu - transicion, X(200), Y(214));
    Dialogo("Usá el mouse para \ndescubrir qué ocultan \nlos objetos", X(300) - transicionx, Y(680), X(330), Y(200), X(200)- transicionx, Y(650));


    image(this.p2, X(1800), Y(1000), X(203), Y(54));
  }
  Avaza() {
    if (agarre > 0) {
      this.agarrar = true;
    }

     if (agarre == 1 ) {
       cambiarPasos = true;
       atras = false;
     }

     if(transicionx >= width && agarre == 1){
     estado = "paso02";
     agarre = 0;
     transicionx = -width;
     cambiarPasos = true;
     atras = false;
     }

     if (agarre == 2 ) {
       this.datoOculto(X(200)- transicionx,Y(280),this.xMicro- transicionx,this.yMicro - 80, 100,"MEGAPLÁSTICOS","Los megaplásticos son responsables\ntanto en personas como animales de:\nCortes\nHeridas\nEnredos\nInfecciones");

     }
     if (agarre == 3 ) {
       this.datoOculto(X(1000)- transicionx,Y(300),this.xMicro- transicionx,this.yMicro,100,"MICROPLÁSTICOS","Son partículas de menos de 5mm.\nMirá cuantos llegan cada año al mar \nVER MÁS >");

     }
     if (agarre == 4 ) {
       this.datoOculto(X(600)- transicionx,Y(850),this.xTriton- transicionx,this.yTriton,150,"FIVE DEEP DIVES","Encontraron una bolsa de plástico\n y papeles de caramelo en el punto \nemás profundo del océano\n a 10.935m de profundidad \nen la Fosa de las Marianas.");
     }
  }

  datoOculto(posX_, posY_,pxE_,pyE_, tam_, h2_, txt_) {

     this.posX = posX_;
     this.posY = posY_;
     this.pxE = pxE_;
     this.pyE = pyE_;
     this.tam = tam_;
     this.h2 = h2_;
     this.p = txt_;

     fill(255);
     textAlign(LEFT);

     push();
     textFont(tipografia);
     textSize(28);
     text(this.h2, this.posX + 120, this.posY);
     pop();

     textSize(14);
     text(this.p, this.posX + 120, this.posY+30);

     push();
     strokeWeight(3);
     noFill();
     stroke(226, 214, 104);
     ellipseMode(CENTER);
     ellipse(this.pxE, this.pyE, this.tam, this.tam);
     line(this.posX + 120, this.posY, this.pxE + this.tam/2,this.pyE);
     //line(this.posX+this.tam,this.posY + this.tam,this.posX,this.posY);
     pop();
      
      //------------------ ACÁ DESPLEGAMOS EL POPUP-------------------------------------------
       if(mouseIsPressed){
         if (mouseX > X(850) && mouseX < X(1400)&& mouseY > Y(300) && mouseY < Y(400)) {
           estado = "popup";
          }
       }
       //-----------------------------------CERRAR----------------------------------------------
       if (mouseIsPressed) {
         if (mouseX > X(1600) - 10 && mouseX < X(1600) + 10 && mouseY > Y(140)-10 && mouseY < Y(140) + 10) {
           popup.remuve();
         }
       }
   }

}

class Paso02 {
  constructor() {
    //--------------------------DECORATIVO--------------------------------
    this.cardumen = loadImage("assets/bioacumulacion/cardumen.png");
    this.pez = loadImage("assets/bioacumulacion/pescado.png");
    this.alga = loadImage("assets/bioacumulacion/algas.png");
    this.piedra = loadImage("assets/bioacumulacion/piedra.png");
    //-------------------------BOTONES------------------------------------
    this.langostinos = loadImage("assets/bioacumulacion/langostinos.gif");
    this.barco = loadImage("assets/bioacumulacion/barco.gif");
    this.p1 = loadImage("assets/btn/btn_paso1.png");
    this.p3 = loadImage("assets/btn/btn_paso3.png");

    this.xLan = X(250);
    this.yLan = Y(400);
    this.xBarco = X(1700);
    this.yBarco = Y(250);
    this.xPez = X(970);
    this.yPez = Y(750);
    this.xCardumen = X(1350);
    this.yCardumen= Y(440);
    this.xAlga = X(400);
    this.yAlga = Y(1080-151);
    this.xPiedra = X(650);
    this.yPiedra= Y(1080-55);

  }

  Dibujar(){
    imageMode(CENTER);
    //--------------------------------------------------------------------
    //-----------------------------BTN------------------------------------
    //--------------------------------------------------------------------
    image(this.langostinos, this.xLan - transicionx,this.yLan - transicion, X(155), Y(168));
    image(this.barco, this.xBarco - transicionx,this.yBarco - transicion, X(391), Y(235));
    //--------------------------------------------------------------------
    //--------------------------DECORATIVO--------------------------------
    //--------------------------------------------------------------------
    image(this.pez, this.xPez - transicionx,this.yPez - transicion, X(266), Y(93));
    image(this.alga, this.xAlga - transicionx,this.yAlga - transicion, X(222), Y(302));
    image(this.piedra, this.xPiedra - transicionx,this.yPiedra - transicion, X(388), Y(115));
    image(this.cardumen, this.xCardumen - transicionx,this.yCardumen - transicion, X(259), Y(195));
    //--------------------------------------------------------------------
    //--------------------------NAVEGACIÓN--------------------------------
    //--------------------------------------------------------------------
    image(this.p1, X(120), Y(1000), X(203), Y(54));
    image(this.p3, X(1800), Y(1000), X(203), Y(54));
  }
  Avaza() {
    if (agarre > 0) {
      this.agarrar = true;
    }
     if (agarre == 1 ) {
       cambiarPasos = true;
       atras = true;
     }
     if(transicionx <= -width && agarre == 1){
     estado = "paso01";
     agarre = 0;
     transicionx = width;
     cambiarPasos = true;
     atras = true;
     }

    if (agarre == 2 ) {
      cambiarPasos = true;
      atras = false;
    }

    if(transicionx >= width && agarre == 2){
    estado = "paso03";
    agarre = 0;
    transicionx = -width;
    cambiarPasos = true;
    atras = false;
    }

    if (agarre == 3 ) {

      this.datoOculto(X(280) - transicionx,Y(400),this.xLan- transicionx,this.yLan,150,"ANIMALES","Confunden los desechos \ncon alimento");
    }
    if (agarre == 4 ) {
      this.datoOculto(X(1400) - transicionx,Y(450),this.xBarco- transicionx,this.yBarco,100,"Actividad pesquera","Pesca de animales contaminados \npara consumo");
    }

  }
  datoOculto(posX_, posY_,pxE_,pyE_,tam_, h2_, txt_) {
     this.posX = posX_;
     this.posY = posY_;
     this.pxE = pxE_;
     this.pyE = pyE_;
     this.tam= tam_;
     this.h2 = h2_;
     this.p = txt_;
     //noStroke();
     textAlign(LEFT);
     fill(255);
     push();
     textFont(tipografia);
     textSize(28);
     text(this.h2, this.posX + 120, this.posY);
     pop();
     textSize(16);
     text(this.p, this.posX + 120, this.posY+30);
     push();
     strokeWeight(3);
     noFill();
     stroke(226, 214, 104);
     ellipseMode(CENTER);
     ellipse(this.pxE, this.pyE, this.tam, this.tam);
     line(this.posX + 120, this.posY, this.pxE + this.tam/2,this.pyE);
     pop();

   }
}

class Paso03 {
  constructor() {
    //----------------------------AQUA----------------------------------
    this.tortuga = loadImage("assets/aqua/Señalando.png");
    this.p2 = loadImage("assets/btn/btn_paso2D.png");

    this.py = Y(420);
    this.px = X(250);
  }

  Dibujar(){
    imageMode(CENTER);
    push();
    textFont(tipografia);
    fill(255);
    textAlign(CENTER);
    textSize(36);
    text("La mesa está servida", displayWidth / 2 - transicionx, Y(150) - transicion);
    textSize(24);
    text("Tocá los alimentos para ver cuánto plástico pueden contener", displayWidth / 2 - transicionx, Y(1000) - transicion);
    pop();

    image(this.tortuga, X(1540)- transicionx, Y(1060) - transicion, X(121), Y(230) );
    Dialogo("La bioacumulación lleva \na consumir sustancias \ndañinas.", X(1680)- transicionx, Y(910), X(330), Y(170), X(1580)- transicionx, Y(785));

    //--------------------------------------------------------------------
    //-----------------------------BTN------------------------------------
    //--------------------------------------------------------------------

    //this.Alimento(this.px,this.py, X(200) , Y(165), mesa[0]);
     push();

     // this.Alimento(this.px,this.py, X(200) , Y(165), mesa[0]);
     // this.Alimento(this.px + X(350),this.py, X(200) , Y(165), mesa[1]);
     // this.Alimento(this.px + X(700),this.py, X(200) , Y(165), mesa[2]);
     // this.Alimento(this.px + X(1050),this.py, X(200) , Y(165), mesa[3]);
     // this.Alimento(this.px + X(1400),this.py, X(200) , Y(165), mesa[4]);
     for(let i = 0; i<5 ; i++){ //arreglo que carga las imagenes

       this.Alimento(this.px + (i*+X(350))- transicionx,this.py- transicion, X(200) , Y(165), mesa[i]);

    //
    //   image( mesa[i] , 200 + (i*+250) , this.py , X(200) , Y(165) );
    //
    //    //-----------------------HOVER ALIMENTOS----------------------------
    //     if(mouseX > 200 + (i*+250) - X(100) && mouseX < 200 + (i*+250) + X(100) && mouseY > this.py - Y(165) / 2 && mouseY < this.py + Y(165) / 2){
    //       //push();
    //       translate(-100,-20);
    //       scale(1.1);
    //       //pop();
    //     } else {
    //       scale(1);
    //     }
     }
    pop();

    this.label(X(250)- transicionx,Y(570)- transicion,"Riesgo alto de\ningesta");
    this.label(X(600)- transicionx,Y(570)- transicion,"Riesgo alto de\ningesta");
    this.label(X(950)- transicionx,Y(570)- transicion,"Riesgo moderado de\ningesta");
    this.label(X(1300)- transicionx,Y(570)- transicion,"Riesgo moderado de\ningesta");
    this.label(X(1650)- transicionx,Y(570)- transicion,"Riesgo bajo de\ningesta");
    //--------------------------------------------------------------------
    //--------------------------NAVEGACIÓN--------------------------------
    //--------------------------------------------------------------------
    image(this.p2, X(120), Y(1000), X(203), Y(54));
  }
  Avaza() {
    if (agarre > 0) {
      this.agarrar = true;
    }
     if (agarre == 1 ) {
       this.datoOculto(X(280),Y(570),"Riesgo alto de\ningesta","A través del agua embotellada se\npueden ingerir 90.000 partículas de\nmicroplástico adicionales al año");
     }
     if (agarre == 2 ) {
       this.datoOculto(X(600),Y(570),"Riesgo alto de\ningesta","Las partículas tan pequeñas son \ndificiles de filrar.\nBebiendo agua de la canilla se \npueden ingerir 4.000 partículas de \nmicroplástico al año.");
     }
     if (agarre == 3 ) {
       this.datoOculto(X(950),Y(570),"Riesgo moderado de\ningesta","La sal marina fina contiene entre 5 \ny 20 micropartículas de plástico por\nkilo de sal marina");
     }
     if (agarre == 4 ) {
       this.datoOculto(X(1300),Y(570),"Riesgo moderado de\ningesta","Los mariscos se consumen integros,\npor eso hay más riesgo de consumir\nmicroplásticos.\nUna porción de mejillones \npodría contener siete microgramos \nde microplásticos.");
     }
     if (agarre == 5 ) {
       this.datoOculto(X(1650),Y(570),"Riesgo bajo de\ningesta","Los plásticos quedan en el intestino,\nno migran al tejido muscular ");
     }

     if (agarre == 6 ) {
       cambiarPasos = true;
       atras = true;
     }
     if(transicionx <= -width && agarre == 6){
     estado = "paso02";
     agarre = 0;
     transicionx = width;
     cambiarPasos = true;
     atras = true;
     }
  }
     label(posX_, posY_, h2_){
    this.posX = posX_;
    this.posY = posY_;
    this.h2 = h2_;
    if(this.posX < 700 ){
      fill(221, 100, 84);
    } else if(this.posX > X(700) && this.posX < X(1650)){
      fill(226, 214, 104);
    } else{
      fill(95, 216, 165);
    }

    noStroke();
    rectMode(CENTER);
    rect(this.posX, this.posY, X(330), Y(80));
    textSize(14);
    push();
    fill(0);
    textAlign(CENTER);
    textStyle(BOLD);
    text(this.h2, this.posX, this.posY - Y(5));
    pop();
  }
   datoOculto( posX_ , posY_ , h2_ , h3_ , txt_ ) {
      this.posX = posX_;
      this.posY = posY_;
      this.h2 = h2_;
      this.h3 = h3_;
      this.p = txt_;

      push();

      textSize(16);
      fill(255);
      textAlign(CENTER);

      push();
      textFont(tipografia);
      text(this.h2, this.posX- transicionx,  this.posY - transicion);//alimento
      pop();

      push();
      if(this.posX < 700 ){
        fill(221, 100, 84);//rojo
      } else if(this.posX > X(700) && this.posX < X(1650)){
        fill(226, 214, 104);//amarillo
      } else{
        fill(95, 216, 165);//verde
      }
      textStyle(BOLD);
      text(this.h3, this.posX- transicionx,  this.posY + Y(55)- transicion);//cantidad de patrículas
      pop();

      textSize(12);
      text(this.p, this.posX- transicionx,  this.posY + Y(100)- transicion);//unidad de medida
      pop();
    }

    Alimento (x_,y_,tX_,tY_, img_){

      this.x = x_;
      this.y = y_;
      this.tX = tX_;
      this.tY = tY_;
      this.img = img_;

      image( this.img , this.x , this.y , this.tX , this.tY );
      //push();
      //-----------------------HOVER ALIMENTOS----------------------------
      if(mouseX > this.x - this.tX/2 && mouseX < this.x + this.tX/2 && mouseY > this.y - this.tY / 2 && mouseY < this.y + this.y - this.tY / 2){
        //push();
        translate(-100,-20);
        scale(1.1);
        //pop();
      }
      //pop();
    }
}

//---------------------------------------------------------------------
//---------------------POPUP PARA COMPARAR PESOS-----------------------
//---------------------------------------------------------------------
class Popup {
  constructor(){
    this.px = X(260);
    this.py = Y(90);
    this.cerrar = loadImage("assets/btn/Cerrar.png");
    this.bdef = loadImage("assets/bioacumulacion/b0.png");
    this.mp = loadImage("assets/bioacumulacion/mp-montaña.png");
    this.pesos = ["45 Ton","590 Ton","30.000 Ton"];

  }
   dibujar(){
     fill(121, 214, 244);
     noStroke();
     //push();
     rectMode(CORNER);
     rect(this.px, this.py, X(1400), Y(900), 25); //contenedor
     //pop();

     image(this.cerrar, X(1600) , Y(140), 20, 20);
     fill(5,49,64);

     push();
     textAlign(CENTER);
     textFont(tipografia);
     textSize(28);
     text("¿Te animás a nivelar la balanza?", displayWidth / 2 , Y(160));
     pop();
     textSize(14);
     text("Se liberan anualmente 1.500.000 \nTONELADAS de micrplásticos", X(300) , Y(240));
     image(this.mp, X(480), Y(400), X(350), Y(216)); //img pila de microplástico

     //animación de la BALANZA
     if(agarre == 90){
       image(balanza[1], X(1100), Y(420), X(600), Y(166));
       txt_vehiculos("34 mil camiones", "45 Toneladas","", X(300),Y(800));
       //stroke(255,0,0);
     } else if(agarre == 100){
       image(balanza[2], X(1100), Y(420), X(600), Y(166));
       txt_vehiculos("2.542 Aviones", "590 Toneladas","73 m de largo", X(300),Y(800));
     } else if(agarre == 110){
       image(balanza[3], X(1100), Y(420), X(600), Y(166));
       txt_vehiculos("50 trenes", "30.000 Toneladas","250 vagones", X(300),Y(800));
     } else {
       image(this.bdef, X(1100), Y(420), X(600), Y(166));
     }

     text("¿Cuántos de cada uno harán falta \npara igualar ese peso?", X(300) , Y(700));

     //-------------------------------BOTONES-----------------------------------
     btn_vehiculos(X(630), Y(700), 150, vehiculos[0], X(730), Y(820), X(70), Y(35));//camión
     btn_vehiculos(X(930), Y(700), 150, vehiculos[1], X(1030), Y(830), X(100), Y(41));//avión
     btn_vehiculos(X(1230), Y(700), 150, vehiculos[2], X(1330), Y(825), X(108), Y(26));//tren

     if (agarre > 0) {
       this.agarrar = true;
     }
      if (agarre == 80 ) {
        estado = "paso01";
        agarre = 0;
      }
     //---------------------------------FOCUS----------------------------------
      if(agarre == 90){
        strokeWeight(3);
        stroke(221, 100, 84);
        noFill();
        rect(X(630), Y(700), X(200), Y(250), 10);
      }
      if(agarre == 100){
        strokeWeight(3);
        stroke(221, 100, 84);
        noFill();
        rect(X(930), Y(700), X(200), Y(250), 10);
      }
      if(agarre == 110){
        strokeWeight(3);
        stroke(221, 100, 84);
        noFill();
        rect(X(1230), Y(700), X(200), Y(250), 10);
      }

   }

 }

class Planisferio {
  constructor() {
    this.planisferio = loadImage("assets/islas/planisferio.png");
    this.tortuga = loadImage("assets/aqua/tortuguitaHablando.png");
    this.isla = loadImage("assets/islas/isla.png");
    this.ubi = loadImage("assets/islas/ubicación.png");
    this.c = loadImage("assets/otros/corriente.png");//flechas corrientes
    this.reloj = loadImage("assets/islas/relojito.png");
    this.peso = loadImage("assets/islas/peso.png");
     this.btnSalir = loadImage("assets/btn/btnSalir.png");

    //-------------------------BOTONES----------------------------------
    this.btn_isla = loadImage("assets/islas/isla-planisferio.png");

    this.px = X(200);
    this.py = Y(800);
    this.nombre = [
      "Isla del Atlantico Norte",
      "Isla del Atlantico Sur",
      "Isla del Indico ",
      "Isla del Pacífico Sur",
      "Isla del Pacífico Norte",
    ];
    
    //-------------------------CORRIENTES------------------------------
    this.corrientes = ["Corriente del \nNorte de Brasil",
    "Corriente \nde Benguela",
    "Corriente de Kuroshio \n(Kuro-Shivo)",
    "Corriente de California",
    "Corriente Humboldt \n(corriente de Perú)",
    "Corriente Ecuatorial \ndel Sur",
    "Corriente del Caribe",
    "corriente de las \nIslas Canarias",
    "Corriente de Angulhas",
    "Corriente Australiana \ndel Oeste."];
    
    this.xMapa = X(980);
    this.yMapa = Y(450);
    this.tamX = X(1544);
    this.tamY = Y(894);
    this.xTortu = X(150);
    this.yTortu = Y(670);
    this.caracteristicas = false;
    
    this.rotacion = 20;
    
  }
  Dibujar() {

    imageMode(CENTER);

    image(this.planisferio, this.xMapa, this.yMapa - transicion, this.tamX, this.tamY);

    if (this.caracteristicas == false) {
      
      //-------------------ISLA PACÍFICO SUR--------------------------
      this.botonesIslas(this.btn_isla,X(400), Y(700),60,75, "ISLA \n PACÍFICO SUR");
      //----------------ISLA ATLÁNTICO NORTE--------------------------
      this.botonesIslas(this.btn_isla,X(750), Y(420),60,75, "ISLA \n ATLÁNTICO NORTE");
      //----------------ISLA ATLÁNTICO SUR----------------------------
      this.botonesIslas(this.btn_isla,X(880), Y(680),60,75, "ISLA \n ATLÁNTICO SUR");
      //--------------------ISLA ÍNDICO------------------------------
      this.botonesIslas(this.btn_isla,X(1300), Y(700),60,75, "ISLA \n ÍNDICO");
      //----------------ISLA PACÍFICO NORTE--------------------------
      this.botonesIslas(this.btn_isla,X(1680), Y(420),60,75, "ISLA \n PACÍFICO NORTE");

      image(this.tortuga, this.xTortu, this.yTortu - transicion, X(250), Y(214));
      fill(255);
      textSize(14);
      Dialogo(
        "Cada isla es única,\n¿Me acompañas \na recorrerlas?",
        X(300),
        Y(500),
        X(250),
        Y(190),
        X(225),
        Y(470)
      );
    }
    this.botones();
  }

  botones() {
    if (this.caracteristicas == true) {
      //------------------------CONTENEDOR----------------------------
      push();
      fill(255);
      noStroke();
      rectMode(CENTER);
      rect(displayWidth / 2, this.py + Y(200), X(1503), Y(250), 20, 20, 0);
      pop();

      push();
      textFont(tipografia);
      textSize(18);
      textAlign(LEFT);
      fill(0);
      text("¿A DÓNDE VAMOS?", X(320), this.py + 80);
      pop();
      //-----------------BOTONES MENÚ DESPLEGABLE----------------------
      for (let i = 0; i < 5; i++) {
        //--------------------------ICONOS-------------------------------
        image(menuIslas[i], 320 + i * +210, this.py + Y(180), X(68), Y(62));

        //---------------------------TEXTO--------------------------------
        push();
        textStyle(BOLD);
        textSize(14);
        textAlign(CENTER);
        fill(0);
        text(this.nombre[i], 320 + i * +210, this.py + 150);
        pop();
      }
   image(this.btnSalir,X(150),Y(100),X(140),Y(62));
    }
  }

//--------------------ISLAS------------------------
 Zoom(mousePressed) {
    var escala = 1;
    if (agarre > 0 && agarre < 6) {
      this.agarrar = true;
      this.caracteristicas = true;

      this.tamX++;
      this.tamY++;
    }

    if (agarre == 1) {
      this.xMapa++;//terminar-----------------------
      this.yMapa--;
      if (this.tamX >= X(1544) * 1.2 && this.tamY >= Y(894) * 1.2) {
        this.xMapa = X(980) + 1200;
        this.yMapa = Y(450) - 250;
        this.tamX = X(1544) * 2.9;
        this.tamY = Y(894) * 2.9;
        this.Islas(
          "ISLA DEL PACIFICO SUR",
          X(500),
          Y(550),
          X(270),
          Y(270),
          "2.6 Km2",
          "Descubierta en 2011",
          this.corrientes[4],
          this.corrientes[5]
        );
      }
    }
    if (agarre == 2) {
      this.xMapa+= 0.2;// corregido!
     // this.yMapa++;
      if (this.tamX >= X(1544) * 1.8 && this.tamY >= Y(894) * 1.8) {
        this.xMapa = X(980) + 1300;
        this.yMapa = Y(450) + 100;
        this.tamX = X(1544) * 8;
        this.tamY = Y(894) * 8;
        this.Islas(
          "ISLA DEL ATLANTICO NORTE",
          X(750),
          Y(500),
          X(270),
          Y(270),
          "Aun se desconoce \n su tamaño",
          "Descubierta en 2009",
          this.corrientes[7],
          this.corrientes[6]
        );
      }
    }

    if (agarre == 3) {
       this.xMapa += 0.3;
      this.yMapa--;
      if (this.tamX >= X(1544) * 1.1 && this.tamY >= Y(894) * 1.1) {
        this.xMapa = X(980) + 480;
        this.yMapa = Y(450) - 600;
        this.tamX = X(1544) * 7;//zoom corregido
        this.tamY = Y(894) * 7;
        this.Islas(
          "ISLA DEL ATLANTICO SUR",
          X(750),
          Y(500),
          X(150),
          Y(150),
          "0,7 km2",
          "Descubierta en 2017",
          this.corrientes[0],
          this.corrientes[1]
        );
      }
    }

    if (agarre == 4) {//corregida
      this.xMapa-=0.3;
      this.yMapa-=0.1;
      if (this.tamX >= X(1544) * 3 && this.tamY >= Y(894) * 3) {
        this.xMapa = X(980) - 750;
        this.yMapa = Y(450) - 370;
        this.tamX = X(1544) * 4;
        this.tamY = Y(894) * 4;
        this.Islas(
          "ISLA DEL INDICO",
          X(1100),
          Y(500),
          X(280),
          Y(280),
          "ENTRE \n 2 .1 y 5 km2",
          "Descubierta en 2019",
          this.corrientes[8],
          this.corrientes[9]
        );
      }
    }
    if (agarre == 5) {
      this.xMapa-=2;
      //this.yMapa--;
      if (this.tamX >= X(1544) * 1.1 && this.tamY >= Y(894) * 1.1) {
        this.xMapa = X(980) - 800;
        this.yMapa = Y(450) - 20;
        this.tamX = X(1544) * 1.3;
        this.tamY = Y(894) * 1.3;
        this.Islas(
          "ISLA DEL PACIFICO NORTE",
          X(1100),
          Y(400),
          X(400),
          Y(450),
          "1.6 millones de km2",
          "Tiene mas de 60 años",
          this.corrientes[2],
          this.corrientes[3]
        );
        push();
        fill(0);
        image(this.peso,1090,195,20,20)
        text("pesa 80 toneladas", 1110,200);
        pop();
      }
    }
    //BOTON SALIR
    if(agarre == 6){
      this.caracteristicas = false;
       this.xMapa = X(980);
        this.yMapa = Y(450);
       this.tamX = X(1544);
        this.tamY = Y(894);
    }
  }
    //-------------------islas en el planisferio-------------------------------
  botonesIslas(img_,pxi_,pyi_,tami_,tamElipse_, txt_){
    this.img = img_;
    this.pxi = pxi_;
    this.pyi = pyi_;
    this.tami = tami_;
    this.tamElipse = tamElipse_;
    this.txt = txt_;

    image(this.img, this.pxi,this.pyi,this.tami,this.tami);
    push()
    ellipseMode(CENTER);
    //------------------------------hover del boton--------------------------
    if(mouseX > this.pxi - this.tamElipse / 2 && mouseX < this.pxi + this.tamElipse / 2 && mouseY > this.pyi - this.tamElipse / 2 && mouseY < this.pyi + this.tamElipse / 2){
      stroke(5,49,64);
    }else {
      stroke(95,216,165);
    }

    strokeWeight(3);
    noFill();
    ellipse(this.pxi, this.pyi, this.tamElipse,this.tamElipse);
    pop()
    push();
    textFont(tipografia);
    fill(5, 49, 64);
    textAlign(CENTER);
    text(this.txt, this.pxi, this.pyi + 55);
    textSize(16);
    pop();
  }

  //-------------CARACTERISTICAS-----------------

 Islas(nombre_, islax_, islay_, tamx_, tamy_, textTam_, descubrimiento_, aguacalida_,aguafria_) {
    this.nombree = nombre_;
    this.islax = islax_;
    this.islay = islay_;
    this.tamx = tamx_;
    this.tamy = tamy_;
    this.textTam = textTam_;
    this.descubrimiento = descubrimiento_;
    this.aguacalida = aguacalida_;
    this.aguafria = aguafria_;

    push();
    translate(this.islax, this.islay);
    imageMode(CENTER);
    rotate(this.rotacion);
    image(this.c, X(0), Y(0),this.tamy + X(80), this.tamy + Y(80));
    pop();
    this.rotacion += radians(25);

    push();
    imageMode(CENTER);
    image(this.isla, this.islax, this.islay, this.tamx, this.tamy); //LA ISLA
    image(this.ubi, this.islax, this.islay - this.tamy+this.tamy/3, 25, 40); //ICONO UBICACION

    textFont(tipografia);
    textSize(30);
    fill(0);
    text(this.nombree, 70, 140); //NOMBRE DE LA ISLA

    textAlign(CENTER);
    textSize(20);
    text(this.textTam, this.islax, this.islay + this.tamx / 2); //TAMAÑO DE LA ISLA
    pop();

    image(this.reloj, this.islax + this.tamx - 20, this.islay - 100, 20, 20); //ICONO RELOJ
    fill(0);
    text(this.descubrimiento,this.islax + this.tamx,this.islay - 95); //DESCUBRIMIENTO

    //REFERENCIAS AGUAS CALIDAS- AGUAS FRIAS
    fill(221, 100, 84);
    noStroke();
    rect(this.islax + this.tamx - 20, this.islay, 10, 10);
    fill(176, 230, 248);
    rect(this.islax + this.tamx - 20, this.islay + 40, 10, 10);
    fill(255);
    text(this.aguacalida, this.islax + this.tamx, this.islay + 10);
    text(this.aguafria, this.islax + this.tamx, this.islay + 50);
    //
  }
}

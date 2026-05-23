let figuras = [];


function setup() {
  createCanvas(740, 900);

  
  // Centra los rectángulos
  
  rectMode(CENTER);

  // Crea las figuras

  crearFiguras();

}

function draw() {
  background(235);

  
  // Dibuja líneas negras

  dibujarLineas();

  // Dibuja figuras interactivas

  dibujarFiguras();

}


// Figuras: cada figura tiene: x, y, tamaño, color, forma


function crearFiguras() {

  figuras = [


    // 1

    [340,180,28,"celeste","cuadrado"],
    [402,195,42,"beige","cuadrado"],
    [340,280,52,"naranja","cuadrado"],
    [400,285,32,"gris","cuadrado"],
    [460,300,52,"azul","cuadrado"],

    // 2

    [275,350,54,"mostaza","cuadrado"],
    [340,355,26,"azul","cuadrado"],
    [410,360,56,"celeste","cuadrado"],
    [490,360,40,"beige","cuadrado"],

    // 3

    [330,430,78,"gris","cuadrado"],
    [275,420,28,"naranja","cuadrado"],
    [400,420,30,"azul","cuadrado"],
    [460,420,42,"mostaza","cuadrado"],

    // 4

    [260,485,54,"celeste","cuadrado"],
    [330,520,48,"gris","cuadrado"],
    [388,485,48,"naranja","cuadrado"],
    [465,490,60,"gris","cuadrado"],

    // 5

    [405,560,90,"mostaza","cuadrado"],
    [500,555,56,"celeste","cuadrado"],
    [285,555,28,"azul","cuadrado"],

    // 6

    [275,620,40,"naranja","cuadrado"],
    [340,620,42,"gris","cuadrado"],
    [460,610,42,"naranja","cuadrado"],

    // 7

    [340,700,32,"celeste","cuadrado"],
    [400,670,52,"azul","cuadrado"],
    [400,740,24,"azul","cuadrado"]

  ];

}


// Lineas y detalles

function dibujarLineas() {

  // Grosor de la línea

  stroke(0);

  strokeWeight(4);

  // Lineas verticales

  line(280, 220, 280, 690);

  line(340, 120, 340, 790);

  line(400, 105, 400, 820);

  line(460, 190, 460, 700);

  
  // Lineas horizontales

  line(210, 360, 530, 360);

  line(180, 485, 550, 485);

  line(200, 555, 500, 555);

  line(230, 615, 500, 615);

  
  // Circulitos

  noStroke();

  fill(20, 40, 50);

  ellipse(180, 485, 20);
  ellipse(400, 105, 20);

  fill(90, 110, 130);

  ellipse(550, 485, 20);
  ellipse(340, 790, 18);


}


// Dibuja tooodas las figuras

function dibujarFiguras() {

  // Recorre todas las figuras

  for (let i = 0; i < figuras.length; i++) {

    // Datos

    let x = figuras[i][0];

    let y = figuras[i][1];

    let t = figuras[i][2];

    let c = figuras[i][3];

    let tipo = figuras[i][4];

    

    // Distancia del mouse

    let d = dist(mouseX, mouseY, x, y);

    
    // Tamaño interactivo

    let tamañoReactivo = map(d, 0, 300, t * 1.4, t);

    // Limitacion

    tamañoReactivo = constrain(tamañoReactivo, t, t * 1.4);

    // Vibracion (para darle mas vida)

    tamañoReactivo += random(-1, 1);


    
    // Cambio de colores

    let nuevoColor;

    // cambia el color dependiendo del color original

    if (c == "gris") {

      nuevoColor = color(0,70,120);

    }

    else if (c == "naranja") {

      nuevoColor = color(20,180,190);

    }

    else if (c == "mostaza") {

      nuevoColor = color(220,210,195);

    }

    else if (c == "beige") {

      nuevoColor = color(235,135,45);

    }

    else if (c == "celeste") {

      nuevoColor = color(160, 165, 150);

    }

    else if (c == "azul") {

      nuevoColor = color(205, 155, 80);

    }

    else {

      nuevoColor = colorBase(c);

    }


    
    // Mezcla de los colores

    let mezcla = map(d, 0, 200, 1, 0);

    mezcla = constrain(mezcla, 0, 1);

    // Se va de un color a otro

    let colorFinal = lerpColor(colorBase(c), nuevoColor, mezcla);

    // Aplica el color

    fill(colorFinal);

    noStroke();


    
    // Interacciones

    // si el mouse se acerca

    if (d < 120) {

      push();

      // Mueve el punto de origen

      translate(x, y);


      // Cuadrados → Círculitos

      if (tipo == "cuadrado") {

        ellipse(0, 0, tamañoReactivo);

      }

      pop();

    }

    // A su forma normal

    else {

      if (tipo == "cuadrado") {

        rect(x, y, tamañoReactivo, tamañoReactivo);

      }

    }

  }

}


// Coloress

function colorBase(nombre) {

  // Azulito

  if (nombre == "azul") {

    return color(0, 70, 120);

  }

  // Celeste

  if (nombre == "celeste") {

    return color(20, 180, 190);

  }

  // Naranja

  if (nombre == "naranja") {

    return color(235, 135, 45);

  }

  // Beige

  if (nombre == "beige") {

    return color(220, 210, 195);

  }

  // Gris

  if (nombre == "gris") {

    return color(160, 165, 150);

  }

  // Mostaza

  if (nombre == "mostaza") {

    return color(205, 155, 80);

  }

}
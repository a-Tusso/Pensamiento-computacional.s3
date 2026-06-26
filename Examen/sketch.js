let figuras = [];  // Figuras
let puntaje = 0;  // Puntaje
let vidas = 5;  // Vida
let estadoJuego = "Inicio";  // Estado actual

let sonidoExplosion;  // Sonido de burbuja explotando
let sonidoClick;  // Sonido de click

const Datos_solemne2 = [  // Datos constantes de la solemne 2 (figuras, posiciones, colores, etc)
  
  [340,180,28,"celeste","cuadrado"],
  [402,195,42,"beige","cuadrado"],
  [340,280,52,"naranja","cuadrado"],
  [400,285,32,"gris","cuadrado"],
  [460,300,52,"azul","cuadrado"],

  [275,350,54,"mostaza","cuadrado"],
  [340,355,26,"azul","cuadrado"],
  [410,360,56,"celeste","cuadrado"],
  [490,360,40,"beige","cuadrado"],

  [330,430,78,"gris","cuadrado"],
  [275,420,28,"naranja","cuadrado"],
  [400,420,30,"azul","cuadrado"],
  [460,420,42,"mostaza","cuadrado"],

  [260,485,54,"celeste","cuadrado"],
  [330,520,48,"gris","cuadrado"],
  [388,485,48,"naranja","cuadrado"],
  [465,490,60,"gris","cuadrado"],

  [405,560,90,"mostaza","cuadrado"],
  [500,555,56,"celeste","cuadrado"],
  [285,555,28,"azul","cuadrado"],

  [275,620,40,"naranja","cuadrado"],
  [340,620,42,"gris","cuadrado"],
  [460,610,42,"naranja","cuadrado"],

  [340,700,32,"celeste","cuadrado"],
  [400,670,52,"azul","cuadrado"],
  [400,740,24,"azul","cuadrado"]
];

// Se añaden los sonidos
function preload() {
  soundFormats("mp3");
  sonidoExplosion = loadSound("Burbuja_explotando.mp3");
  sonidoClick = loadSound("Click.mp3");
}

// El fondo y centra las figuras
function setup() {
  createCanvas(740, 900);
  rectMode(CENTER);
  ellipseMode(CENTER);

  crearFiguras();  // Crea las figurass
  reiniciarJuego();  // Reinicia todo (se vuelve al estado inicial)
}

function draw() {
  background(235);

  if (estadoJuego == "Inicio") {

    pantallaInicio();  // Menu inicial

  } else if (estadoJuego == "Jugando") {

    dibujarLineas();  // Las lineas fijas aparecen
    dibujarFiguras();  // Dibuja y va cambiando las figuras
    mostrarInterfaz();  // Aqui va el puntaje y las vidas

    if (vidas <= 0) {  // Si te quedas sin vidas
      estadoJuego = "Gameover";  // Pierdes
    }

  } else if (estadoJuego == "Gameover") {

    pantallaGameOver();  // Aparece cuando se pierde

  }
}

function crearFiguras() {

  figuras = [];  // Reinicia el arreglo

  for (let d of Datos_solemne2) {  // Recorre las figuras 

    figuras.push({  // Crea y agrega cada figura al arreglo
      
      x: d[0],  // Posicion x
      y: d[1],  // Posicion Y
      tamInicial: d[2],  // Tamaño inicial
      tamActual: d[2],  // Tamaño actual
      colorNombre: d[3],  // Color de la forma
      forma: d[4],  // Tipo de forma
      velocidadCrecimiento: random(0.1, 0.3),  // Velocidad aleatoria
      tamMaximo: d[2] * 3.5,  // Tamaño maximo antes de explotar
      activa: true,  // Indica si la figura esta activa
      tiempoReaparicion: 0  // Tiempo para reaparecer
    });

  }
}

function reiniciarJuego() {

  puntaje = 0;  // Se vuelve al 0
  vidas = 5;  // Se vuelve a las 5 vidas

  crearFiguras();  // Se vuelve a crear todo el diseño
}

function activarCooldown(indice) {

  figuras[indice].activa = false;  // Desactiva la figura seleccionada
  figuras[indice].tiempoReaparicion = millis() + 5000;  // Define q reaparezca en 5seg

}

function dibujarFiguras() {

  let tiempoActual = millis();  // Guarda el tiempo del juego

  for (let i = 0; i < figuras.length; i++) {  // Recorre las figuras del arreglo

    let f = figuras[i]; // Toma solo 1 figura

    if (!f.activa) {  // Si esta inactiva la activa

      if (tiempoActual >= f.tiempoReaparicion) {  // Se revisa si paso el tiempo para activarla

        f.tamActual = f.tamInicial;  // Se vuelve a su tamaño
        f.velocidadCrecimiento = random(0.1, 0.3);  // Su velocidad de crecimiento es aleatoria
        f.activa = true;  // Reactiva la figura

      }

      continue;  // Se salta a la siguiente figura
    }

    f.tamActual += f.velocidadCrecimiento;  // Aumenta el tamaño de la figura con el tiempo

    if (f.tamActual >= f.tamMaximo) {  // Si se pasa el tamaño maximo

      vidas--;  // Pierde una vida

      if (sonidoExplosion && sonidoExplosion.isLoaded()) {  // Aqui suena la explosion
        sonidoExplosion.play();
      }

      activarCooldown(i);  // Aqui se desactiva la figura por los 5seg
      continue;  // Volvemos a pasar a la siguiente figura
    }

let tamVisual = f.tamActual;  // Tamaño base

if (f.tamActual > f.tamMaximo * 0.8) {  // Si la burbuja va a explotar agrega vibracion
  tamVisual += random(-2, 2); // Vibracion
}

let mezcla = map(  // Convierte el crecimiento en valores de 0 (recien creada) y 1 (va a explotar) para q se cambie el color
  f.tamActual,
  f.tamInicial,
  f.tamMaximo,
  0,
  1
);

mezcla = constrain(mezcla, 0, 1);  // Limita el rango 

let colorFinal = lerpColor(  // Mezcla de colores
  colorBase(f.colorNombre),
  color2(f.colorNombre),
  mezcla
);

fill(colorFinal);  // Aplicamos el color
noStroke();  // y el sin borde

ellipse(f.x, f.y, tamVisual, tamVisual);  // Dibuja la figura en el tamaño final
  }
}

function mousePressed() {

  if (estadoJuego == "Inicio") {  // Si se esta en el inicio

    if (  // Esto revisa si se aprieta el boton de jugar
      mouseX > width/2 - 100 &&
      mouseX < width/2 + 100 &&
      mouseY > height/2 &&
      mouseY < height/2 + 50
    ) {

      estadoJuego = "Jugando";  // Cambia el estado a jugar

    }

  } else if (estadoJuego == "Gameover") {  // Si se perdio

    reiniciarJuego();  // Se reinicia el juego (vida, puntaje y burbujas)
    estadoJuego = "Jugando";  // Vuelve a jugars

  } else if (estadoJuego == "Jugando") {  // Pero si se esta jugando

    for (let i = 0; i < figuras.length; i++) {  // Se recorren las figuras

      let f = figuras[i];  // Se toma una figura

      if (f.activa) {  // Si esta activa

        let d = dist(mouseX, mouseY, f.x, f.y);  // Se calcula la distancia entre el mouse

        if (d < f.tamActual / 2) {  // y si esta adentro

          let puntos = floor(  // Se calculas puntos segun el tamaño de la burbuja
            map(
              f.tamActual,
              f.tamInicial,
              f.tamMaximo,
              10,
              50
            )
          );

          puntaje += puntos;  // Y se suman puntos

          if (sonidoClick && sonidoClick.isLoaded()) {  // Suena si se toca la burbuja
            sonidoClick.play();
          }

          activarCooldown(i);  // Se desactiva la burbuja por 5seg
          break;  // Esto sirve para terminar el bucle de for aunq no se hayan revisado todas las formas
        }
      }
    }
  }
}

function pantallaInicio() {  // La pantalla de inicio

  dibujarLineas();  // Las lineas fijas de atras (como fondo)

  fill(0, 180);
  rect(width/2, height/2, 500, 260);

  fill(255);
  textAlign(CENTER, CENTER);

  textSize(32);
  text("Bubble Pop", width/2, height/2 - 50);  // Titulo del juego

  textSize(16);
  fill(210);
  text("Revienta los círculos antes de que exploten.\nAl tocarlas, tardarán 5 segundos en reaparecer.", width / 2, height / 2 - 5);  // Instrucciones
  
  fill(235,135,45);
  rect(width/2, height/2 + 70, 200, 50);

  fill(255);
  text("JUGAR", width/2, height/2 + 70);  // Boton para jugars
}

function pantallaGameOver() {  // Pantalla al perder

  background(20, 180);

  fill(255);
  textAlign(CENTER, CENTER);

  textSize(50);
  text("GAME OVER", width/2, height/2 - 50);

  textSize(28);
  text("Puntaje: " + puntaje, width/2, height/2 + 10);

  textSize(18);
  text("Reiniciar juego", width/2, height/2 + 60);
}

function mostrarInterfaz() {  // La linea de arriba

  fill(0,150);
  rect(width/2,40,width,80);

  fill(255);

  textAlign(LEFT,CENTER);
  textSize(22);
  text("Puntaje: " + puntaje, 40, 40);

  textAlign(RIGHT,CENTER);
  text("Vidas: " + vidas, width - 40, 40);
}

function dibujarLineas() {  // Lineas (y circulitos) fijas de fondo

  stroke(0);
  strokeWeight(4);

  line(280,220,280,690);
  line(340,120,340,790);
  line(400,105,400,820);
  line(460,190,460,700);

  line(210,360,530,360);
  line(180,485,550,485);
  line(200,555,500,555);
  line(230,615,500,615);

  noStroke();

  fill(20,40,50);
  ellipse(180,485,20);
  ellipse(400,105,20);

  fill(90,110,130);
  ellipse(550,485,20);
  ellipse(340,790,18);
}

function colorBase(nombre) {  // Colores base

  if (nombre == "azul") return color(0,70,120);
  if (nombre == "celeste") return color(20,180,190);
  if (nombre == "naranja") return color(235,135,45);
  if (nombre == "beige") return color(220,210,195);
  if (nombre == "gris") return color(160,165,150);
  if (nombre == "mostaza") return color(205,155,80);

  return color(0);  // El return color sirve para que los colores no se comporten raro si es que hay un error o color que no existe
}

function color2(nombre) {  // Color final (cuando este a punto de explotar)

  if (nombre == "gris") return color(0,70,120);
  if (nombre == "naranja") return color(20,180,190);
  if (nombre == "mostaza") return color(220,210,195);
  if (nombre == "beige") return color(235,135,45);
  if (nombre == "celeste") return color(160,165,150);
  if (nombre == "azul") return color(205,155,80);

  return color(255);
}

function setup() {
  createCanvas(600, 600);
}

function draw() {
  
  background(201, 201, 201); // Fondito
  
  
  noStroke(); // Sin lineas
  
  // Definición de colores
  
  let rojo = color (191, 12, 12);
  let verde = color (35, 100, 35)
  let amarillo = color (250, 196, 0)
  let azul = color (24, 100, 172)
  
  // Lineas blancas de fondo
  
  fill(255);
  quad(260, 0, 340, 0, 340, 600, 260, 600) // Linea vertical
  quad(130, 260, 600, 260, 600, 340, 130, 340) // Linea horizontal
  
  quad(0, 250, 0, 170, 130, 260, 130, 340) // Linea chueca
  
  
  // Lado izquierdo arriba
  
  fill(verde);
  quad(50, 8, 170, 8, 170, 135, 50, 135) // Cuadrado Verde
  
  fill(amarillo)
  quad(170, 135, 230, 135, 230, 245, 170, 245) // Rectangulo amarillo
  
  
  fill(255);
  quad(170, 8, 230, 8, 230, 12, 170, 12) // Linea chica horizontal
  quad(208, 8, 205, 8, 205, 135, 208, 135) // Linea chica vertical
  
  // Lado izquierdo abajo
  
  fill(azul)
  quad(145, 340, 260, 340, 260, 600, 145, 600) // Rectangulo azul
  
  fill(rojo)
  ellipse(100, 524, 90, 90) // Circulo chico rojo
  
  fill(255)
  ellipse(190, 524, 90, 90) // Circulo blanco izq.
  
  // Lado derecho arriba
  
  fill(rojo)
  ellipse(470, 160, 130, 130) // Circulo grande rojo
  
  // Lado derecho abajo
  
  fill(0)
  quad(340, 340, 600, 340, 600, 600, 340, 600) // Cuadrado Negro
  
  fill(255)
  quad(370, 440, 480, 440, 480, 550, 370, 550) // Cuadrado blanco
  
  ellipse(540, 524, 90, 90) // Circulo blanco der.
  
  quad(370, 550, 374, 550, 374, 592, 370, 592) // Linea chica vertical
  quad(374, 570, 570, 570, 570, 574, 374, 574) // Linea chica horizontal
  
  // Lineas rojas
  
  fill(rojo)
  quad(0, 474, 0, 470, 600, 166, 600, 170) // Linea grande roja
  quad(260, 342, 264, 339, 600, 446, 600, 450) // Linea chica roja

  
  
}
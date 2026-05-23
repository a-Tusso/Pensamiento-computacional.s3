# **Solemne II**

"AREA"
Autor: Thedor

## **Descripción objetiva**
Este proyecto es una composición visual interactiva creada con p5.js inspirada en el diseño Bauhaus y el arte geométrico abstracto.
La obra utiliza figuras geométricas simples como cuadrados, círculos y líneas para construir una composición ordenada y modular. La diferencia es que esta composición no es estática, sino que reacciona constantemente al movimiento del mouse.

#### **¿Qué se ve en pantalla?**
Líneas negras
Cuadrados de distintos tamaños
Pequeños círculos

**Colores**
Azul
Celeste
Naranja
Beige
Gris
Mostaza

**Inputs**
MouseX
MouseY

**Outputs**
Cambio de figuras
Cambio de color,
Vibración,
Transformación de cuadrados en círculos


## **Descripción conceptual**
La idea del proyecto es crear una composición inspirada en la Bauhaus, usando figuras simples y colores planos.

**Referentes visuales, teóricos e históricos**

**Bauhaus: Principal referente visual del proyecto.**
Escuela de diseño fundada en Alemania en 1919.
Su estilo se caracteriza por geometría simple, funcionalidad, minimalismo y uso de colores básicos.

**Obra elegida de la Bauhaus**
“Area v2” de Theodor

Influyó en:
- El uso de líneas,
- Distribución modular,
- Y equilibrio visual del proyecto.

La obra llamó la atención por el uso de cuadrados y círculos, la estructura geométrica y la organización visual simple pero equilibrada.


## **Proceso**
Primero que todo busque alguna obra de la Bauhaus porque siento que es lo más fácil de trabajar al ser figuras geométricas, al verla me gusto mucho, se llama “Area v2” por Thedor, tiene tanto cuadrados como círculos y líneas.

Segundo fue pensar cómo podía volverlo interactivo y a la vez cumplir con el requisito mínimo para la entrega, recorde lo de la interaccion con el mouse (que se me hizo interesante aplicarlo), el cambio de color y el tamaño.

Tercero, tuve que volver a investigar los códigos y ponerlos en practica, también hice los ejercicios que dio e intente cosas que son muy simples (con códigos que están desordenados).

Cuarto, ya teniendo la práctica empecé a buscar como hacer distintos tipos de function y estos tengo:

## **Funciones del proyecto**
#### **crearFiguras()**
Hice esta función para organizar mejor el código y poder crear todas las figuras automáticamente usando un for.

Cada figura tiene:
- posición (x, y)
- tamaño
- color
- forma

#### **dibujarLineas()**
Esta función dibuja los elementos fijos del proyecto:

líneas verticales
líneas horizontales
círculos decorativos

#### **dibujarFiguras()**
Esta función dibuja todas las figuras usando un bucle.
Cada figura reacciona al mouse dependiendo de qué tan cerca esté el cursor.

- Tamaño
- Color
- Forma

Cuando el mouse se acerca, las figuras se transforman.

#### colorBase()
Esta función define los colores principales del proyecto.
Se usa para mantener una paleta ordenada y consistente, basada en colores planos inspirados en la Bauhaus.

## **Interacciones**
#### **Distancia entre mouse y figura**
Este código controla toda la interacción, mientras más cerca está el mouse, más cambia la figura.
Código
let d = dist(mouseX, mouseY, x, y);

mouseX y mouseY → posición del mouse
x e y → posición de la figura
d → distancia entre ambos

#### **Cambio de tamaño**
Convierte la distancia del mouse en tamaño.
Código
let tamanoReactivo = map(
  d,
  0,
  300,
  t * 1.4,
  t

mouse cerca → figura grande
mouse lejos → tamaño normal

#### **Límite del tamaño**
Evita que las figuras crezcan demasiado o se hagan demasiado pequeñas
Código
tamañoReactivo = constrain(
tamañoReactivo,
 t,
t * 1.4

#### **Vibración aleatoria**
Agrega una pequeña variación aleatoria al tamaño.
Código
tamanoReactivo += random(-1, 1);

#### **Cambio de color**
Dependiendo del color original, la figura cambia a otro color cuando el mouse se acerca.
Código
if (c == "gris") {
  nuevoColor = color(0,70,120);

#### **Mezcla de colores**
Hace un cambio suave entre el color original y el nuevo color
Código
let colorFinal = lerpColor(
  colorBase(c),
  nuevoColor,
  mezcla

#### **Cambio de forma**
Cuando el mouse se acerca los cuadrados se transforman en círculos.
Código
if (tipo == "cuadrado") {
ellipse(0, 0, tamañoReactivo);

#### **Activación de interacción**
Activa todas las interacciones de tamaño, color, rotación y cambio de forma cuando el cursor entra en el área cercana a la figura.
Código
if (d < 120)

Para que funcione, el mouse debe estar suficientemente cerca de la forma.


## **Sistema input / output**
#### **Inputs**
posición del mouse (mouseX, mouseY)
El programa calcula la distancia entre el mouse y cada figura.

Según esa distancia:
- Cambia el tamaño
- Cambia el color
- Cambia la forma

#### **Outputs**
- Composición visual dinámica
- Figuras interactivas
- Cambios en tiempo real


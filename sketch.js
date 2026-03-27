//Antonella Tusso 20/03

function setup() {
  createCanvas(400, 600);
}

function draw() {
  background(225);
  
  fill(200, 0, 0);
  ellipse(100, 250, 150, 150);
  ellipse(300, 250, 150, 150);
  
  fill(255)
  ellipse(200, 300, 200, 200);
  
  fill(200, 0, 0);
  ellipse(200, 300, 100, 100);
  
  
 // fill(200, 0, 0);
  //bezier(260, 360, 200, 200, 400, 400, 150, 370)
  
  fill(0);
  triangle(270, 320, 280, 250, 240, 250);
  triangle(130, 320, 120, 250, 160, 250);
  
  triangle(150, 375, 250, 375, 200, 365);

}
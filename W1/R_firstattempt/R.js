function setup() {
  createCanvas (400,400);
 }


function draw() { 
  fill(251,102,71);
  noStroke();
  rect (0,0,400,400);
  stroke(8,88,76);
  strokeWeight(2);
  line (278,200,400,400);
  fill(168,168,168);
  noStroke();
  ellipse (278,mouseY,200,200);
  noStroke();
  fill(8,88,76);
  rect (mouseX,0,278,400);
 }

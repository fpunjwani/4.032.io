function setup() {
  createCanvas(720, 400);
}

function draw() {
  background(102);
  
  push();
  translate(width*0.2, height*0.5);
  rotate(frameCount / second()+(millis()/1000));
  polygon(0, 0, 82, 3); 
  pop();
  
  push();
  translate(width*0.5, height*0.5);
  rotate(frameCount / minute());
  polygon(0, 0, 80, 20); 
  pop();
  
  push();
  translate(width*0.8, height*0.5);
  rotate(frameCount / hour());
  polygon(0, 0, 70, 7); 
  pop();
}

function polygon(x, y, radius, npoints) {
  var angle = TWO_PI / npoints;
  beginShape();
  for (var a = 0; a < TWO_PI; a += angle) {
    var sx = x + cos(a) * radius;
    var sy = y + sin(a) * radius;
    vertex(sx, sy);
  }
  endShape(CLOSE);
}
function setup() {
  createCanvas(500, 500);
  textAlign(CENTER, CENTER);
  textFont('Futura');
}

function draw() {
  translate(width / 2.0, height / 2.0);

  var date = new Date(),
    hours = date.getHours(),
    minutes = date.getMinutes(),
    seconds = date.getSeconds(),
    ms = date.getMilliseconds(),
    i,
    v,
    t;

  background(0);

  fill(0);
  stroke(100);
  strokeWeight(1);
  stroke(250,100,100);
  ellipse(0, 0, 420, 420);
  stroke(100,250,100);
  ellipse(0, 0, 325, 325);
  stroke(100,100,250);
  ellipse(0, 0, 200, 200);
  

  stroke(255, 0, 0);
  strokeWeight(1);
  fill(255,0,0)
  t = (seconds + ms / 1000) * TAU / 60 - HALF_PI;
  v = p5.Vector.fromAngle(t);
  v.mult(210);
  ellipse(v.x, v.y, 30, 30);
  fill(255);
  text(second(),v.x, v.y);

  stroke(0, 255, 0);
  strokeWeight(1);
  fill(0,255,0)
  t = (minutes + seconds / 60 + ms / 1000 / 60) * TAU / 60 - HALF_PI;
  v = p5.Vector.fromAngle(t);
  v.mult(160);
//   line(0,0,v.x, v.y);
  ellipse(v.x, v.y,30,30);
  fill(255);
  text(minute(),v.x, v.y);


  stroke(0, 0, 255);
  strokeWeight(1);
  fill(0,0,255);
  t = (hours + minutes / 60 + seconds / 3600) * TAU / 24 - HALF_PI;
  v = p5.Vector.fromAngle(t);
  v.mult(100);
  ellipse(v.x, v.y,30,30);
  fill(255);
  text(hour(),v.x, v.y);
//   line(0,0,v.x, v.y);

}
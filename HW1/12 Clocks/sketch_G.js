function setup(){
    createCanvas(500,500);
    background(237, 34, 93);
}

function draw() {
    background(237,34,93);
    var h=hour();
    var m=minute();
    var s=second();
    fill(0);
    strokeWeight(0);
    for(var i=0;i<=h;i++){
        rect(i/24*400, 400, 50, 50);
    }
    for(var j=0;j<=m;j++){
        rect(h/24*400, 400-(j/60*400), 50, 50);
    }
    // fill(255);
    // strokeWeight(10);
    // for(var k=0;k<=s;k++){
    //     point(h/24*400, 400-(m/60*400)-k);
    // }
    // rect(30, (h)/24*400, 50, 50);
    // rect(100, (m)/60*400, 50, 50);
    // rect(170, (s)/60*400, 50, 50);
    fill(255);
    text(h+'hr',(i/24*400)-5,460);
    text(m+'m/'+s+'s',(i/24*400)-15, 400-(j/60*400));

}

// function mouseWheel(event) {
//   print(event.delta);
//   //move the square according to the vertical scroll amount
//   pos += event.delta;
//   //uncomment to block page scrolling
//   //return false;
// }


// var x = [],
//   y = [],
//   segNum = second(),
//   segLength = 5;

// for (var i = 0; i < segNum; i++) {
//   x[i] = 0;
//   y[i] = 0;
// }

// function setup() {
//   createCanvas(710, 400);
//   strokeWeight(9);
//   stroke(255, 100);
// }

// function draw() {
//   background(0);
//   dragSegment(0, mouseX, mouseY);
//   for( var i=0; i<x.length-1; i++) {
//     dragSegment(i+1, x[i], y[i]);
//   }
// }

// function dragSegment(i, xin, yin) {
//   var dx = xin - x[i];
//   var dy = yin - y[i];
//   var angle = atan2(dy, dx);
//   x[i] = xin - cos(angle) * segLength;
//   y[i] = yin - sin(angle) * segLength;
//   segment(x[i], y[i], angle);
// }

// function segment(x, y, a) {
//   push();
//   translate(x, y);
//   rotate(a);
//   line(0, 0, segLength, 0);
//   pop();
// }

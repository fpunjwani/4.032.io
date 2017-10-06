function setup() {
  createCanvas(500, 500);
}
function draw() {
    background(0, 0, 0);
    
    center=250,250
    var h = hour()/12*360;
    var s = second()/60*360;
    var m = minute()/60*360; 
    var h_sec = h*60*60;
    var m_sec = m*60;
    noFill();
    strokeWeight(7);
    stroke(255,255,153);
    strokeWeight(7);
    strokeJoin(ROUND);
    var x=radians(s)-radians(90)
    if (second()==0){
        point(250,225);
    } else {
        arc(250,250,50,50,-radians(90),x);
    }
    stroke(255,51,153);
    arc(250,250,70,70,-radians(90),radians(m)-radians(90));
    //hour
    stroke(10,240,50);
    arc(250,250,90,90,-radians(90),radians(h)-radians(90));
    //day
}
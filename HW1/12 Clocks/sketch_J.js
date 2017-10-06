function setup(){
    createCanvas(400,400);

}

function draw(){
    background(139,137,137);
    strokeWeight(1);
    stroke(255);
    line(0, 20, 400, 20);
    line(0, 180, 400, 180);
    line(0, 380, 400, 380);
    var h_y= 20;
    var m_y= 180; 
    var s_y= 380;
    var h_x= hour()/24*400;
    var m_x= minute()/60*400;
    var s_x=second()/60*400;
    strokeWeight(0);
    fill(255,240,245);
    triangle(h_x, h_y, m_x, m_y, s_x, s_y);

    // var t = (second() + millis() / 1000) * TAU / 60 - HALF_PI;
    // var v = p5.Vector.fromAngle(t);
    // v.mult(200);
    // var j = (minute() + second() / 60 + millis() / 1000 / 60) * TAU / 60 - HALF_PI;
    // var k = p5.Vector.fromAngle(j);
    // k.mult(200);;
    // var q = (hour() + minute() / 60 + second() / 3600) * TAU / 24 - HALF_PI;
    // var r = p5.Vector.fromAngle(q);
    // r.mult(200);
    // var x1=v.x;
    // var x2=v.y;
    // var x3=k.x;
    // var y1=k.y;
    // var y2=r.x;
    // var y3=r.y;
    // console.log(v)
    //     console.log(k)
    // //         console.log(r)
    // fill(0,20,250);
    // triangle(x1, y1, x2, y2, x3, y3);
    
    
    
}
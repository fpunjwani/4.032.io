function setup(){
    createCanvas(400,400);
}

function draw(){
    var h=hour()/24*255;
    var m=minute()/60*255;
    var s=second()/60*255;
    c = color(h,m,s);
    h_c = color(h,0,0);
    m_c = color(0,m,0);
    s_c = color(0,0,s);
    background(255);
    fill(c);
    rect(50, 50, 100, 100);
    fill(h_c);
    text('R: '+h,50,170);
    fill(m_c);
    text('G: '+m,49.5,182.5);
    fill(s_c);
    text('B: '+s,50,195);
}
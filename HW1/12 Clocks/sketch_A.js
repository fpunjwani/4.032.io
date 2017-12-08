function setup() {
  createCanvas(720, 400);
  background(220);
  //window.onresize is basically doing a responsive canvas which changes size as the user changes the window size
  window.onresize=function(){
      setSize();
  }
}

function draw() {
    background(220);
    var h = hour();
    var m = minute();  
    var s = second();  
    var h_sec = h*60*60;
    var m_sec = m*60;
    var s_now = (s+h_sec+m_sec)/10;
    var x=2;
    var y=2;
    for (var a=0; a < s_now; a+=1) {
        ellipse(x, y, 1, 1);
        fill(255);
        x=x+5;
        if (x>720) {
            y=y+5;
            x=2;
        }
    }
    textSize(16);
    // text(s_now*10, 0, 320);
    // text("it is:" + hour()+"hrs" + ", " + minute()+"mins, " + "and " + second()+"secs", 0, 335);
}

function setSize(){
    canvas.size(window.innerWidth, window.innerHeight);
}
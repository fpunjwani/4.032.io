function setup() {
  createCanvas(1030, 800);
  background(220);
}
//Every 98 seconds another American is sexually assaulted
function draw() {
    background(220);
    textSize(20);
    fill(250);
    textStyle(BOLD);
    text('A PERSON IS ASSAULTED EVERY 98 SECONDS IN THE US.', 12, 20);
    text('TAKE A PAUSE. DO THE MATH', 12, 40);    

//calculating time in seconds passed
    var h = hour();
    var m = minute();  
    var s = second();  
    var h_sec = h*60*60;
    var m_sec = m*60;
    var s_now = (s+h_sec+m_sec);
//number to display on the canvas
    var text_to_display=0; //counting and displaying sexual assaulted happened today
    var text_to_display_2=0; //displayed total sexual assaulted per day
//coordinates for mapping numbers on the cavas
    var x=12;
    var y=60;
    var x_2=12;
    var y_2=60;
//total number of assaults per day
    for (var b=0; b<86400; b+=98){
        textSize(10);
        text(text_to_display_2, x_2, y_2);
        text_to_display_2 = text_to_display_2+1;
        fill(210);
        x_2=x_2+25;
        if (x_2>1020) {
            y_2=y_2+25;
            x_2=12;}
    }
    for (var a=0; a < s_now; a+=98) {  
// number sexually assaulted today
        textSize(10);
        text(text_to_display, x, y);
        fill(255);
        text_to_display = text_to_display+1;
        x=x+25;
        if (x>1020) {
            y=y+25;
            x=12;}
    }
//text stating 'people have been assaulted'
    textSize(10);
    fill(0)
    textStyle(ITALIC);
    text('people have been assaulted in the US today', 12, y_2+25);
}
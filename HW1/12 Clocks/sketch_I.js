var coffee;
var sleep;
var eggs;
var noon;
var study;
var dance;
var dinner;
var lunch;
function preload() {
  sleep = loadImage("https://cdn.shopify.com/s/files/1/1061/1924/products/Dark_Blue_Moon_Emoji_large.png?v=1480481043");
//   var dream = loadImage("https://i.pinimg.com/236x/14/0d/84/140d84911b9b044805162cd55ac3fc45--emoji-faces-smiley-faces.jpg");
  lunch = loadImage("https://cdn.shopify.com/s/files/1/1061/1924/products/Taco_Emoji_large.png?v=1480481066");
  dinner = loadImage("https://cdn.shopify.com/s/files/1/1061/1924/products/Sushi_Emoji_large.png?v=1480481064");
  coffee = loadImage("https://cdn.shopify.com/s/files/1/1061/1924/products/Hot_Coffee_Emoji_large.png?v=1480481030");
  eggs = loadImage("https://cdn.shopify.com/s/files/1/1061/1924/products/Cooking_Egg_Emoji_large.png?v=1480481066");
  dance = loadImage("https://cdn.shopify.com/s/files/1/1061/1924/products/Dancer_With_Red_Dress_Emoji_large.png?v=1480481045");
  noon = loadImage("https://cdn.shopify.com/s/files/1/1061/1924/products/The_Sun_Face_Emoji_large.png?v=1480481044");
  study = loadImage("https://cdn.shopify.com/s/files/1/1061/1924/products/Open_Book_Emoji_large.png?v=1480481040");
}
function setup() {
    createCanvas(800,800);
    sleep.resize(50, 50);
    lunch.resize(50,50);
    dinner.resize(50,50);
    coffee.resize(50,50);
    eggs.resize(50, 50);
    dance.resize(50,50);
    noon.resize(50, 50);
    study.resize(50,50);
    h=hour();
    
    
    }

    function draw(){

for(var i=0; i<=h; i++) {
        if(i<4){
            image(sleep,50*i,0);
        }
        if(i>3 && i<6){
            image(sleep,50*(i-4),50);
        }
        if(i>5 && i<8){
            image(coffee,50*(i-4),50);
        }
        if(i>7 && i<9){
            image(eggs,50*(i-8),100);
        }
        if(i>8 && i<12){
            image(study,50*(i-8),100);
        }
        if(i>11 && i<13){
            image(noon,50*(i-12),150);
        }
        if(i>12 && i<14){
            image(lunch,50*(i-12),150);
        }
        if(i>13 && i<16){
            image(study,50*(i-12),150);
        }
        if(i>15 && i<19){
            image(study,50*(i-16),200);
        }
        if(i>18 && i<20){
            image(dinner,50*(i-16),200);
        }
        if(i>19 && i<22){
            image(dance,50*(i-20),250);
        }
        if(i>21){
            image(sleep,50*(i-20),250);
        }}
    var x;
    if(h>4 && h<9){
        x=4;
        y=75;
    }
    if(h>8 && h<13){
        x=8;
        y=125;
    }
    if(h>12 && h<17){
        x=12;
        y=175;
    }
    if(h>16 && h<21){
        x=16;
        y=225;
    }
    if(h>20){
        x=20;
        y=275;
    }
    arc((50*(h-x)+25), y, 50, 50, (radians(minute()/60*360))-HALF_PI,-HALF_PI);}


    // if (h==20){
    //     image(img, 0, 0);
    // }
    // if (h==21){
    //     image(img2, 0, 0);
    
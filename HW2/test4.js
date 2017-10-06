//seaons
var summer;
var fall;
var winter;
var spring;

//sun
var sunny;

//clouds
var cloud_counter=1;
var clouds;
var position_sun;
var wind;

// wind 
var position;

//API
var weather;
var api = 'https://api.darksky.net/forecast/';
var apiKey = 'c7fe1cf5bf9250c8ad6981c775954dfa/';
var lat = '42.3601,';
var long = '-71.0589';
var url = api + apiKey + lat + long;
var angle;


function preload() {  // preload() runs once
    // summer=loadImage('https://www.golfknickers.com/v/vspfiles/images/homepage/side_golfers/side-golfer-tprdr01.png');
    // winter=loadImage('http://www.arcticrange.com/sites/default/files/images/northern-lights-pkg.png');
//     fall=loadImage('https://drive.google.com/open?id=0B-1F-jbBpcLucHZiMmpKUlZPaWc');
    // spring=loadImage('https://i.pinimg.com/originals/03/cc/73/03cc73c97427d9d8408f9a67f09acb05.jpg');
    weather=loadJSON(url,'jsonp');
}

function setup() {
  createCanvas(414, 736);

//loadJSON(url, gotWeather, 'jsonp');
  
  //WIND
  // Circle starts in the middle
  position = createVector(width, (height/2));
  // wind starts as (0,0)
  wind = createVector();
  // Get the angle (convert to radians)
  var angle = radians(Number(weather.currently.windBearing));
  // Get the wind speed
  var windmag = Number(weather.currently.windSpeed);
  // Make a vector
  wind = p5.Vector.fromAngle(angle);
  
  //CLOUD
  // How many clouds are there in the sky?
  clouds = weather.currently.cloudCover;
  
  //SUN 
  //Move sun
  var sun_rise=new Date(Number(weather.daily.data[0].sunriseTime));
  var sun_set=new Date(Number(weather.daily.data[0].sunsetTime));
  var datetimeNow = new Date();
  position_sun=map(datetimeNow.getHours(),sun_rise.getHours(),sun_set.getHours()+12,10,400);
  //Is it dark or not outside?
  if (datetimeNow<sun_set){
      sunny=1;
    } else {
        sunny=0;
    };
  //if it is dark, color background accoringly
  if (sunny==1){
      background(0,206,250);
    //   rect(0, 0, 719, 100);
    } else {
      background(25,25,112);
    //   rect(0, 0, 719, 100);      
    }
  //draw sun or moon, with changing colors for sun dependent on temp
  //// FOR FUTURE: Make the moon dependent on the moon phase
  if (datetimeNow<sun_set){
      var from = color(255,160,122);
      var to = color(255, 69, 0);
      var gradient = map(weather.currently.temperature,20,90,0,1);
      var sun_color = lerpColor(from, to, gradient);
      fill(sun_color);
      ellipse(position_sun,80,60,60);
  } else {
      fill(192);
      ellipse(50,70,60,60); 
    }

    // draw land
    fill(1,166,17);
    noStroke();
    arc(50, 736, 200, 190, PI, 0, CHORD);
    arc(100, 736, 250, 180, PI, 0, CHORD);
    arc(200, 736, 150, 180, PI, 0, CHORD);
    arc(300, 736, 300, 180, PI, 0, CHORD);
    arc(400, 736, 200, 190, PI, 0, CHORD);


}

function draw() {
    
//   background(200);
  
  // Move in the wind's direction
  //// FOR FUTURE: Make the particle jiggle so it's a swirly line rather than a straight one
  position.add(wind);
  noStroke();
  fill(150, 150, 150, 127);
  ellipse(position.x, position.y, 1, 1);
  if (position.x > width)  position.x = 0;
  if (position.x < 0)      position.x = width;
  if (position.y > height) position.y = 0;
  if (position.y < 0)      position.y = height;



  //draw cloud
  ////FOR FUTURE: Make clouds move in the direction of the wind, at a fraction of speed of the wind 
  for(cloud_counter; cloud_counter<(clouds*50); cloud_counter++){
      drawCloud();
  };
  function drawCloud(){
      var x=random(30,400);
      var y=random(35, 420);
      fill(255, 128);
      noStroke();
      ellipse(x, y, 30, 30);
      ellipse(x-10, y+15, 30, 30);
      ellipse(x+10, y+15, 30, 30);
      rect(x-15,y, 28, 29.5);
    
  }
//   fall.resize(220,140);
//   image(fall,50,546);

}


// function gotWeather(data) {
//     weather=data;
//     //cloudcoverage
//     clouds = weather.currently.cloudCover;

//     //move sun
//     var sun_rise=new Date(Number(weather.daily.data[0].sunriseTime));
//     var sun_set=new Date(Number(weather.daily.data[0].sunsetTime));
//     var datetimeNow = new Date();
//     position_sun=map(datetimeNow.getHours(),sun_rise.getHours(),sun_set.getHours()+12,10,700);
//     // is it dark or not outside?
//     if (datetimeNow<sun_set){
//         sunny=1;        
//     } else {
//         sunny=0;
//     };

    


  // Display as HTML elements
//   var temperatureDiv = createDiv(floor(weather.currently.temperature) + '&deg;');
//   var windDiv = createDiv("WIND " + windmag + " <small>MPH</small>");
  
//   // Make a vector
//   wind = p5.Vector.fromAngle(angle);
// }

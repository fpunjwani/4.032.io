var weather;
var sun;
var clouds;
var person;
var wind;

var api = 'https://api.darksky.net/forecast/';
var apiKey = 'c7fe1cf5bf9250c8ad6981c775954dfa/';
var lat = '42.3601,';
var long = '-71.0589';

// https://api.darksky.net/forecast/c7fe1cf5bf9250c8ad6981c775954dfa/42.3601,-71.0589


function setup() {
    createCanvas(400, 500);
    sun = createVector();
    wind = createVector();
    weatherAsk();
}

function weatherAsk() {
    var url = api + apiKey + lat + long;
    loadJSON(url, gotData, 'jsonp');
}

function gotData(data) {
    weather = data;
    var angle = radians(Number(weather.currently.windBearing));
    var windmag = Number(weather.currently.windSpeed);
    var temperatureDiv = createDiv(floor(weather.currently.temperature) + '&deg;');
    var windDiv = createDiv("WIND " + windmag + " <small>MPH</small>");
    wind = p5.Vector.fromAngle(angle);
  
 
  // Make a vector
  
}

function draw() {
    background(200);
    push();
    translate(32, height-32);
    rotate(wind.heading()+PI/2);
    noStroke();
    fill(255);
    ellipse(0,0,48,48);
    stoke(45,123,182);
    strokeWeight(3);
    line(0,-16,0,16);
    noStroke();
    fill(45,123,182);
    triangle(0,-18,-6,-10,6,-10);
    pop();
    circle_position.add(wind);
    stroke(0);
    fill(51);
    var x=60;
    var y=60;
    ellipse(x, y, 30, 30);
    ellipse(x-15, y-15, 30, 30);
    ellipse(x+15, y-15, 30, 30);
    rectangle(x-30,y-30, 30, 30)


    ellipse(circle_position.x, circle_position.y, 16,16);
    if (circle_position.x > width)  circle_position.x = 0;
    if (circle_position.x < 0)      circle_position.x = width;
    if (circle_position.y > height) circle_position.y = 0;
    if (circle_position.y < 0)      circle_position.y = height;
}

    // if (weather) {
    //     var temp = weather.currently.temperature;
    //     var humidity = (weather.currently.humidity)*10;
    //     fill(255);
    //     ellipse(100, 100, temp, temp);
    //     ellipse(300, 300, humidity, humidity);
    //     console.log(humidity);
    // }
// }
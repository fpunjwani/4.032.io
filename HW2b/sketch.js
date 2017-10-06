// partial credit to Daniel Shiffman
// http://codingtra.in
// http://patreon.com/codingtrain


//API
var weather;
var api = 'https://api.darksky.net/forecast/';
var apiKey = 'c7fe1cf5bf9250c8ad6981c775954dfa/';
var lat = '42.3601,';
var long = '-71.0589';
var url = api + apiKey + lat + long;

var stars = [];
var speed;
var sleep;
var windmag;
var temp;

// function preload() {  // preload() runs once
//     // weather=loadJSON(url,'jsonp');
// //     // sleep = loadImage("https://cdn.shopify.com/s/files/1/1061/1924/products/Dark_Blue_Moon_Emoji_large.png?v=1480481043");
// }
// var sleep;



// function preload() {
//     sleep = loadImage("https://cdn.shopify.com/s/files/1/1061/1924/products/Dark_Blue_Moon_Emoji_large.png?v=1480481043");
// }

function setup() {
  createCanvas(414, 736);
  for (var i = 0; i < 200; i++) {
    stars[i] = new Star();
  }
  loadJSON(url, gotWeather, 'jsonp');

}

function gotWeather(data) {
    weather=data;
    windmag = Number(weather.currently.windSpeed);
    temp = Number(weather.currently.temperature);
}

function draw() {
    var from = color(255,160,122);
    var to = color(255, 69, 0);
    var gradient = map(temp,20,90,0,1);
    var sun_color = lerpColor(from, to, gradient);
    background(sun_color);
    speed = map(windmag, 0, 10, 0, 50);
   translate(width / 2, height / 2);
    for (var i = 0; i < stars.length; i++) {
        stars[i].update();
        stars[i].show();
    }
}

// function Star() {
//   this.x = random(-width, width);
//   this.y = random(-height, height);
//   this.z = random(width);
// //   this.pz = this.z;

//   this.update = function() {
//     this.z = this.z - 5;
//     if (this.z < 1) {
//       this.z = width;
//       this.x = random(-width, width);
//       this.y = random(-height, height);
//     //   this.pz = this.z;
//     }
//   }

//   this.show = function() {
//     // fill(255);
//     // noStroke();

//     var sx = map(this.x / this.z, 0, 1, 0, width);
//     var sy = map(this.y / this.z, 0, 1, 0, height);

//     var r = map(this.z, 0, width, 80, 0);
//     sleep.resize(80,80);
//     // sleep.resize(r,r);
//     image(sleep, sx, sy);
//     // ellipse(sx, sy, r, r);
//     // var px = map(this.x / this.pz, 0, 1, 0, width);
//     // var py = map(this.y / this.pz, 0, 1, 0, height);

//     // this.pz = this.z;

//     // stroke(255);
//     // line(px, py, sx, sy);

//   }
// }

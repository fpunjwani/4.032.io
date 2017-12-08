function setup() {
  createCanvas(720, 400);
  stroke(255);
  noFill();
}

function draw() {
  background(0);
  for (var i=0; i < hour()*10; i += 10) {
    bezier(second()*600/60-(i/2.0), 40+i-minute()*20/60, 410, 20, 440, 300, 240-(i/16.0), 300+(i/8.0));
    console.log(second());
  }
}



// // function setup() {

// //   // create canvas
// //   createCanvas(710, 400);

// // //   input = createInput();
// // //   input.position(20, 65);

// // //   button = createButton('submit');
// // //   button.position(input.x + input.width, 65);
// // //   button.mousePressed(greet);

// // //   greeting = createElement('h2', 'what is your name?');
// // //   greeting.position(20, 5);

// // //   textAlign(CENTER);
// // //   textSize(50);
// // }

// // function draw() {
// //     background(255, 255, 255);
// // //   var name = input.value();
// // //   greeting.html('hello '+name+'!');
// // //   input.value('');

// //   var s=second();
// //   var m=minute();
// //   var h=hour();

// // //   for (var i=0; i<s; i++) {
// //     // push();
// //     // fill(random(40), 255, 255);
// // // translate(random(width), random(height));
// //     rotate(s*360/60);
// //     text(s, 200, 200);
// //     // pop();
// // // 
// // }
// //   function mousePressed() {
// //    redraw();
// //   }


// var y;

// // The statements in the setup() function 
// // execute once when the program begins
// function setup() {
//   createCanvas(720, 400);
//   stroke(255);
//   noLoop();
  
// }

// // The statements in draw() are executed until the 
// // program is stopped. Each statement is executed in 
// // sequence and after the last line is read, the first 
// // line is executed again.
// function draw() {
//   background(0);
// //   y = y - 4;
// //   if (y < 0) {
// //     y = height;
// //   }
//   line(0, y, l, y);
//   console.log(height);
//   console.log(width);
//   console.log(second());
// }

// // function mousePressed() {
// //   redraw(); 
// // }
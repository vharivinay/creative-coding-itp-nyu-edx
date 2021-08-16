/* 
  This exercise uses random() function is generate analogous color palettes
*/
var numColumns = 5;
var colorRange = 60;
var h = 0;

function setup() {
  createCanvas(800, 800);
  colorMode(HSB, 360, 100, 100);
  noStroke();

  // noLoop used here because keyPressed is used to call the draw function when needed.
  noLoop();
}

function draw() {
  for (var i = 0; i < numColumns; i++) {
    var randomHue = random(h - colorRange, h + colorRange);
    fill(randomHue, 60, 100);
    rect((i * width) / numColumns, 0, width / numColumns, height);
  }
}

// This function is constantly listening for key press
function keyPressed() {
  // If the pressed key is SPACEBAR (code ==> 32) new hue is computed and draw is called again.
  if (keyCode == 32) {
    h = random(0, 360);
    redraw();
  }
}

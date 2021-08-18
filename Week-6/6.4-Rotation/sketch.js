function setup() {
  createCanvas(innerWidth, innerHeight);
  background(0);
  // Set rectangle origin to center of the rectangle
  // By default, it is at top left corner
  rectMode(CENTER);
  // set no stroke
  noStroke();
}

function draw() {
  // translate before rotate
  translate(frameCount % width, frameCount % height);
  rotate(radians(frameCount));

  // rgba - red, green, blue, alpha
  fill(255, 255, 255, 4);
  rect(0, 0, 40, 80);
}

// Clear canvas on mouse pressed

function mousePressed() {
  background(0);
}

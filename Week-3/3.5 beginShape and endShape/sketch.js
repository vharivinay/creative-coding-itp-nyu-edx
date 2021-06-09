function setup() {
  createCanvas(500, 500);
  frameRate(10); //Defines the framerate for the sketch render
}

function draw() {
  background(255);
  fill(120, 40, 180);
  beginShape()
  for (var i = 0; i < 24; i++) {
    vertex(i * random(100), random(height));
  }
  endShape(CLOSE)
}
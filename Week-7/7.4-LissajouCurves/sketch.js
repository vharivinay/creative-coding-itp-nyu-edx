var periodOne = 125.0;
var periodTwo = 90.0;
var pointCount = 0;
var angle = 0;
var amplitude = 300;

function setup() {
  createCanvas(600, 600);
  background(220);
}

function draw() {
  noFill();
  strokeWeight(1);
  stroke(100);
  translate(width / 2, height / 2);
  if (pointCount > 2250) {
    noLoop();
  }
  beginShape();
  for (var i = 0; i < pointCount; i++) {
    angle = (i / periodOne) * TWO_PI;
    var x = sin(angle) * amplitude;
    angle = (i / periodTwo) * TWO_PI;
    var y = sin(angle) * amplitude;
    vertex(x, y);
  }
  endShape();
  pointCount++;
}

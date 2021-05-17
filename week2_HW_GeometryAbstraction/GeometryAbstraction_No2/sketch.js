var xpos = 0;
var ypos = 0;
var hside = 100;
var vside;
var offset = 10;

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(0);
  colorMode(HSB);

  vside = height;
}

var hu = 190;

function makeCircs(xpos, ypos, hside, vside) {
  fill(map(xpos, 0, width, 220, 190), 255, 255, 255, 255);
  while (vside < height) {
    ellipse(xpos + hside / 2, vside + hside / 2, hside);
    vside = vside + hside;
    if (hu > 220) {
      hu = 190;
    }
    hu += 1;
  }

}

function makeRects() {
  fill(map(xpos, 0, width, 30, 0), 255, 255);
  rect(xpos, ypos, hside, vside);

  makeCircs(xpos, ypos, hside, vside);
  xpos = xpos + hside + offset;
  offset *= 0.975
  vside = vside * 0.9;
  hside = hside * 0.85;
  if (xpos > width) {
    noLoop();
  }
}

function draw() {
  noStroke();
  makeRects();
  noFill();
  stroke(0);
  strokeWeight(10);
  rect(0, 0, windowWidth, windowHeight);
}
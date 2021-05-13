var xpos = 0;
var ypos = 0;
var hside = 100;
var vside;
var offset = 10;

function setup() {
  createCanvas(900, 900);
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
  fill(map(xpos, 0, width, 190, 200), 255, 255);
  rect(xpos, ypos, hside, vside);

  makeCircs(xpos, ypos, hside, vside);
  xpos = xpos + hside + offset;
  vside = vside * 0.8;
  hside = hside * 0.85;
}

function draw() {
  noStroke();
  makeRects();
  noFill();
  stroke(0);
  strokeWeight(10);
  rect(0, 0, height, width);
}
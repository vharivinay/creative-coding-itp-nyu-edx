var radius;

function setup() {
  createCanvas(900, 900);
  background(240);
  angleMode(DEGREES);
  colorMode(HSB)
  noStroke();
}

var maxAngle = 360;
var minAngle = 0;

function makeArcs() {
  while (true) {
    fill(random(255), random(255), random(255), 100);
    arc(width / 2, height / 2, radius, radius, random(minAngle, maxAngle), random(minAngle, maxAngle), PIE);
    //maxAngle -= 15;
    //minAngle -= 15;
    break;
  }
}

var delta = 0;
var maxFrames = 120;

function draw() {
  //background(240);
  radius = (width - delta) * sqrt(2);
  fill(map(frameCount, 0, maxFrames, 0, 255), 35, 30);
  makeArcs();
  delta += 25;
  if (frameCount > maxFrames || radius < 10) {
    noLoop();
  }
}
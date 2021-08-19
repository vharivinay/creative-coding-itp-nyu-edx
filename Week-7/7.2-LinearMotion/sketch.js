let yPos;
var ySpeed = 1;
var radius = 50;

function setup() {
  createCanvas(400, 400);
  yPos = height / 2;
}

function draw() {
  background(220);
  yPos = yPos + ySpeed;
  if (yPos + radius / 2 > height || yPos - radius / 2 < 0) {
    ySpeed *= -1.0;
  }
  ellipse(width / 2, yPos, radius);
}

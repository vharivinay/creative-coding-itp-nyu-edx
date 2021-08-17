function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220);
  redCircle(mouseX, mouseY, 50);
}

function redCircle(x, y, circleRadius) {
  fill("red");
  ellipse(x, y, circleRadius * 2);
}

var theta = 0.0;
var rectWidthMultiplier = 10;
var rectHeightMultiplier = 20;
var rotationSpeed = 0.01;

function setup() {
  createCanvas(600, 600);
  rectMode(CENTER);
}

function draw() {
  background(255);
  noFill();

  //stationary rect
  push();
  translate(width / 2, height / 2);
  for (var i = 0; i < 25; i++) {
    rect(0, 0,
      i * rectWidthMultiplier,
      i * rectHeightMultiplier);
  }
  pop();

  //rotating rect
  push();
  translate(width / 2, height / 2);
  rotate(theta);
  for (var i = 0; i < 25; i++) {
    ellipse(0, 0,
      i * rectWidthMultiplier,
      i * rectHeightMultiplier);
  }
  pop();
  theta += rotationSpeed;
}
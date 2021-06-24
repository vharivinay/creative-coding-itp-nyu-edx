var side = 15;
var count = 5000;
var angle = 0;

let zoomSlider;
let rotateSlider;

function setup() {
  createCanvas(800, 800);
  background(225);
  stroke(0);
  strokeWeight(2);

  zoomSlider = createSlider(-0.5, 2, 1, 0.001);
  zoomSlider.position(10, height + 25);
  zoomSlider.style('width', '140px');

  rotateSlider = createSlider(-5, 5, 0, 0.001);
  rotateSlider.position(10, height + 50);
  rotateSlider.style('width', '140px');
}

function draw() {
  randomSeed(73);
  background(225);
  push();
  translate(width / 2, height / 2);
  for (var i = 0; i < count; i++) {
    point(random(-width / 2, width / 2), random(-height / 2, height / 2));
  }
  pop();

  let zoomValue = zoomSlider.value();
  let rotateAngle = rotateSlider.value();

  randomSeed(73);
  push();
  translate(width / 2, height / 2);
  rotate(radians(rotateAngle));
  scale(zoomValue);
  for (var i = 0; i < count; i++) {
    point(random(-width / 2, width / 2), random(-height / 2, height / 2));
  }
  pop();
  angle += 0.05;
}
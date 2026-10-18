var capture;

function setup() {
  createCanvas(640, 480);
  capture = createCapture(VIDEO);
  // source size ⟶ larger is higher resolution but slower
  capture.size(320, 240);
  capture.hide();
}

function draw() {
  background(255);
  tint(0, 150, 255);
  image(capture, 0, 0, width, height);
}

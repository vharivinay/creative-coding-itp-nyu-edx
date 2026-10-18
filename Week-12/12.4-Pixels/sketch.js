var img;
var step = 20;

function preload() {
  img = loadImage("../assets/cat.jpg");
}

function setup() {
  createCanvas(640, 360);
  noStroke();
  noLoop();
}

function draw() {
  background(255);
  // larger step ⟶ fewer pixels to go through ⟶ faster
  for (var x = 0; x < img.width; x += step) {
    for (var y = 0; y < img.height; y += step) {
      // color of the pixel at x, y
      fill(img.get(x, y));
      // small random offset so it's not exactly on a grid
      ellipse(x + random(-2, 2), y + random(-2, 2), step, step);
    }
  }
}

var img;

function preload() {
  img = loadImage("../assets/cat.jpg");
}

function setup() {
  createCanvas(640, 360);
}

function draw() {
  background(220);
  // image(img, x, y, width, height)
  image(img, 0, 0, img.width, img.height);
}

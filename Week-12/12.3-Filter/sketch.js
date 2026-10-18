var img;

function preload() {
  img = loadImage("../assets/cat.jpg");
}

function setup() {
  createCanvas(640, 400);
}

function draw() {
  background(255);
  // keep the aspect ratio while fitting the canvas width
  var resizedHeight = (img.height * width) / img.width;
  // image(img, dx, dy, dWidth, dHeight, sx, sy, sWidth, sHeight)
  image(img, 0, 0, width, resizedHeight, 0, 0, img.width, img.height);
  // filter comes after image
  filter(THRESHOLD, map(mouseX, 0, width, 0, 1));
  // filter(POSTERIZE, map(mouseX, 0, width, 2, 5));
  // filter(INVERT);
  // filter(GRAY);
}

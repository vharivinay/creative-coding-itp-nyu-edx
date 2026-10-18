// glitch - misaligned bands
var img;
var bandMisalign = 60;
var bandHeight = 20;

function preload() {
  img = loadImage("../assets/cat.jpg");
}

function setup() {
  createCanvas(640, 360);
  for (var i = 0; i < img.height; i += bandHeight) {
    // img.copy(src, sx, sy, sw, sh, dx, dy, dw, dh)
    img.copy(
      img,
      0, i, img.width, bandHeight,
      random(-bandMisalign, bandMisalign), i, img.width, bandHeight
    );
  }
}

function draw() {
  background(255);
  image(img, 0, 0);
}

// one image with 8 frames side by side
var spriteSheet;
var numFrames = 8;
var frameW;
var frameH;

function preload() {
  spriteSheet = loadImage("../assets/cat-sprite.png");
}

function setup() {
  createCanvas(400, 400);
  frameW = spriteSheet.width / numFrames;
  frameH = spriteSheet.height;
  frameRate(8);
}

function draw() {
  background(255);
  // shift the part of the image that is drawn each frame
  var index = frameCount % numFrames;
  image(spriteSheet, width / 2 - frameW, height / 2 - frameH, frameW * 2, frameH * 2, index * frameW, 0, frameW, frameH);
}

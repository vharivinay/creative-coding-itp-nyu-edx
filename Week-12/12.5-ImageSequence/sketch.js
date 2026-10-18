// sequence of images cat_000.png to cat_011.png
var frames = [];
var numFrames = 12;

function preload() {
  for (var i = 0; i < numFrames; i++) {
    frames.push(loadImage("../assets/cat-sequence/cat_" + nf(i, 3) + ".png"));
  }
}

function setup() {
  createCanvas(400, 400);
  imageMode(CENTER);
  frameRate(10);
}

function draw() {
  background(255);
  image(frames[frameCount % numFrames], width / 2, height / 2);
}

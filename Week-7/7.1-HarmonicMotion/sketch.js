/**
 * Using modulo, random, and noise (perlin noise) to generate random unwinding shapes
 * References:  http://p5js.org/reference/#/p5/noise
 * Aesthetic inspired by: John Whitney (https://www.youtube.com/watch?v=TbV7loKp69s)
 **/
var shapeWidth;
var shapeHeight;
var vertCount;
var framesTilRefresh = 60;

function setup() {
  createCanvas(windowWidth, windowHeight);
  shapeWidth = random(width / 2);
  shapeHeight = random(height / 2);
  vertCount = 10;
}

function draw() {
  background(100);
  translate(width / 2, height / 2);
  //using the modulo operator we can recalculate our vertCount every framesTilRefresh frames
  if (frameCount % framesTilRefresh === 0) {
    vertCount = floor(noise(frameCount) * 100);
  }
  if (frameCount % (framesTilRefresh * 6) === 0) {
    shapeWidth = random(width / 2);
    shapeHeight = random(height / 2);
  }
  makeShape(shapeWidth, shapeHeight, vertCount);
  if (vertCount > 0 && frameCount % 4 === 0) {
    vertCount--;
  }
}

function makeShape(_width, _height, verts) {
  noFill();
  beginShape(LINE_STRIP);
  for (var i = 0; i < verts; i++) {
    var x = cos((i * verts) / TWO_PI) * _width;
    var y = sin((i * verts) / TWO_PI) * _height;
    curveVertex(x, y);
  }
  endShape();
}

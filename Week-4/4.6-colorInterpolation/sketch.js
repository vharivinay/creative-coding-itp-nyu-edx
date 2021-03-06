/* 
  Simple color Interpolation
*/

var numColumns = 19;
let colorFrom;
let colorTo;

function setup() {
  createCanvas(800, 800);
  colorMode(HSB, 360, 100, 100);
  noStroke();
  colorFrom = color(0, 50, 100);
  colorTo = color(45, 80, 100);
}

function draw() {
  for (var i = 0; i < numColumns; i++) {
    var interpValue = map(mouseX * (i * 0.15), 0, width, 0.0, 1.0);
    var colorHue = lerpColor(colorFrom, colorTo, interpValue);
    fill(colorHue, 100, 100);
    rect((i * width) / numColumns, 0, width / numColumns, height);
  }
}

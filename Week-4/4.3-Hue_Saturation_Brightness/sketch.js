/* 
  This Example also includes an exercise to make a color spectrum grid
*/
function setup() {
  createCanvas(360, 360);

  // Specify colorMode
  colorMode(HSB, 360, 100, 100);

  /* 
    maximum Hue Value = 360
    maximum Saturation value = 100
    maximum Brightness value = 100
    */

  // background color
  background(45, 50, 100);

  fill(180, 100, 25);
  // specify rectMode
  rectMode(CENTER);
  rect(width / 2, height / 2, 100, 100);
}

function draw() {
  // Make a color spectrum grid
  noStroke();
  for (var i = 0; i < 360; i += 10) {
    for (var j = 0; j < 100; j += 10) {
      fill(i, j, 100);
      rect(i, j, 10, 10);
    }
  }
  noLoop();
}

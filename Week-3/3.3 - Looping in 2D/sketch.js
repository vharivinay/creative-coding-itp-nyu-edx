function setup() {
  createCanvas(500, 500);
}

function draw() {
  background(255);

  // Nested while loop
  /*var x = 0;
  beginShape(LINES);
  while (x < width) {
    var y = 0;
    while (y < height) {
      vertex(x, y);
      y += 10;
    }
    x += 10;
  }
  endShape();*/

  // Nested for loop
  for (var x = 10; x < width; x += 20) {
    for (var y = 10; y < height; y += 20) {
      ellipse(x, y, 20, 20);
    }
  }
}
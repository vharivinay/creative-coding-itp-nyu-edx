function setup() {
  createCanvas(400, 400);
  strokeWeight(10);
}

function draw() {
  background(220);
  // point(x-coordinate, y-cordinate);
  point(10,10); //topLeft
  point(390,10); //topRight 
  point(10,390); //bottomLeft
  point(390,390); //bottomRight
}

var radius = 25;
var xSpeed = 4.0;
var angle = 0.0;

function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220);
  translate(width / 2, height / 2);
  var amplitude = height / 2 - radius / 2;
  angle += 2.0;
  var x = cos(radians(angle)) * amplitude;
  var y = sin(radians(angle)) * amplitude;
  fill(100);
  ellipse(x, y, radius);
  x += xSpeed;
}

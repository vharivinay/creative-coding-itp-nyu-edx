function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(255);
  var x = 0;
  while (x < 20) {
    push();
    translate(x * 20, height / 2);
    scale(x * 0.1);
    ellipse(0, 0, 10, 10);
    pop();
    x++;
  }
}

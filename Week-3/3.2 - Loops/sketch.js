function setup() {
  createCanvas(400, 400);
}

function draw() {
  var x = 0;

  // while loop
  while (x < width) { // Loop stops when this condition is false
    fill(0, 255, 0);
    noStroke();
    ellipse(x, height / 3, 20, 20);
    x += 20; //Controls the number itertions
  }

  // for loop
  for (var i = 0; i < 20; i++) {
    noFill();
    stroke(0);
    rect(i * 20, 2 * height / 3, 15, 15);
  }
}
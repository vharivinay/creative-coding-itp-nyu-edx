var data = [1.2, 3.5, 6, 2.4, 4.8, 1.9];

function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(255);
  translate(0, height / 2);
  for (var i = 0; i < data.length; i++) {
    translate(55, 0);
    // data ranges from 1.2 to 6 ⟶ remap to 5 to 45 pixels
    var circleSize = map(data[i], min(data), max(data), 5, 45);
    ellipse(0, 0, circleSize, circleSize);
  }
}

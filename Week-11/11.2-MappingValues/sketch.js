function setup() {
  createCanvas(400, 400);
  textAlign(CENTER);
}

function draw() {
  background(220);
  // mouseX ranges from 0 to width ⟶ remap to 0 to 1
  var mappedMouse = map(mouseX, 0, width, 0, 1);
  text("mappedMouse is " + mappedMouse, width / 2, height / 2);
}

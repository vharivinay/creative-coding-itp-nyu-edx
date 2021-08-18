function setup() {
  createCanvas(400, 400);
  colorMode(HSB, 360, 100, 100);
}

function draw() {
  background(200, 100, 30);
  fill(45, 76, 100);

  /* 
  (x1,y1) ⟶ (-40,0)
  (x2,y2) ⟶ (40,0)
  (x3,y3) ⟶ (0,-40)
  */

  push();
  translate(mouseX, mouseY);
  triangle(-40, 0, 40, 0, 0, -40);
  pop();
  drawCoords();
}

/* Display coordinates */
function drawCoords() {
  text(mouseX + "; " + mouseY, 20, height - 45);
}

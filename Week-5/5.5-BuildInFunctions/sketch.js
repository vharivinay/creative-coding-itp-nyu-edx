var posX, posY;
var spaceShipColor;

function setup() {
  createCanvas(400, 400);
  posX = width / 2;
  posY = height / 2;
  spaceShipColor = color(180);
}

function draw() {
  background(240);
  drawSpaceShip(posX, posY);
}

function drawSpaceShip(posX, posY) {
  fill(spaceShipColor);
  beginShape();
  vertex(posX - 45, posY - 45);
  vertex(posX + 45, posY);
  vertex(posX - 45, posY + 45);
  endShape(CLOSE);
}

/* 
 ASCII Values for Keys
 More info on 
 keyPressed: https://p5js.org/reference/#/p5/keyPressed
 keyCode: https://p5js.org/reference/#/p5/keyCode

 W = 87
 A = 65
 S = 83
 D = 68

*/

function keyPressed() {
  /* This moves the space ship */
  if (keyCode === 87) {
    posY -= 12;
  } else if (keyCode === 65) {
    posX -= 12;
  } else if (keyCode === 83) {
    posY += 12;
  } else if (keyCode === 68) {
    posX += 12;
  }
}

function mouseClicked() {
  /* Acts as both mousePressed and mouseReleased */
  /* sets a random space shit color */
  spaceShipColor = color(random(255), random(255), random(255));
}

/* Uncomment as needed! */

/* function mouseMoved() {
  posX = mouseX;
  posY = mouseY;
} */

/* function mousePressed() {
  // sets space shit color
  spaceShipColor = color("blue");
}

function mouseReleased() {
  // Resets space ship color 
  spaceShipColor = color(180);
} */

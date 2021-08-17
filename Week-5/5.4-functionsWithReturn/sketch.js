var rectPosX, rectPosY;

function setup() {
  createCanvas(400, 400);
  background(220);
  rectPosX = 0;
  rectPosY = height / 2;
}

function draw() {
  /* Depending on the value of the randomBool()
    The position of the rect angle is changed
  */
  if (randomBool() === true) {
    rectPosX += 12;
    rectPosY += 12;
  } else {
    rectPosY -= 12;
  }
  fill(0);
  rect(rectPosX, rectPosY, 12);
}

/* Returns a boolean */
function randomBool() {
  /* This function essentially replicates coin toss */
  var isTrue = true;
  var toss = random(0, 1);
  if (toss > 0.5) {
    isTrue = true;
  } else {
    isTrue = false;
  }
  return isTrue;
}

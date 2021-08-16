function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(255);

  // Additive color
  // Top Left
  var redColor = color(255, 0, 0);
  fill(redColor);
  rect(0, 0, width / 2, height / 2);
  //top right
  var greenColor = color(0, 255, 0);
  fill(greenColor);
  rect(width / 2, 0, width / 2, height / 2);
  /*  
  Bottom rect
  mixColor = redColor + greenColor
  */
  var mixColor = color(
    red(redColor) + red(greenColor),
    green(redColor) + green(greenColor),
    blue(redColor) + blue(greenColor)
  );
  fill(mixColor);
  /* 
  The same can be simply achieved by
    fill(255,255,0)
  */
  rect(0, height / 2, width, height / 2);
}

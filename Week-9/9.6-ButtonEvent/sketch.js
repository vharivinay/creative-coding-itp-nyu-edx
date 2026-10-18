var button;
var bg;

function setup() {
  createCanvas(windowWidth, windowHeight);
  bg = color(0);
  button = createElement("button", "click me");
  button.position(20, 20);
  // anonymous callback function, runs only when the button is pressed
  button.mousePressed(function () {
    bg = color(random(255), random(255), random(255));
  });
}

function draw() {
  background(bg);
}

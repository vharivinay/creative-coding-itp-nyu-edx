var header;

function setup() {
  noCanvas();
  header = createElement("h1", "Hi, I'm an H1 tag");
  frameRate(1);
}

function draw() {
  // translate() only works inside the canvas, so position() is used for DOM elements
  header.position(random(windowWidth), random(windowHeight));
}

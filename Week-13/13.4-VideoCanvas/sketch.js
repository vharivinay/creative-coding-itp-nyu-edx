var cat;

function setup() {
  createCanvas(windowWidth, windowHeight);
  cat = createVideo(["../assets/cat.mp4"]);
  cat.volume(0);
  cat.loop();
  // hide the DOM element, draw it in the canvas instead
  cat.hide();
}

function draw() {
  background(220);
  // red channel only
  tint(255, 0, 0);
  image(cat, width / 2 - cat.width / 2, height / 2 - cat.height / 2);
}

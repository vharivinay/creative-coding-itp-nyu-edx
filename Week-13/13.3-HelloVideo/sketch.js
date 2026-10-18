var cat;

function setup() {
  createCanvas(windowWidth, windowHeight);
  // array of paths ⟶ other formats can be added as fallbacks
  cat = createVideo(["../assets/cat.mp4"]);
  cat.volume(0);
  cat.loop();
  cat.showControls();
}

function draw() {
  background(220);
  // center the video element on the page
  cat.position(width / 2 - cat.width / 2, height / 2 - cat.height / 2);
}

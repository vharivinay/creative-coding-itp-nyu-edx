var cat;

function setup() {
  createCanvas(windowWidth, windowHeight);
  cat = createVideo(["../assets/cat.mp4"]);
  cat.volume(0);
  cat.loop();
  cat.showControls();
}

function draw() {
  background(220);
  cat.position(width / 2 - cat.width / 2, height / 2 - cat.height / 2);
  // in seconds
  text("current time is " + cat.time(), 20, 32);
  text("video duration is " + cat.duration(), 20, 64);
}

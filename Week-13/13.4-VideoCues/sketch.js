var cat;
var bgColor;
var isMakeBubble = false;
var bubblePos;

function setup() {
  createCanvas(windowWidth, windowHeight);
  bgColor = color(220);
  cat = createVideo(["../assets/cat.mp4"]);
  cat.volume(0);
  cat.loop();
  cat.showControls();
  // addCue(time in seconds, callback, parameter)
  cat.addCue(3, changeBgColor);
  cat.addCue(4, triggerBubble, height);
}

function draw() {
  background(bgColor);
  cat.position(width / 2 - cat.width / 2, height / 2 - cat.height / 2);
  text("current time is " + cat.time(), 20, 32);
  text("video duration is " + cat.duration(), 20, 64);

  if (isMakeBubble) {
    if (bubblePos < 0) {
      isMakeBubble = false;
    } else {
      ellipse(width / 2, bubblePos, 20, 20);
      bubblePos -= 3;
    }
  }
}

function changeBgColor() {
  bgColor = color(random(255), random(255), random(255));
}

function triggerBubble(posY) {
  isMakeBubble = true;
  bubblePos = posY;
}

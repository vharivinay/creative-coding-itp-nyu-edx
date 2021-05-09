const letters = ["C", "D", "E", "O"];

const capturer = new CCapture({
  framerate: 5,
  format: "webm",
  name: "badbatch",
  quality: 100,
  verbose: true,
});

let p5Canvas;

let fingers;

function setup() {
  p5Canvas = createCanvas(540, 304);
  // specify multiple formats for different browsers
  fingers = createVideo(['assets/badbatch.mp4']);
  fingers.loop();
  fingers.hide();
  noStroke();
  fill(0);
  print(typeof(fingers));
}

function draw() {
  if (frameCount === 1) capturer.start();
  background(255);
  fingers.loadPixels();
  const stepSize = round(constrain(mouseX / 8, 2.5, 16));
  for (let y = 0; y < height; y += stepSize) {
    for (let x = 0; x < width; x += stepSize) {
      const i = y * width + x;
      const darkness = (255 - fingers.pixels[i * 4]) / 255;
      const radius = stepSize * darkness;
      ellipse(x, y, radius, radius);
    }
  }
  capturer.capture(p5Canvas.canvas);
  if (frameCount === 37) {
    noLoop();
    capturer.stop();
    capturer.save();
    }
}

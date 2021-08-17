function setup() {
  createCanvas(400, 400);
  background(220);
  greetings();
}

function greetings() {
  /* Aligns text to be at center */
  textAlign(CENTER);
  text("Hello there!", width / 2, height / 2);
}

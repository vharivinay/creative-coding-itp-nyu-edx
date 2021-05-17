var x = 1;
var y = 1;
var s1, s2;
var count = 0;

function setup() {
  createCanvas(900, 900);
  background(220);

  w = width / 10;
  h = height / 10;
  s1 = w - 2;
  s2 = h - 2;

  angleMode(DEGREES);


  noStroke()
  fill(100, 175, 0);

}

var sA = 0;
var eA = 3.6;

function makeArcs(x, y, r, r, sA, eA) {
  colorMode(HSB);
  noStroke()
  fill(map(eA, 3.6, 360, 0, 255), 30, 100);
  arc(x, y, r, r, sA, eA, PIE);
  noFill();
  stroke(map(eA, 3.6, 360, 255, 0), 75, 100);
  ellipse(x, y, r + 10);
  stroke(map(eA, 3.6, 360, 0, random(255)), 30, 100);
  rect(x - (w / 2 - 10), y - (h / 2 - 10), s1 - 18, s2 - 18);
}

function fillRect() {
  while (true) {
    fill(0);
    noStroke()
    rect(x, y, s1, s2);
    makeArcs(x + (w / 2), y + (h / 2), s1 / 2, s2 / 2, sA, random(0, 360));
    x += w;
    if (x >= width) {
      x = 1;
      if (y >= height) {

        break;
      }
      y += h;
    }
  }
}

function draw() {
  fillRect();
}
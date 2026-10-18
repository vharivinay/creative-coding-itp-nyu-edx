// Andy Warhol style screen print
var catImg;
var numCats = 5;

function preload() {
  catImg = loadImage("../assets/cat.jpg");
}

function setup() {
  createCanvas(640, 400);
}

function draw() {
  background(30, 90, 200);
  for (var i = 0; i < numCats; i++) {
    // tint(r, g, b, alpha) ⟶ alpha for transparency like a screen print
    tint(i * 50, i * 20, 255 - i * 40, 150);
    image(catImg, i * 60, i * 20, catImg.width / 2, catImg.height / 2);
  }
}

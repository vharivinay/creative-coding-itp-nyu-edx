// In a Station of the Metro - Ezra Pound
var couplet = "The apparition of these faces in the crowd; Petals on a wet, black bough.";
var words = [];
var pos = [];

function setup() {
  createCanvas(400, 400);
  words = RiTa.tokenize(couplet);
  // getPosTags takes an array, not a string
  pos = RiTa.getPosTags(words);
}

function draw() {
  background(255);
  var wordPosX = 10;
  var wordPosY = 30;
  for (var i = 0; i < words.length; i++) {
    text(words[i], wordPosX, wordPosY);
    // same length as words ⟶ one tag per word
    text(pos[i], wordPosX, wordPosY + 20);
    wordPosX += textWidth(words[i]) + 16;
    if (wordPosX > width - 50) {
      wordPosX = 10;
      wordPosY += 50;
    }
  }
}

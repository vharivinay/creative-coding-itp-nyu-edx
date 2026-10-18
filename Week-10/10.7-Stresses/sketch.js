var lyricLine = "Thank you very much Mr. Robot";
var words = [];

function setup() {
  createCanvas(400, 400);
  words = RiTa.tokenize(lyricLine);
}

function draw() {
  background(255);
  translate(20, 20);
  var pos = 0;
  for (var i = 0; i < words.length; i++) {
    // 1 ⟶ stressed, 0 ⟶ not stressed, / ⟶ separates syllables
    var stresses = RiTa.getStresses(words[i]);
    text(words[i], pos, 20);
    text(stresses, pos, 45);
    pos += textWidth(words[i]) + 10;
  }
}

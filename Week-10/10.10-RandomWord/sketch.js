var lexicon;

function setup() {
  createCanvas(400, 400);
  textAlign(CENTER, CENTER);
  lexicon = new RiLexicon();
  background(255);
  text("click", width / 2, height / 2);
}

function mousePressed() {
  background(255);
  var word = lexicon.randomWord();
  text(word, width / 2, height / 2);
}

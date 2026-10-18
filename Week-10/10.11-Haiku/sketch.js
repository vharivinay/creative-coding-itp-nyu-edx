var lexicon;

function setup() {
  createCanvas(400, 400);
  textAlign(CENTER, CENTER);
  lexicon = new RiLexicon();
  background(255);
  generateHaiku();
}

function mousePressed() {
  background(255);
  generateHaiku();
}

// 5 - 7 - 5 syllables
function generateHaiku() {
  // 1 + 2 + 2
  var output = lexicon.randomWord("jj", 1);
  output += " " + lexicon.randomWord("vbg", 2);
  output += " " + lexicon.randomWord("nn", 2);
  output += "\n";
  // 2 + 2 + 3
  output += lexicon.randomWord("vbg", 2);
  output += " " + lexicon.randomWord("jj", 2);
  output += " " + lexicon.randomWord("nn", 3);
  output += "\n";
  // 1 + 2 + 2
  output += lexicon.randomWord("nns", 1);
  output += " " + lexicon.randomWord("vbg", 2);
  output += " " + lexicon.randomWord("nn", 2);
  text(output, width / 2, height / 2);
}

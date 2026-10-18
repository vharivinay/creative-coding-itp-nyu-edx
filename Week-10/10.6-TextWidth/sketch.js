var words = ["huge", "huuuuge", "huuuuuuuuuuuge"];

function setup() {
  createCanvas(400, 400);
  background(220);
  var y = 50;
  for (var i = 0; i < words.length; i++) {
    var wordWidth = textWidth(words[i]);
    text(words[i], 50, y);
    // rectangle as wide as the word
    rect(50, y + 20, wordWidth, wordWidth);
    y += wordWidth + 50;
  }
}

function setup() {
  createCanvas(400, 400);
  background(220);
  // string ⟶ array of tokens (words and punctuation)
  var words = RiTa.tokenize("I scream, you scream, we all scream for ice cream.");
  for (var i = 0; i < words.length; i++) {
    text(words[i], 10, i * 20 + 20);
  }
}

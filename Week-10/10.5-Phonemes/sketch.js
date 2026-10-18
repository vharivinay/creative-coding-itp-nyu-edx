function setup() {
  createCanvas(400, 400);
  background(255);
  noFill();
  rect(0, 0, width - 1, height - 1);
  var phonemes = RiTa.getPhonemes("got me looking so crazy right now");
  text(phonemes, 50, 50, 300, 100);
  print(phonemes);
}

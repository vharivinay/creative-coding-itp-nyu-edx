var lyricLine = "Thank you very much Mr. Robot";

function setup() {
  createCanvas(400, 400);
  background(255);
  text(lyricLine, height / 2, height / 2);
  text(RiTa.getWordCount(lyricLine), height / 2, height / 2 + 45);
}

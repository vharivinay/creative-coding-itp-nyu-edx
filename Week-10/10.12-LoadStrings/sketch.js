var lines;

// runs before setup, waits for the file to load
function preload() {
  lines = loadStrings("assets/station-of-the-metro.txt");
}

function setup() {
  createCanvas(400, 400);
  background(255);
  // array of lines ⟶ one string, lines separated by a space
  text(lines.join(" "), 20, 20, width - 40, height - 40);
}

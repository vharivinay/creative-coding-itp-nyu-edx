var table;

function preload() {
  // path, file type, header ⟶ skip the header row
  table = loadTable("../data/antarctica_weather_averages.csv", "csv", "header");
}

function setup() {
  createCanvas(400, 400);
  textAlign(CENTER);
  background(255);
  text(table.getRowCount(), width / 2, height / 2);
  text(table.getColumnCount(), width / 2, height / 2 + 35);
}

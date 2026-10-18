var table;
var avTemperatureData = [];
var margin = 40;

function preload() {
  table = loadTable("../data/antarctica_weather_averages.csv", "csv", "header");
}

function setup() {
  createCanvas(600, 400);
  textAlign(CENTER);
  // index 2 ⟶ Average Low Temperature (F). arr ⟶ array representation of the row
  avTemperatureData = table.getRow(2).arr;
}

function draw() {
  background(255);
  translate(0, height / 2);
  fill(0);
  text("Average Low Temperature (F)", width / 2, -height / 2 + 30);
  // index 0 is the label, 1 is ANNUAL, 2 to 13 are JAN to DEC
  var months = 12;
  noFill();
  beginShape();
  for (var i = 2; i < 2 + months; i++) {
    var temp = avTemperatureData[i] * 5;
    // translate doesn't work inside beginShape ⟶ calculate x
    var x = margin + ((width - margin * 2) / (months - 1)) * (i - 2);
    // negative ⟶ higher temperatures go up the page
    vertex(x, -temp);
  }
  endShape();

  fill(0);
  for (var i = 2; i < 2 + months; i++) {
    var temp = avTemperatureData[i] * 5;
    var x = margin + ((width - margin * 2) / (months - 1)) * (i - 2);
    ellipse(x, -temp, 10, 10);
    text(table.columns[i], x, height / 2 - 20);
  }
}

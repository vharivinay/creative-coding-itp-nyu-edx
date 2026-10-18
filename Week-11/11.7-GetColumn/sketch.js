var table;
var columnData = [];
var temperatures = [];
// limited color palette from Adobe Color
var colors = ["#1B4F72", "#5DADE2", "#F1948A"];

function preload() {
  table = loadTable("../data/antarctica_weather_averages.csv", "csv", "header");
}

function setup() {
  createCanvas(400, 400);
  textSize(12);
  textAlign(CENTER);
  // [average, high, low, precipitation] for May
  columnData = table.getColumn("MAY");
  // leave out precipitation, only temperatures
  temperatures = columnData.slice(0, columnData.length - 1).map(Number);
}

function draw() {
  background(255);
  translate(width / 2 - 10, height / 4);
  fill(0);
  text("May Temperatures (F)", 10, -20);
  noStroke();
  // loop backwards ⟶ draw the tallest bar first so the shorter ones are drawn on top
  for (var i = temperatures.length - 1; i >= 0; i--) {
    // lowest temperature ⟶ tallest bar
    var mappedData = map(temperatures[i], min(temperatures), max(temperatures), 100, 10);
    fill(colors[i % colors.length]);
    rect(0, 0, 20, mappedData);
    fill(0);
    text(temperatures[i], 45, mappedData);
  }
}

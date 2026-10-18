var table;
var avTemperatureData = [];
var margin = 40;
var ctx;

function preload() {
  table = loadTable("../data/antarctica_weather_averages.csv", "csv", "header");
}

function setup() {
  var canvas = createCanvas(600, 400);
  // native javascript ⟶ the 2D drawing context of the canvas
  ctx = canvas.elt.getContext("2d");
  // JAN to DEC of Average Temperature (F)
  avTemperatureData = table.getRow(0).arr.slice(2, 14).map(Number);
  translate(margin, margin);

  // d3 ⟶ global variable from the d3 library. Chained methods
  var lineGenerator = d3
    .line()
    .x(function (d, i) {
      return map(i, 0, avTemperatureData.length - 1, 0, width - margin * 2);
    })
    .y(function (d) {
      return map(d, min(avTemperatureData), max(avTemperatureData), height - margin * 2, 0);
    })
    .curve(d3.curveCardinal);

  strokeWeight(2);
  stroke(0);
  noFill();
  var pathLinear = new Path2D(lineGenerator(avTemperatureData));
  ctx.stroke(pathLinear);

  // same thing in p5js
  // beginShape();
  // for (var i = 0; i < avTemperatureData.length; i++) {
  //   var x = map(i, 0, avTemperatureData.length - 1, 0, width - margin * 2);
  //   var y = map(avTemperatureData[i], min(avTemperatureData), max(avTemperatureData), height - margin * 2, 0);
  //   curveVertex(x, y);
  // }
  // endShape();
}

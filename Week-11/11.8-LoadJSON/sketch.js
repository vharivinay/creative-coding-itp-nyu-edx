var myData = [];

function setup() {
  createCanvas(400, 400);
  // anonymous callback, runs once the file is loaded
  loadJSON("../data/number_of_pushups.json", function (data) {
    myData = data;
    print(myData);
  });
}

function draw() {
  background(220);
  var i = 0;
  for (const element of myData) {
    ellipse(i * 50 + 25, height / 2, element.number_of_pushups, element.number_of_pushups);
    i++;
  }
}

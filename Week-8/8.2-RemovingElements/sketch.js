var myThirdArray = ["apple", "orange", "banana", "peach"];
var spliced = [];

function setup() {
  createCanvas(500, 500);
  textAlign(CENTER);
}

function draw() {
  background(255);
  // first element of the array
  text(myThirdArray[0], width / 2, height / 2);
  // last element of the array
  text(myThirdArray[myThirdArray.length - 1], width / 2, height / 2 + 25);
  // element removed by splice
  text(spliced, width / 2, height / 2 + 45);
}

function mousePressed() {
  // splice(index, howMany) removes the first element and returns it in a new array
  spliced = myThirdArray.splice(0, 1);
  // shorten() would remove the last element instead
  // shorten(myThirdArray);
}

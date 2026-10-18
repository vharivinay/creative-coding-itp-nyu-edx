var myFirstArray = [];
var dataScale = 50;

function setup() {
  createCanvas(500, 500);
  print(myFirstArray);
  // Method 2 - adding elements using the iterator as index
  // Method 1 would be myFirstArray.push(i * dataScale);
  for (var i = 0; i < 5; i++) {
    myFirstArray[i] = i * dataScale;
  }
  print(myFirstArray);
}

function draw() {
  background(255);
  noFill();
  for (var i = 0; i < myFirstArray.length; i++) {
    ellipse(width / 2, height / 2, myFirstArray[i] + 20, myFirstArray[i] + 20);
  }
}

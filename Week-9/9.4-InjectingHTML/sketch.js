var elements = [];
var radius = 300;

function setup() {
  noCanvas();
  for (var i = 0; i < 10; i++) {
    var elm = createElement("h1", "");
    var angle = map(i, 0, 10, 0, TWO_PI);
    elm.position(
      cos(angle) * radius + windowWidth / 2,
      sin(angle) * radius + windowHeight / 2
    );
    elements.push(elm);
  }
}

function draw() {
  for (var i = 0; i < elements.length; i++) {
    elements[i].html(frameCount);
  }
}

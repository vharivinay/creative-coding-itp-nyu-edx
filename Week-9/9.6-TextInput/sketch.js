var inputTextElement;
var inputText = "";

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(220);
  inputTextElement = createInput();
  inputTextElement.position(20, 20);
  // named callback function
  inputTextElement.input(handleInput);
}

function handleInput() {
  // this ⟶ the input element
  inputText = this.value();
}

function keyPressed() {
  if (keyCode === ENTER) {
    text(inputText, random(width), random(height));
  }
}

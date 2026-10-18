// No createCanvas() here. createCanvas() is also just creating a DOM element.
function setup() {
  createDiv("Hi there, I'm inside the DOM. <a href='https://p5js.org'>p5js</a>");
  createP("I'm a paragraph");
  createButton("click me");
  createImg("https://picsum.photos/200", "random image");
  createSlider(0, 255, 100);
  createElement("h1", "Hi, I'm a header1");
  createElement("h2", "Hi, I'm a header2");
  createElement("h3", "Hi, I'm a header3");
  createElement("h4", "Hi, I'm a header4");
  createElement("h5", "Hi, I'm a header5");
  createElement("h6", "Hi, I'm a header6");
}

var Cat = {
  color: "brown",
  greeting: "purr!",
  sayHello: function () {
    return this.greeting;
  },
};

function setup() {
  createCanvas(400, 400);
  textAlign(CENTER);
  var cat = Cat;
  var cat2 = Cat;
  // cat and cat2 refer to the same object, so changing cat2 changes cat as well
  cat2.color = "blue";
  print(cat.color);
  fill(cat2.color);
  text(cat.sayHello(), width / 2, height / 2);
}
